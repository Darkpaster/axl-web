import styled from 'styled-components';
import { mediaQueries } from '../config/responsive';

const FooterRoot = styled.footer`
    background-color: #1f232e;
    width: auto;
    height: auto;
    padding-top: 5vh;
    padding-bottom: 5vh;
    margin-top: 5vh;
    display: flex;
    justify-content: center;

    ${mediaQueries.mobile} {
        padding-top: 3vh;
        padding-bottom: 3vh;
        margin-top: 3vh;
    }
`;

const FooterDiv = styled.div`
    width: 60vw;
    display: flex;
    justify-content: space-between;
    line-height: 2.5;

    ${mediaQueries.tablet} {
        width: 80vw;
        flex-wrap: wrap;
        gap: 2vh;
    }

    ${mediaQueries.mobile} {
        width: 90vw;
        flex-direction: column;
        gap: 3vh;
        line-height: 2;
    }
`;

const FooterBlock = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    ${mediaQueries.tablet} {
        width: 45%;
    }

    ${mediaQueries.mobile} {
        width: 100%;
        text-align: center;
    }

    :first-child {
        font-size: 1.5em;

        ${mediaQueries.mobile} {
            font-size: 1.2em;
        }
    }
`;


export default function Footer() {
    return (
        <FooterRoot>
            <FooterDiv>
                <FooterBlock>
                    <a>Copyright © Meta Platforms, Inc</a>
                    <a>uwu?</a>
                </FooterBlock>
                <FooterBlock>
                    <a>Learn Axolotl</a>
                    <a>Quick Start</a>
                    <a>Installation</a>
                    <a>Describing the UI</a>
                    <a>Adding Interactivity</a>
                    <a>Managing State</a>
                    <a>Escape Hatches</a>
                </FooterBlock>
                <FooterBlock>
                    <a>API Reference</a>
                    <a>Axolotl APIs</a>
                    <a>Axolotl DOM APIs</a>
                </FooterBlock>
                <FooterBlock>
                    <a>Community</a>
                    <a>Code of Conduct</a>
                    <a>Meet the Team</a>
                    <a>Docs Contributors</a>
                    <a>Acknowledgements</a>
                </FooterBlock>
                <FooterBlock>
                    <a>More</a>
                    <a>Blog</a>
                    <a>React Native</a>
                    <a>Privacy</a>
                    <a>Terms</a>
                </FooterBlock>
            </FooterDiv>
        </FooterRoot>
    );
}