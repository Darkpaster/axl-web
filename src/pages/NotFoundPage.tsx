import styled from "styled-components";
import testGirl from '../assets/test.jpg';

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
    //opacity: 0.1;
    //position: fixed;
    //top: 0;
    //left: 0;
    //right: 0;
    //bottom: 0;
    //z-index: -1;
`;

const NotFoundPage = () => {
    return (
        <NotFoundDiv>
            <h1>404 - Not Found!</h1>
            <br/>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>Go back to the <a href="/" style={{color: "yellow"}}>homepage</a>.</p>
        </NotFoundDiv>
    );
};

export default NotFoundPage;