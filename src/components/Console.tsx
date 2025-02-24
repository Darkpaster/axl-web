import styled from "styled-components";
import { useRef } from "react";

const MainDiv = styled.div`
max-width: 50vw;
min-width: 30vw;
min-height: 1.5em;
background-color: black;
position: relative;
border-radius: 5px;
resize: vertical;
overflow-y: auto;
`

export default function Console() {
    const consoleRef = useRef(null);
    const handleTouchMove = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // const { clientY } = event.touches[0];
        // const { top, height } = consoleRef.current.getBoundingClientRect();
        // const newHeight = clientY - top;
        // const newHeight = event.touches[0].clientY - consoleRef.current.getBoundingClientRect().top;
        // consoleRef.current.style.height = `${newHeight}px`;
    }
    return ( 
        <MainDiv onTouchMove={handleTouchMove} ref={consoleRef}>
            <div className="console-body">
                <p>Hello World!</p>
            </div>
        </MainDiv>
    )
}