import React from "react";
import { InputContainer } from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mt?: string
  mb?: string
}

export function Input({ mt, mb, ...rest }: InputProps) {
  return (
    <InputContainer mt={mt} mb={mb} {...rest} />
  )
}
