import React, { useEffect, useState } from "react";
import ActionAreaCard from "../../components/card/card.jsx";
import { getAlojamientos, getCategories } from "../../services/bookingServices.js";
import useSessionStorage from "../../hooks/useSessionStorage.jsx";
import { containerCard } from "./homeStyle.js";
import { Box } from "@mui/material";
import FilterButtons from "../../components/FilterButtons";

const Home = ({ signIn }) => {
  const key = "user";
  const [booking, setBooking] = useState([]);
  const [categories, setCategories] =useState([]);
  const { deleteInfoSessionStorage } = useSessionStorage(key);

  useEffect(() => {
    getAlojamientos().then((response) => {
      setBooking(response);
    });
    getCategories().then((response) => {
      setCategories(response)
    });
  }, []);

  const handleLogOut = () => {
    deleteInfoSessionStorage(key);
    signIn(false);
  };

  return (
    <>
      <button onClick={handleLogOut}>Cerrar sesión</button>
      <FilterButtons categories={categories}/>
      <Box sx={containerCard}>
        {booking.length > 0 &&
          booking.map((item) => <ActionAreaCard key={item.id} prop={item} />)}
      </Box>
    </>
  );
};

export default Home;
