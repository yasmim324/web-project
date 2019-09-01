import React from 'react';
import { Link } from "react-router-dom";
import InputEmail from '../../components/Input/InputEmail';
import BtnRecuperar from '../../components/Botao/BtnRecuperar';
import { Rec } from  './styles';
export default function Recuperar(){
  return(
    <Rec>
      <div className="form-div">
        <InputEmail />
        <BtnRecuperar />
        <div className="link">
          <Link to="/">Retornar ao login!</Link>
        </div>       
      </div>
    </Rec>
  );    
}