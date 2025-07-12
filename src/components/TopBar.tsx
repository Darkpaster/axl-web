import styled from "styled-components";
import Button from "./Button.tsx";

const CodeBarDiv = styled.div`
    height: 3dvi;
    background-color: #232323;
    display: flex;
    align-items: center;
`;

const Title = styled.h2`
    margin: 0;
    color: white;
`;

interface TopBarProps {
    buttons?: string[];
    title?: string;
}

const TopBar: React.FC<TopBarProps> = ({ buttons, title }) => {
    return (
        <CodeBarDiv style={{ justifyContent: title ? "center" : "end" }}>
            {buttons?.map((button, i) => (
                <Button key={i}>{button}</Button>
            ))}
            {title && <Title>{title}</Title>}
        </CodeBarDiv>
    );
};

export default TopBar;
