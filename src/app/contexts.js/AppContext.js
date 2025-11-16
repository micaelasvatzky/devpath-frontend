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
  const [completed, useCompleted] = useState([]);
  const [selectedPath, setSelectedPath] = useState(null);
  const [user, setUser] = useState([]);

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
