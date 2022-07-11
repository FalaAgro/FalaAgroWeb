import { ButtonContainer } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLInputElement> {}

export function Button({ ...rest }) {
  return (
    <ButtonContainer {...rest} />
    )
  }