import { ThemeProps } from "@/lib/themes";
import styled from "styled-components";

interface ButtonStyled {
    variant: "filled" | "outlined";
}

export const ButtonStyled = styled.button<ButtonStyled & ThemeProps>`
    background-color: ${(props) => props.variant === 'filled' ? 'black' : 'white'};
    border: ${(props) => props.variant === 'filled' ? 'none' : '1px solid black'};
    color: ${(props) => props.variant === 'filled' ? 'white' : 'black'};;
    box-shadow: none;
    cursor: pointer;
    border-radius: 6px;
    padding: 0 32px;
    height: 40px;
    min-width: 160px;
`;

