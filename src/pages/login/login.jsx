import React from "react";
import "./login.scss";
import useForm from "../../hooks/useForm";
import { getUser } from "../../services/usersServices";
import Swal from "sweetalert2";
import useSessionStorage from "../../hooks/useSessionStorage";
const Login = ({ signIn }) => {
  const key = "user";
  const [dataForm, handleChange, resetForm] = useForm();
  const {saveInfoSessionStorage} = useSessionStorage(key);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(dataForm);
    const loggedUser = await getUser(dataForm);
    if (loggedUser) {
      Swal.fire(
        `¡Excelente ${loggedUser.name}!`,
        "Has iniciado sesión exitosamente",
        "success"
      ).then(() => {
        signIn(true);
        saveInfoSessionStorage(key, loggedUser)
      });
    } else {
      Swal.fire(
        "Oopps!",
        "Las credenciales ingresadas son incorrectas",
        "error"
      );
    }
    console.log(loggedUser);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Correo electrónico:</label>
      <input
        onChange={handleChange}
        name="email"
        value={dataForm?.email || ""}
        type="text"
      />
      <label>Contraseña:</label>
      <input
        onChange={handleChange}
        name="password"
        value={dataForm?.password || ""}
        type="password"
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;
