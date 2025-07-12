import styled from "styled-components";
import TopBar from "./TopBar.tsx";
import { mediaQueries } from '../config/responsive';

const MainDiv = styled.div`
    background-color: #1E1F22;
    width: 100%;
    min-height: 1.5em;
    position: relative;
    border-radius: 5px;
    overflow-y: auto;
    border-left: #feb4fe 1px solid;

    ${mediaQueries.tablet} {
        min-height: 30vh;
        border-left: none;
        border-top: #feb4fe 1px solid;
    }
`;

const ConsoleBody = styled.div`
    padding-left: 1dvi;
`;

export default function Console() {
    return (
        <MainDiv>
            <TopBar title={"Console"} />
            <ConsoleBody>
                <p>Hello World!</p>
            </ConsoleBody>
        </MainDiv>
    );
}