import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutToken } from "../store/slices/loginSlice";

export default (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = useSelector((state) => state.login);

  return (
    <button className="botaoLogout"
      onClick={() => {
        console.log(logout);
        dispatch(logoutToken());
        console.log(logout);
        alert("Usuário deslogado com sucesso!")
        navigate("/");
      }}
    >
      Logout
    </button>
  );
};
