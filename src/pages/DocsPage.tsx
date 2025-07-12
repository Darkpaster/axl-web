
import { useState, useEffect } from "react";
import { lang } from "../config/lang.ts";
import styled from "styled-components";
import { mediaQueries } from '../config/responsive';
import React from "react";

const DocsPageWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    ${mediaQueries.tablet} {
        flex-direction: column;
    }
`;

const DocsNav = styled.nav<{ isOpen?: boolean }>`
    width: 20%;
    text-align: center;
    font-size: x-large;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;

    ${mediaQueries.tablet} {
        width: 100%;
        font-size: large;
        background-color: #333;
        padding: 2vh;
        order: ${props => props.isOpen ? 1 : 3};
    }

    ${mediaQueries.mobile} {
        font-size: medium;
        display: ${props => props.isOpen ? 'flex' : 'none'};
    }

    h3 {
        margin: 0;

        ${mediaQueries.mobile} {
            font-size: 1.2rem;
        }
    }

    a {
        cursor: pointer;
        text-decoration: none;

        ${mediaQueries.mobile} {
            padding: 1vh;
            font-size: 0.9rem;
        }

        &:hover {
            opacity: 0.7;
        }
    }
`;

const DocsDiv = styled.div`
    font-size: large;
    margin-right: 2dvi;
    margin-left: 2dvi;
    color: white;
    width: 50%;
    min-height: 80vh;

    ${mediaQueries.tablet} {
        width: 100%;
        margin-right: 1dvi;
        margin-left: 1dvi;
        font-size: medium;
        order: 2;
    }

    ${mediaQueries.mobile} {
        font-size: small;
        margin-right: 0.5dvi;
        margin-left: 0.5dvi;
    }

    article {
        h1 {
            text-align: center;
            margin: 0;
            position: relative;

            ${mediaQueries.mobile} {
                font-size: 1.5rem;
            }
        }

        div {
            padding-top: 2vh;

            ${mediaQueries.mobile} {
                padding-top: 1vh;
            }
        }
    }
`;

const PageNav = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    line-height: 2.5;
    font-size: large;
    text-align: center;

    ${mediaQueries.tablet} {
        width: 100%;
        font-size: medium;
        background-color: #333;
        padding: 2vh;
        order: 1;
    }

    ${mediaQueries.mobile} {
        font-size: small;
        line-height: 2;
    }

    h3 {
        margin: 0;

        ${mediaQueries.mobile} {
            font-size: 1rem;
        }
    }

    a {
        cursor: pointer;
        text-decoration: none;

        ${mediaQueries.mobile} {
            padding: 0.5vh;
            font-size: 0.8rem;
        }

        &:hover {
            opacity: 0.7;
        }
    }
`;

const MobileNavToggle = styled.button`
    display: none;
    background: #9e709e;
    border: none;
    color: white;
    padding: 1vh 2vh;
    font-size: 1rem;
    cursor: pointer;
    margin-bottom: 2vh;

    ${mediaQueries.mobile} {
        display: block;
    }
`;

const NavItem = styled.a<{ isActive?: boolean }>`
    display: block;
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.isActive ? '#feb4fe' : 'rgba(255, 255, 255, 0.9)'};
    padding: 0.8rem 1rem;
    margin: 0.3rem 0;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    ${mediaQueries.mobile} {
        padding: 0.6rem 0.8rem;
        font-size: 0.9rem;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        opacity: 0;
        transition: opacity 0.3s ease;
        border-radius: 12px;
    }

    &:hover::before {
        opacity: 1;
    }

    &:hover {
        color: #feb4fe;
        transform: translateX(5px);
    }

    ${props => props.isActive && `
        background: linear-gradient(45deg, #785678, #aba2ca);
        color: #feb4fe;
        font-weight: 600;
        
        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 4px;
            height: 70%;
            background: linear-gradient(180deg, #feb4fe, #ffed4e);
            border-radius: 0 2px 2px 0;
        }
    `}
`;

const PageNavItem = styled.a`
    display: block;
    cursor: pointer;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.9);
    padding: 0.7rem 1rem;
    margin: 0.2rem 0;
    border-radius: 10px;
    font-size: 0.95rem;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    ${mediaQueries.mobile} {
        padding: 0.6rem 0.8rem;
        font-size: 0.85rem;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, rgba(255, 107, 107, 0.1), rgba(255, 142, 142, 0.05));
        opacity: 0;
        transition: opacity 0.3s ease;
        border-radius: 10px;
    }

    &:hover::before {
        opacity: 1;
    }

    &:hover {
        color: #feb4fe;
        transform: translateX(5px);
    }

    &::after {
        content: '→';
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
        transition: all 0.3s ease;
        color: #feb4fe;
    }

    &:hover::after {
        opacity: 1;
        transform: translateY(-50%) translateX(5px);
    }
`;

const SearchHighlight = styled.div`
    position: absolute;
    top: -5px;
    right: -5px;
    background: linear-gradient(45deg, #feb4fe, #ffed4e);
    color: #000;
    padding: 2px 6px;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 700;
    animation: pulse 2s infinite;
    
    @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(254, 180, 254, 0.7); }
        70% { box-shadow: 0 0 0 10px rgba(254, 180, 254, 0); }
        100% { box-shadow: 0 0 0 0 rgba(254, 180, 254, 0); }
    }
`;

const navItems = [
    { key: "introduction", href: "#Introduction" },
    { key: "paradigms", href: "#Paradigms" },
    { key: "functions", href: "#Functions" },
    { key: "methods", href: "#Methods" },
    { key: "interfaces", href: "#Interfaces" },
    { key: "abstractClasses", href: "#AbstractClasses" },
    { key: "classes", href: "#Classes" },
    { key: "handlers", href: "#Handlers" },
    { key: "abstractModules", href: "#AbstractModules" },
    { key: "modules", href: "#Modules" },
    { key: "annotations", href: "#Annotations" },
    { key: "decorators", href: "#Decorators" }
];

export default function DocsPage({ selectedLang, searchNavigateTo }: {
    selectedLang: string,
    searchNavigateTo?: string
}) {
    const [page, setPage] = useState<string>("introduction");
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [highlightedSection, setHighlightedSection] = useState<string | null>(null);

    // Эффект для навигации из результатов поиска
    useEffect(() => {
        if (searchNavigateTo) {
            setPage(searchNavigateTo);
            setHighlightedSection(searchNavigateTo);
            setIsNavOpen(false);

            // Убираем подсветку через 3 секунды
            const timer = setTimeout(() => {
                setHighlightedSection(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [searchNavigateTo]);

    const handleNavClick = (pageKey: string) => {
        setPage(pageKey);
        setIsNavOpen(false);
        setHighlightedSection(null);
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <DocsPageWrapper id='docsPage'>
            <MobileNavToggle onClick={toggleNav}>
                {isNavOpen ? '✕ Закрыть меню' : '☰ Открыть меню'}
            </MobileNavToggle>

            <DocsNav isOpen={isNavOpen}>
                <h3>
                    {selectedLang === 'RU' ? 'Оглавление' :
                        selectedLang === 'EN' ? 'Table of Contents' :
                            '目次'}
                </h3>
                {navItems.map((item, index) => (
                    <NavItem
                        key={item.key}
                        href={item.href}
                        isActive={page === item.key}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.key);
                        }}
                    >
                        {lang[selectedLang].docs.headers[index]}
                    </NavItem>
                ))}
            </DocsNav>

            <DocsDiv>
                <article>
                    <h1>{lang[selectedLang].docs.headers[navItems.findIndex(item => item.key === page)]}</h1>
                    <div dangerouslySetInnerHTML={{ __html: lang[selectedLang].docs[page] }} />
                </article>
            </DocsDiv>

            <PageNav>
                <h3>
                    {selectedLang === 'RU' ? 'Навигация по странице' :
                        selectedLang === 'EN' ? 'Page Navigation' :
                            'ページナビゲーション'}
                </h3>
                {lang[selectedLang].docs.pageNav[page]?.map((navItem: string, index: number) => (
                    <PageNavItem
                        key={index}
                        href={`#section-${index}`}
                        onClick={(e) => {
                            e.preventDefault();
                            // Здесь можно добавить логику прокрутки к секции
                        }}
                    >
                        {navItem}
                    </PageNavItem>
                ))}
            </PageNav>
        </DocsPageWrapper>
    );
}