import styled from 'styled-components';
import axlGirl from '../assets/axl_girl.png';
import {lang} from "../config/lang.ts";
import CodeExample from "../components/CodeExample.tsx";
// background-color: rgb(41, 41, 55);
const MainDiv = styled.div`
    width: 100vw;
    height: 100%;
    transition: background 0.4s ease-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
const WelcomeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    padding-left: 20vw;
    padding-right: 20vw;
`;
const MainInfoDiv = styled.div`
    font-size: calc(10px + 2vmin);
    margin: 2dvi;
`;
const Axl = styled.h1`
    text-align: start;
    font-family: monospace;
`;
const AxlGirl = styled.img`
    padding: 1dvi;
    margin: 1dvi;
`;
const ExamplesDiv = styled.div`
    display: block;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-left: 20vw;
    padding-right: 20vw;
`;
const AdvantagesDiv = styled.div`
    font-size: calc(10px + 2vmin);
    text-align: center;
    margin: 2dvi;
`;


export default function HomePage({selectedLang}: { selectedLang: string }) {
    return (
        <MainDiv id='homePage'>
            <WelcomeDiv>
                <MainInfoDiv>
          <span>
            <Axl id='axlSpan' className={"anim-typewriter"}>Axolotl</Axl>
          </span>
                    <main>
                        <small>{lang[selectedLang].mainInfo}</small>
                    </main>
                </MainInfoDiv>
                <AxlGirl src={axlGirl}>
                </AxlGirl>

            </WelcomeDiv>
            <ExamplesDiv>
                <AdvantagesDiv>
                    <small>{lang[selectedLang].advantages}</small>
                </AdvantagesDiv>

                <CodeExample>
                    <code>
                        @main&#40;args: List&lt;String&gt;&#41; &#123;
                        <pre>    print("Hello, world!")</pre>
                        &#125;
                    </code>
                </CodeExample>

                <CodeExample>
                    <code>
                        <br/><br/>
                        @listener&#40;event: Message&#41; &#123;
                        <pre>    println&#40;event.getMessage&#40;&#41;&#41;</pre>
                        &#125;
                    </code>
                </CodeExample>

            </ExamplesDiv>
        </MainDiv>
    )
};
