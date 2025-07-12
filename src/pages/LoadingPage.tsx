import styled from 'styled-components';
import { mediaQueries } from '../config/responsive';

const LoadingDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: grey;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        ${mediaQueries.mobile} {
            font-size: 1.5rem;
        }
    }
`;

export default function LoadingPage() {
    return (
        <LoadingDiv>
            <h1>Loading...</h1>
        </LoadingDiv>
    );
}