import React from "react";
import Button from "./Button.tsx";
import styled from "styled-components";
const CodeBarDiv = styled.div`
    height: 3dvi;
    background-color: #2f2f2f;
    margin-right: 2dvi;
    margin-left: 2dvi;
    margin-top: 5dvi;
    display: flex;
    justify-content: end;
    align-items: center;
`
const CodeDiv = styled.div`
    font-size: large;
    padding: 2dvi;
    margin-right: 2dvi;
    margin-left: 2dvi;
    color: white;
    background-color: #2c2c2c;
`;
const CodeExample = ( {children}: {children: React.ReactNode} ) => {
    return (
        <div>
            <CodeBarDiv>
                <Button>run</Button>
            </CodeBarDiv>
            <CodeDiv>
                {children}
            </CodeDiv>
        </div>
    );
};

export default CodeExample;