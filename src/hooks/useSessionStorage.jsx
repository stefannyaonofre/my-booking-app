import { useState } from "react";

const useSessionStorage = (key) => {
  const [dataStorage, setDataStorage] = useState(() => {
    return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : {};
  });

  const saveInfoSessionStorage = (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
    setDataStorage(data);
  };

  const deleteInfoSessionStorage = (key) => {
    sessionStorage.removeItem(key);
    setDataStorage({});
  };

  return {dataStorage, saveInfoSessionStorage, deleteInfoSessionStorage};
};

export default useSessionStorage;
