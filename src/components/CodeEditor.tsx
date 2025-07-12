import * as monaco from "monaco-editor";
import Editor from "@monaco-editor/react";
import { useEffect } from "react";
import TopBar from "./TopBar.tsx";
import styled from "styled-components";
import { mediaQueries } from '../config/responsive';

const EditorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${mediaQueries.tablet} {
        min-height: 50vh;
    }
`;

const axolotlLanguageConfig = {
    keywords: ["def", "if", "else", "return", "switch", "case", "break", "continue", "while", "for", "class", "var"],
    types: ["int", "double", "float", "string", "boolean", "void", "long", "short", "char", "byte"],
    operators: ["+", "-", "*", "/", "=", "==", ">", "<", "!", ".", "->", "?", "&&", "||"],
    tokenizer: {
        root: [
            [/\b(if|else|for|return|while|switch|class|def|continue|break|do|case|var)\b/, "keyword"],
            [/\b(int|float|string|boolean|void)\b/, "type"],
            [/"([^"\\]|\\.)*"/, "string"],
            [/[0-9]+/, "number"],
            [/\/\/.*/, "comment"],
            [/[+\-*/=<>!]+/, "operator"],
            [/[a-zA-Z_]\w*/, "identifier"],
        ]
    }
};

const languageConfiguration = {
    comments: {
        lineComment: "//",
        blockComment: ["/*", "*/"]
    },
    brackets: [["{", "}"], ["[", "]"], ["(", ")"]],
    autoClosingPairs: [
        { open: '"', close: '"' },
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" }
    ],
    surroundingPairs: [
        { open: '"', close: '"' },
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" }
    ],
    onEnterRules: [
        {
            beforeText: new RegExp("^\\s*def\\s+\\w+\\s*\\(.*\\)\\s*{\\s*$"),
            action: { indentAction: monaco.languages.IndentAction.Indent }
        }
    ]
};

function CodeEditor() {
    useEffect(() => {
        monaco.languages.register({ id: "axolotl" });
        monaco.languages.setMonarchTokensProvider("axolotl", axolotlLanguageConfig);
        monaco.languages.setLanguageConfiguration("axolotl", languageConfiguration);
    }, []);

    return (
        <EditorWrapper>
            <TopBar buttons={["Run"]} />
            <Editor
                height="80vh"
                defaultLanguage="axolotl"
                defaultValue="//write your code here"
                theme={"vs-dark"}
            />
        </EditorWrapper>
    );
}

export default CodeEditor;