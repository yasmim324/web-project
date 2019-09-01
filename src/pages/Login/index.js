import React from 'react';
import { Link } from "react-router-dom";
import InputEmail from '../../components/Input/InputEmail';
import InputSenha from '../../components/Input/InputSenha';
import BtnLogin from '../../components/Botao/BtnLogin';
import { Login } from  './styles';
export default function Cadastro(){
  return(
    <Login>
      <div className="form-div">
        <InputEmail />
        <InputSenha />
        <BtnLogin />
        <div className="link">
          <Link to="/cadastro">Cadastre-se</Link>
          <br />    
          <Link to="/recuperar">Esqueceu a senha?</Link>
        </div>       
      </div>
    </Login>
  );    
}