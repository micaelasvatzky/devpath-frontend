"use client";

import {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";
import axios from "axios";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [paths, setPaths] = useState([]);
  const [singlePath, setSinglePath] = useState({
    name: "",
    description: "",
    steps: [],
  });
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [selectedPath, setSelectedPath] = useState(null);
  const [user, setUser] = useState(null);
  const [favoriteResources, setFavoriteResources] = useState([]);

  const getPaths = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/paths`);
      setPaths(res.data.paths);
      console.log(res.data.paths);

      setLoading(false);
    } catch (error) {
      console.log("error:", error);
    }
  }, []);

  const getSinglePath = useCallback(async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/paths/${id}`
      );
      setSinglePath(res.data.path);
      console.log(res.data);

      setLoading(false);
    } catch (error) {
      console.log("error:", error);
    }
  }, []);

  const getSteps = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/steps`);
      setSteps(res.data.steps);
      console.log(res.data.steps);

      setLoading(false);
    } catch (error) {
      console.log("error:", error);
    }
  }, []);

  const updateSelectedPath = (path) => {
    setSelectedPath(path);
  };

  const addUser = async (userData) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users`,
        userData
      );
      console.log("Usuario registrado:", res.data.user);
      setUser(res.data.user);
    } catch (error) {
      console.log("Hubo un error al registrar el usuario:", error);
    }
  };

  useEffect(() => {
    console.log('favorites',favorites);
  }, [favorites]);

  const handleAddToFavorite = (id) => {
    const added = favorites.find((resource) => resource.id === id);
    if (!added) {
      setFavorites([...favorites, { id }]);
    }
  };

  const handleRemoveFavorite = (id) => {
    setFavorites(favorites.filter((resource) => resource.id !== id));
  };

  const handleChangeFavorite = (id) => {
    const exists = favorites.find((resource) => resource.id === id);
    if (exists) {
      handleRemoveFavorite(id);
    } else {
      handleAddToFavorite(id);
    }
  };

  const isFavorite = (id) => {
    return favorites.some((resource) => resource.id === id);
  };

  const favoritesQty = () => {
    return favorites.length;
  };

  const getFavoriteResources = useCallback(async (favoritesIds) => {
    try {
      setLoading(true); // Inicia el estado de carga

      // Hacemos la petición para cada id de favorito
      const resourcesFavorites = await Promise.all(
        favoritesIds.map(async (id) => {
          try {
            const res = await axios.get(
              `${process.env.NEXT_PUBLIC_API_URL}/resources/${id}`
            );
            return res.data.resource; // Retorna el recurso que obtenemos de la API
          } catch (error) {
            console.error(`Error al obtener el recurso con id ${id}:`, error);
            return null; // Si ocurre un error, retorna null
          }
        })
      );

      // Filtramos los resultados para eliminar los `null` (recursos no válidos)
      setFavoriteResources(resourcesFavorites.filter(resource => resource !== null));
      setLoading(false); // Fin de la carga
    } catch (error) {
      console.error("Error al obtener los recursos favoritos:", error);
      setLoading(false); // Finaliza la carga en caso de error
    }
  }, []);



  return (
    <AppContext.Provider
      value={{
        getPaths,
        paths,
        getSteps,
        steps,
        getSinglePath,
        singlePath,
        selectedPath,
        updateSelectedPath,
        addUser,
        user,
        isFavorite,
        handleChangeFavorite,
        favoritesQty,
        favorites,
        getFavoriteResources,
        favoriteResources,
        loading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext:must be used within a AppContextProvider");
  return context;
};

export default AppContext;
