import styled from 'styled-components';
import React from "react";
import { mediaQueries } from '../config/responsive';

const StyledButton = styled.button<{ styletype: "primary" | "secondary" | "default" }>`
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    margin: 1em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;

    ${mediaQueries.mobile} {
        padding: 0.4em 0.8em;
        margin: 0.5em;
        font-size: 0.9em;
    }

    ${({ styletype }) => {
        const styles = {
            primary: {
                backgroundColor: '#030306',
                color: '#6C6B6E',
                borderColor: '#242328',
                hoverBorderColor: '#CDFE53',
                hoverBackgroundColor: '#242328',
            },
            secondary: {
                backgroundColor: '#fff',
                color: '#fff',
                borderColor: '#fff',
                hoverBorderColor: '#CDFE53',
                hoverBackgroundColor: '#242328',
            },
            default: {
                backgroundColor: '#9e709e',
                color: 'black',
                borderColor: '#242328',
                hoverBorderColor: '#9e709e',
                hoverBackgroundColor: '#feb4fe',
            }
        };

        const { backgroundColor, color, borderColor, hoverBorderColor, hoverBackgroundColor } = styles[styletype];

        return `
      background-color: ${backgroundColor};
      color: ${color};
      border-color: ${borderColor};

      &:hover {
        border-color: ${hoverBorderColor};
        background-color: ${hoverBackgroundColor};
      }
    `;
    }}
`;


const ButtonsDiv = styled.div`
    display: inline-block;
`;

interface ButtonProps {
    children: React.ReactNode;
    styleType?: "primary" | "secondary" | "default";
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           onClick = () => alert("Undefined onClick handler."),
                                           styleType = "default"
                                       }) => {
    return (
        <ButtonsDiv>
            <StyledButton styletype={styleType} onClick={onClick}>
                {children}
            </StyledButton>
        </ButtonsDiv>
    );
};

export default Button;
