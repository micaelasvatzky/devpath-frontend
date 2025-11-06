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
  steps: []
});
  const [resources, setResources] = useState([]);
  const [resourcesFromPath, setResourcesFromPath] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [completed, useCompleted] = useState([]);

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
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/paths/${id}`)
        setSinglePath(res.data.path);
        console.log(res.data);

        setLoading(false)
    } catch (error) {
        console.log("error:", error);
    }
  }, [])

  const getResources = useCallback(async () => {
    try {
        setLoading(true);
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/resources`);
        setResources(res.data.resources);
        console.log(res.data.resources);

        setLoading(false);
    } catch (error) {
        console.log("error:", error);
    }
  }, []);


  const getResourcesFromPath = useCallback(async (id) => {
    try {
        setLoading(true);
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/paths/${id}/resources`)
        setResourcesFromPath(res.data.resources);
        console.log(res.data.resources);
        
        setLoading(false);
    } catch (error) {
        console.log("error:", error);
    }
  }, []);



  return (
    <AppContext.Provider
      value={{
        getPaths,
        paths,
        getResources, 
        resources,
        getResourcesFromPath,
        resourcesFromPath,
        getSinglePath,
        singlePath
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
