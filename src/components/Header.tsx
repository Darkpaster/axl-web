import axl from './../assets/axl.png';
import { lang } from '../config/lang';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState} from 'react';

const HeaderRoot = styled.header`
  transition: background 0.4s ease-out;
  height: 8vh;
  width: 100%;
  position: sticky;
  top: 0;
`;
const HeaderDiv = styled.div`
  margin-left: 3vh;
  margin-right: 3vh;
  height: 100%;
`;
const NavBar = styled.nav`
  text-align: justify;
  height: 100%;
`;
const NavDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const MainNav = styled.nav`
  display: flex;
  width: 100%;
  text-align: justify;
  font-size: large;
  justify-content: space-around;
  padding-left: 40%;
`;
const SearchBar = styled.input`
    font-size: large;
    font-style: italic;
    border-style: hidden;
    padding: 7px;
    border-radius: 1.5vh;
    width: 20vh;
    height: 2.5vh;
    margin-top: 0.8vh;
`;
const aStyled = {
  padding: "0.5dvi",
  borderRadius: "2dvi",
  display: "flex",
  marginTop: "0.5dpi",
}

export default function Header({selectedLang, setLang, setTheme}: {
  selectedLang: string,
  setLang: (selectedLang: string) => void,
  setTheme: () => void
}) {
  const [visible, setVisible] = useState("none");
  const [string, setString] = useState("Search");

  return (
    <HeaderRoot>
      <HeaderDiv>
        <NavBar>
          <NavDiv>
            <LogoDiv>
              <Link to={"/"}>
                <img src={axl} width={50} height={50} alt={"Error"}></img>
              </Link>
              <a href='#'>
                v1.0.1
              </a>
            </LogoDiv>
            <MainNav>
              <SearchBar id='searchBar' type='search' value={string} onChange={() => setString(string)} onBlur={() => setString("Search")} onFocusCapture={() => setString("")}></SearchBar>
              <Link style={aStyled} className='aNav' to={"/"}>{lang[selectedLang].header[2]} </Link>
              <Link style={aStyled} to={"/editor"}>
                {lang[selectedLang].header[0]}
              </Link>
              <Link style={aStyled} className='aNav' to={"/docs"}>{lang[selectedLang].header[1]} </Link>
              <Link style={aStyled} className='aNav' to={"/test2"}>{lang[selectedLang].header[3]} </Link>
              <input className='aNav' id='themeChanger' type='checkbox' onChange={() => setTheme()}></input>

              <a style={aStyled} className='aNav' onMouseLeave={() => setVisible("none")} onMouseEnter={() => setVisible("block")}>
                [{selectedLang}]

                <ul className='dropdownMenu' style={{ display: visible }} onMouseLeave={() => setVisible("none")} onMouseEnter={() => setVisible("block")}>
                  <li style={selectedLang === "EN" ? { display: "none" } : {}}>
                    <span onClick={() => setLang("EN")}>English</span>
                  </li>
                  <li style={selectedLang === "RU" ? { display: "none" } : {}}>
                    <span onClick={() => setLang("RU")}>Russian</span>
                  </li>
                  <li style={selectedLang === "JA" ? { display: "none" } : {}}>
                    <span onClick={() => setLang("JA")}>Japanese</span>
                  </li>
                </ul>

              </a>

            </MainNav>
          </NavDiv>

        </NavBar>
      </HeaderDiv>
    </HeaderRoot>
  );
}