import {useState} from "react";
import {lang} from "../config/lang.ts";
import styled from "styled-components";

const DocsNav = styled.nav`
    width: 20%;
    text-align: center;
    font-size: x-large;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const DocsDiv = styled.div`
    font-size: large;
    padding: 2dvi;
    margin-right: 2dvi;
    margin-left: 2dvi;
    color: white;
    width: 50%;
    min-height: 80vh;
    //background-color: #2c2c2c;
`;

const PageNav = styled.div`
    width: 20%;
    text-align: justify;
    font-size: large;
`;

export default function DocsPage({selectedLang}: { selectedLang: string }) {
    //состояние для пагинации документации
    const [page, setPage] = useState<string>("Introduction");

    return (
        <div id='docsPage' style={{display: "flex", justifyContent: "space-between"}}>
            <DocsNav>
                <a href="#Introduction" onClick={() => setPage("Introduction")}>Introduction</a>
                <hr></hr>
                <a href="#Basics" onClick={() => setPage("Basics")}>Basics</a>
                <hr></hr>
                <a href="#Types" onClick={() => setPage("Types")}>Types</a>
                <hr></hr>
                <a href="#Variables" onClick={() => setPage("Variables")}>Variables</a>
                <hr></hr>
                <a href="#Functions" onClick={() => setPage("Functions")}>Functions</a>
                <hr></hr>
                <a href="#Classes" onClick={() => setPage("Classes")}>Classes</a>
                <hr></hr>
                <a href="#Interfaces" onClick={() => setPage("Interfaces")}>Interfaces</a>
                <hr></hr>
                <a href="#Generics" onClick={() => setPage("Generics")}>Generics</a>
                <hr></hr>
                <a href="#Enums" onClick={() => setPage("Enums")}>Enums</a>

            </DocsNav>
            <DocsDiv>
            <article>
                    <h1>
                    <center>Documentation</center>
                    </h1>
                    <hr></hr>
                    <center><h2>{page}</h2></center>
                    <div dangerouslySetInnerHTML={{__html: lang[selectedLang].docs[page]}}/>
                </article>
            </DocsDiv>
            <PageNav>
                <center>On this page:</center>
            </PageNav>
        </div>
    )
}