import React from "react";
import styled from "styled-components";
import TopBar from "./TopBar.tsx";
import { mediaQueries } from '../config/responsive';

const CodeDiv = styled.div`
    font-size: large;
    padding: 2dvi;
    color: white;
    background-color: #2c2c2c;
    overflow-x: auto;

    ${mediaQueries.mobile} {
        font-size: medium;
        padding: 1dvi;
    }
`;

const CodeExampleWrapper = styled.div`
    margin-right: 2dvi;
    margin-left: 2dvi;
    margin-top: 5dvi;

    ${mediaQueries.mobile} {
        margin-right: 1dvi;
        margin-left: 1dvi;
        margin-top: 3dvi;
    }
`;


const CodeExample = ({ children }: { children: React.ReactNode }) => {
    return (
        <CodeExampleWrapper>
            <TopBar buttons={["Run"]} />
            <CodeDiv>
                {children}
            </CodeDiv>
        </CodeExampleWrapper>
    );
};

export default CodeExample;