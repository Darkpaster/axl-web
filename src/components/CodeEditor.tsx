import * as monaco from "monaco-editor";
import Editor from "@monaco-editor/react";
import {useEffect} from "react";

function CodeEditor() {
    useEffect(() => {
        monaco.languages.register({id: "axolotl"});

        monaco.languages.setMonarchTokensProvider("axolotl", {
            keywords: ["def", "if", "else", "return", "switch", "case", "break", "continue", "while", "for", "class", "var"],
            types: ["int", "double", "float", "string", "boolean", "void", "long", "short", "char", "byte"],
            operators: ["+", "-", "*", "/", "=", "==", ">", "<", "!"],
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
        });

        monaco.languages.setLanguageConfiguration("axolotl", {
            comments: {
                lineComment: "//",
                blockComment: ["/*", "*/"]
            },
            brackets: [["{", "}"], ["[", "]"], ["(", ")"]],
            autoClosingPairs: [
                {open: '"', close: '"'},
                {open: "{", close: "}"},
                {open: "[", close: "]"},
                {open: "(", close: ")"}],
            surroundingPairs: [
                {open: '"', close: '"'},
                {open: "{", close: "}"},
                {open: "[", close: "]"},
                {open: "(", close: ")"}
            ],
            onEnterRules: [
                {
                    beforeText: new RegExp("^\\s*def\\s+\\w+\\s*\\(.*\\)\\s*{\\s*$"),
                    action: {indentAction: monaco.languages.IndentAction.Indent}
                }
            ]
        });
        console.log("CodeEditor unmounted");
    }, []);

    return <Editor height="70vh" defaultLanguage="axolotl" defaultValue="//write your code here" theme={"vs-dark"}/>;
}

export default CodeEditor;
