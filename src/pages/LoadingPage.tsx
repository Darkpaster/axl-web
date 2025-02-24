import styled from 'styled-components';
const LoadingDiv = styled.div`
width: 100vw;
height: 100vh;
background-color: grey;
text-align: center;
justify-content: center;
  `
export default function LoadingPage() {
    return (
        <LoadingDiv>
            <h1>Loading...</h1>
        </LoadingDiv>
    )
};
