// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefaultTheme } from 'styled-components/native'

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryGreen: string
    lightGray: string
    gray: string
    white: string
    black: string
  }
}