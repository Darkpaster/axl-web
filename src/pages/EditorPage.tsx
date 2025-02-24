import CodeEditor from "../components/CodeEditor.tsx";
import Console from "../components/Console.tsx";


export default function EditorPage() {
    // const keyWords = [
    //     "function", "return", "if", "else", "for", "while", "do", "switch", "case",
    //     "break", "continue", "default", "var", "let", "const", "true", "false", "null",
    //     "undefined", "NaN", "Infinity", "this", "new", "delete", "typeof", "instanceof",
    //     "in", "of", "try", "catch", "throw", "finally", "debugger", "console", "log", "error",
    //     "warn", "info", "clear", "table", "time", "timeEnd", "group", "groupEnd", "groupCollapsed",
    //     "trace", "assert", "count", "countReset", "dir", "dirxml", "profile", "profileEnd", "timeStamp",
    //     "context", "memory", "exception", "table", "trace", "clear", "debug", "count", "countReset",
    //     "dir", "dirxml", "group", "groupCollapsed", "groupEnd", "time", "timeEnd", "timeLog",
    //     "timeStamp", "trace", "assert", "clear", "debug", "error", "info", "log", "warn", "dir",
    //     "dirxml", "table", "trace", "count", "countReset", "group", "groupCollapsed", "groupEnd",
    //     "time", "timeEnd", "timeLog", "timeStamp", "trace", "assert", "clear", "debug", "error",
    //     "info", "log", "warn", "dir", "dirxml", "table", "trace"];

    return (
        <div style={{display: "flex"}}>
            <CodeEditor></CodeEditor>
            <Console></Console>
        </div>
    );
}