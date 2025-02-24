import styled from 'styled-components';
import React from "react";

const StyledButton = styled.button<{ styletype: "primary" | "secondary" | "default" }>`
    border-radius: 80px;
    border: 2px solid transparent;
    padding: 0.6em 1.2em;
    margin: 1em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
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
                backgroundColor: '#030306',
                color: '#6C6B6E',
                borderColor: '#242328',
                hoverBorderColor: '#CDFE53',
                hoverBackgroundColor: '#242328',
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

const Button = ({children, onClick = () => alert("Undefined onClick handler."), styleType = "default"}: {
    children: React.ReactNode;
    styleType?: "primary" | "secondary" | "default";
    onClick?: () => void;}
)=> {
    return (
        <div className='buttonsDiv'>
            <StyledButton styletype={styleType} onClick={onClick}>{children}</StyledButton>
        </div>
    );
}

export default Button;