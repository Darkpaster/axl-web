import styled from "styled-components";
import testGirl from '../assets/test.jpg';
import { mediaQueries } from '../config/responsive';

const NotFoundDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 90vh;
    width: 100%;
    color: black;
    background-image: url(${testGirl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 2vh;

    ${mediaQueries.mobile} {
        height: 80vh;
        padding: 1vh;
    }

    h1 {
        ${mediaQueries.mobile} {
            font-size: 1.5rem;
            text-align: center;
        }
    }

    p {
        ${mediaQueries.mobile} {
            font-size: 0.9rem;
            text-align: center;
        }
    }
`;
const NotFoundPage = () => {
    return (
        <NotFoundDiv>
            <h1>404 - Not Found!</h1>
            <br />
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>Go back to the <a href="/" style={{ color: "yellow" }}>homepage</a>.</p>
        </NotFoundDiv>
    );
};

export default NotFoundPage;
