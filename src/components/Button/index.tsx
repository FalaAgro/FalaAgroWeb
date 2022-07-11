import { ButtonContainer } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mt?: string
  mb?: string
  isLoading?: boolean
}

export function Button({ mt, mb, isLoading, children, ...rest }: ButtonProps) {
  return (
    <ButtonContainer
      mt={mt}
      mb={mb}
      children={!isLoading ? children : 'Carregando...'}
      {...rest}
    />
  )
}
