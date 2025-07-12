import CodeEditor from "../components/CodeEditor.tsx";
import Console from "../components/Console.tsx";
import styled from "styled-components";
import { mediaQueries } from '../config/responsive';

const EditorPageWrapper = styled.div`
    display: flex;
    height: calc(100vh - 16vh);

    ${mediaQueries.tablet} {
        flex-direction: column;
        height: auto;
    }
`;


export default function EditorPage() {
    return (
        <EditorPageWrapper>
            <CodeEditor />
            <Console />
        </EditorPageWrapper>
    );
}