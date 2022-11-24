import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUserName } from "../store/slices/userName.slice";

const InputName = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate(); //se declara la funcion para poder navegar por las rutas
  const dispatch = useDispatch();

  const enterName = () => {
    navigate("/pokedex");
    dispatch(changeUserName(userName));
  };

  return (
    <div>
      <h1>componente input name</h1>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />{" "}
      {/* al renderizar se toman los cambios ejecutados sobre el input */}
      <button onClick={enterName}>Ingresar</button>
    </div>
  );
};

export default InputName;
