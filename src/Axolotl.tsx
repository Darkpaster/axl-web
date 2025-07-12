import { lazy, Suspense, useMemo, useState } from 'react';
import { theme } from './config/theme';
import './style/globalStyles.scss';
import HomePage from './pages/HomePage.tsx';
import LoadingPage from './pages/LoadingPage.tsx';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import {GlobalMobileStyles} from "./config/responsive.ts";


const EditorPage = lazy(() => import('./pages/EditorPage.tsx'));
const DocsPage = lazy(() => import('./pages/DocsPage.tsx'));

export default function Axolotl() {
    const [lang, setLang] = useState("EN");
    const [selectedTheme, setTheme] = useState<"dark" | "light">("dark");

    const cssTheme = useMemo(() => `
        html, a, main { color: ${theme[selectedTheme].fontColor}; }
        #axlSpan, .aNav:hover, a:hover { color: ${theme[selectedTheme].highlight}; }
        .aNav:hover { background-color: ${theme[selectedTheme].inputBackgroundColor}; }
        header, #homePage, #docsPage, body { background-color: ${theme[selectedTheme].backgroundColor}; }
        #searchBar { color: ${theme[selectedTheme].inputFontColor}; background-color: ${theme[selectedTheme].inputBackgroundColor}; }
    `, [selectedTheme]);

    const handleThemeToggle = () => {
        setTheme(prev => prev === "dark" ? "light" : "dark");
    };

    return (
        <ThemeProvider theme={theme[selectedTheme]}>
            <style>{cssTheme}</style>
            <style>{GlobalMobileStyles}</style>
            <Router>
                <Header
                    selectedLang={lang}
                    setLang={setLang}
                    setTheme={handleThemeToggle}
                />
                <Suspense fallback={<LoadingPage />}>
                    <Routes>
                        <Route path="/" element={<HomePage selectedLang={lang} />} />
                        <Route path="/editor" element={<EditorPage />} />
                        <Route path="/docs" element={<DocsPage selectedLang={lang} />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </Suspense>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}