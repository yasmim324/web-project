import React from 'react';
import { InputStyle } from '../style/styles';
export default function InputEmail(){
  return(  
    <InputStyle>
      <input className="input-style" type="email" placeholder="Email"></input>
    </InputStyle> 
  );
}