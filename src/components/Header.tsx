import axl from './../assets/axl.png';
import { lang } from '../config/lang';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { mediaQueries } from '../config/responsive';

const aStyled = {
  padding: "0.5dvi",
  borderRadius: "2dvi",
  display: "flex",
  marginTop: "0.5dpi",
  position: "relative",
}

const DropDownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: -20px;
  width: 100px;
  height: 100px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 5px 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
  z-index: 55;
`;

const DropDownList = styled.ul`
  list-style: none;
  position: inherit;
  left: -20px;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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

  ${mediaQueries.tablet} {
    width: 15vh;
    font-size: medium;
  }

  ${mediaQueries.mobile} {
    width: 12vh;
    font-size: small;
    padding: 5px;
    height: 2vh;
  }
`;

const SearchResults = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
  border: 1px solid #feb4fe;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(254, 180, 254, 0.2);
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;
  margin-top: 0.5vh;

  display: ${props => props.isVisible ? 'block' : 'none'};

  ${mediaQueries.mobile} {
    max-height: 300px;
    left: -50px;
    right: -50px;
  }
`;

const SearchResultItem = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid rgba(254, 180, 254, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: linear-gradient(135deg, rgba(254, 180, 254, 0.1) 0%, rgba(254, 180, 254, 0.05) 100%);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const SearchResultTitle = styled.h4`
  margin: 0 0 4px 0;
  color: #feb4fe;
  font-size: 14px;
  font-weight: 600;

  ${mediaQueries.mobile} {
    font-size: 12px;
  }
`;

const SearchResultContent = styled.p`
  margin: 0;
  color: #ccc;
  font-size: 12px;
  line-height: 1.4;

  ${mediaQueries.mobile} {
    font-size: 10px;
  }
`;

const SearchHighlight = styled.span`
  background: linear-gradient(135deg, #feb4fe 0%, #ffed4e 100%);
  color: #000;
  padding: 1px 3px;
  border-radius: 2px;
  font-weight: 600;
`;

const NoResults = styled.div`
  padding: 20px;
  text-align: center;
  color: #888;
  font-style: italic;
`;

const StyledWrapper = styled.div`
  .theme {
    --bg-color: #111;
    --main-color: #fefefe;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 2px solid #feb4fe;
    box-shadow: 4px 4px #feb4fe;
  }

  .input {
    cursor: pointer;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: 0;
  }

  .icon {
    position: absolute;
    top: calc(50% - 13px);
    left: calc(50% - 13px);
    width: 26px;
    height: 26px;
  }

  .icon.icon-moon {
    fill: #feb4fe;
  }

  .icon.icon-sun {
    stroke: #feb4fe;
    display: none;
  }

  .input:checked ~ .icon.icon-sun {
    display: block;
  }

  .input:checked ~ .icon.icon-moon {
    display: none;
  }

  .theme:active {
    box-shadow: 0 0 #feb4fe;
    transform: translate(3px, 3px);
  }
`;

const HeaderRoot = styled.header`
  transition: background 0.4s ease-out;
  height: 8vh;
  width: 100%;
  position: sticky;
  top: 0;
  margin-bottom: 2vh;

  ${mediaQueries.mobile} {
    height: 10vh;
  }
`;

const HeaderDiv = styled.div`
  margin-left: 3vh;
  margin-right: 3vh;
  height: 100%;
  
  ${mediaQueries.mobile} {
    margin-left: 1vh;
    margin-right: 1vh;
  }
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
  
  ${mediaQueries.mobile} {
    flex-direction: column;
    gap: 1vh;
  }
`;

const LogoDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  
  ${mediaQueries.mobile} {
    height: auto;
  }
`;

const MainNav = styled.nav`
  display: flex;
  width: 100%;
  text-align: justify;
  font-size: large;
  justify-content: space-around;
  padding-left: 40%;
  
  ${mediaQueries.tablet} {
    padding-left: 20%;
    font-size: medium;
  }
  
  ${mediaQueries.mobile} {
    padding-left: 0;
    font-size: small;
    flex-wrap: wrap;
    gap: 0.5vh;
    width: auto;
  }
`;

interface SearchResult {
  section: string;
  title: string;
  content: string;
  key: string;
}

// Функция для поиска по документации
function searchDocumentation(query: string, selectedLang: string): SearchResult[] {
  if (!query.trim()) return [];

  const results: SearchResult[] = [];
  const docs = lang[selectedLang].docs;
  const headers = docs.headers as string[];
  const searchTerm = query.toLowerCase();

  // Массив ключей для поиска
  const searchKeys = [
    'introduction', 'paradigms', 'functions', 'methods',
    'interfaces', 'abstractClasses', 'classes', 'handlers',
    'abstractModules', 'modules', 'annotations', 'decorators'
  ];

  searchKeys.forEach((key, index) => {
    const content = docs[key] as string;
    const title = headers[index];

    if (content && typeof content === 'string') {
      // Удаляем HTML теги для поиска
      const cleanContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

      if (cleanContent.toLowerCase().includes(searchTerm) ||
          title.toLowerCase().includes(searchTerm)) {

        // Найдем контекст вокруг найденного слова
        const contentLower = cleanContent.toLowerCase();
        const termIndex = contentLower.indexOf(searchTerm);
        const contextStart = Math.max(0, termIndex - 50);
        const contextEnd = Math.min(cleanContent.length, termIndex + searchTerm.length + 50);
        let contextText = cleanContent.substring(contextStart, contextEnd);

        if (contextStart > 0) contextText = '...' + contextText;
        if (contextEnd < cleanContent.length) contextText = contextText + '...';

        results.push({
          section: key,
          title: title,
          content: contextText,
          key: key
        });
      }
    }
  });

  return results;
}

// Функция для подсветки найденного текста
function highlightText(text: string, query: string): JSX.Element {
  if (!query.trim()) return <span>{text}</span>;

  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return (
      <span>
      {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
              <SearchHighlight key={index}>{part}</SearchHighlight>
          ) : (
              part
          )
      )}
    </span>
  );
}

export default function Header({selectedLang, setLang, setTheme, onSearchResultClick}: {
  selectedLang: string,
  setLang: (selectedLang: string) => void,
  setTheme: () => void,
  onSearchResultClick?: (section: string) => void
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Обработка поиска
  useEffect(() => {
    if (searchQuery.trim() && isSearchFocused) {
      const results = searchDocumentation(searchQuery, selectedLang);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, selectedLang, isSearchFocused]);

  // Закрытие результатов поиска при клике вне
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchResultClick = (section: string) => {
    setIsSearchFocused(false);
    setSearchQuery("");
    if (onSearchResultClick) {
      onSearchResultClick(section);
    }
  };

  const placeholderText = selectedLang === 'RU' ? 'Поиск по документации' :
      selectedLang === 'JA' ? 'ドキュメント検索' :
          'Search documentation';

  return (
      <HeaderRoot>
        <HeaderDiv>
          <NavBar>
            <NavDiv>
              <LogoDiv>
                <Link to={"/"}>
                  <img src={axl} width={50} height={50} alt={"AXL"}></img>
                </Link>
                <a href='#'>
                  v1.0.1
                </a>
              </LogoDiv>
              <MainNav>
                <SearchContainer ref={searchRef}>
                  <SearchBar
                      id='searchBar'
                      type='search'
                      placeholder={placeholderText}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                  />
                  <SearchResults isVisible={isSearchFocused && (searchQuery.trim() !== "" || searchResults.length > 0)}>
                    {searchResults.length > 0 ? (
                        searchResults.map((result, index) => (
                            <SearchResultItem
                                key={index}
                                onClick={() => handleSearchResultClick(result.section)}
                            >
                              <SearchResultTitle>
                                {highlightText(result.title, searchQuery)}
                              </SearchResultTitle>
                              <SearchResultContent>
                                {highlightText(result.content, searchQuery)}
                              </SearchResultContent>
                            </SearchResultItem>
                        ))
                    ) : searchQuery.trim() !== "" ? (
                        <NoResults>
                          {selectedLang === 'RU' ? 'Результаты не найдены' :
                              selectedLang === 'JA' ? '結果が見つかりません' :
                                  'No results found'}
                        </NoResults>
                    ) : null}
                  </SearchResults>
                </SearchContainer>

                <Link style={aStyled} className='aNav' to={"/"}>{lang[selectedLang].header[2]} </Link>
                <Link style={aStyled} to={"/editor"}>
                  {lang[selectedLang].header[0]}
                </Link>
                <Link style={aStyled} className='aNav' to={"/docs"}>{lang[selectedLang].header[1]} </Link>
                <Link style={aStyled} className='aNav' to={"/test2"}>{lang[selectedLang].header[3]} </Link>

                <StyledWrapper>
                  <label className="theme">
                    <input type="checkbox" id='themeChanger' defaultChecked={true} className="input" onChange={() => setTheme()}/>
                    <svg className="icon icon-sun" fill="none" height={24} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width={24}><circle cx={12} cy={12} r={5} /><line x1={12} x2={12} y1={1} y2={3} /><line x1={12} x2={12} y1={21} y2={23} /><line x1="4.22" x2="5.64" y1="4.22" y2="5.64" /><line x1="18.36" x2="19.78" y1="18.36" y2="19.78" /><line x1={1} x2={3} y1={12} y2={12} /><line x1={21} x2={23} y1={12} y2={12} /><line x1="4.22" x2="5.64" y1="19.78" y2="18.36" /><line x1="18.36" x2="19.78" y1="5.64" y2="4.22" /></svg>
                    <svg className="icon icon-moon" viewBox="0 0 24 24"><path d="m12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1c-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z" /></svg>
                  </label>
                </StyledWrapper>

                <a style={aStyled} className='aNav nav-drop'>
                  [{selectedLang}]

                  <DropDownMenu className={"dropDownMenu"}>
                    <DropDownList>
                      <li className={"dropdown-item"} style={selectedLang === "EN" ? { display: "none" } : {}}>
                        <span onClick={() => setLang("EN")}>English</span>
                      </li>
                      <li className={"dropdown-item"} style={selectedLang === "RU" ? { display: "none" } : {}}>
                        <span onClick={() => setLang("RU")}>Russian</span>
                      </li>
                      <li className={"dropdown-item"} style={selectedLang === "JA" ? { display: "none" } : {}}>
                        <span onClick={() => setLang("JA")}>Japanese</span>
                      </li>
                    </DropDownList>
                  </DropDownMenu>

                </a>

              </MainNav>
            </NavDiv>

          </NavBar>
        </HeaderDiv>
      </HeaderRoot>
  );
}