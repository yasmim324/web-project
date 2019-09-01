import React from 'react';
import { InputStyle } from '../style/styles';
export default function InputSenha(){
  return(  
    <InputStyle>
        <input className="input-style" type="password" placeholder="Senha"></input>
    </InputStyle> 
  );
}