import React from 'react';
import { Link } from "react-router-dom";
import InputEmail from '../../components/Input/InputEmail';
import InputSenha from '../../components/Input/InputSenha';
import BtnCadastrar from '../../components/Botao/BtnCadastrar';
import { Cad } from  './styles';

export default function Cadastro(){
  return(
    <Cad>
      <div className="form-div">
        <InputEmail />
        <InputSenha />
        <BtnCadastrar />
        <div className="link">
          <Link to="/">Retornar ao login!</Link>
        </div>
      </div>
    </Cad>
  );    
}