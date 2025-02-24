import {lazy, Suspense, useMemo, useState} from 'react'
import { theme } from './config/theme';
import './style/globalStyles.scss'
import HomePage from './pages/HomePage.tsx';
import LoadingPage from './pages/LoadingPage.tsx';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import {ThemeProvider} from "styled-components";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

const EditorPage = lazy(() => import('./pages/EditorPage.tsx'));
const DocsPage = lazy(() => import('./pages/DocsPage.tsx'));

export default function Axolotl() {
    const [lang, setLang] = useState("EN"); // закинуть в redux store
    const [selectedTheme, setTheme] = useState<"dark" | "light">("dark"); // закинуть в redux store
    // const [isWindowOpen, setWindow] = useState(false); // закинуть в redux store

    console.log(lang, selectedTheme);

    // const lang = useSelector(selectLang);
    // const selectedTheme = useSelector(selectTheme);
    // состояние для подсветки текущей страницы в навигации

    // let input = useRef();
    // input.current.nameOfProperty //current это элемент, на который ссылается input
    const cssTheme = useMemo(() => `
        html, a, main { color: ${theme[selectedTheme].fontColor}; }
        #axlSpan, .aNav:hover { color: ${theme[selectedTheme].highlight}; }
        .aNav:hover { background-color: ${theme[selectedTheme].inputBackgroundColor}; }
        header, #homePage, #docsPage { background-color: ${theme[selectedTheme].backgroundColor}; }
        #searchBar { color: ${theme[selectedTheme].inputFontColor}; background-color: ${theme[selectedTheme].inputBackgroundColor}; }
    `, [selectedTheme]);
    return (
        <ThemeProvider theme={theme[selectedTheme]}>
            <style>{cssTheme}</style>

            {/*<MainLayout /> /!*это компонент, который содержит Header и Footer*!/*/}

            <Router>
                <Header selectedLang={lang} setLang={(value) => setLang(value)}
                        setTheme={() => setTheme(selectedTheme === "dark" ? "light" : "dark")} />

                <Suspense fallback={<LoadingPage />} />
                <Routes>
                    <Route path="/" element={<HomePage selectedLang={lang} />} />
                    <Route path="/editor" element={<EditorPage />} />
                    <Route path="/docs" element={<DocsPage selectedLang={lang} />} />
                    {/*<Route path="*" element={<Navigate to="/" />} />*/}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
            <Footer />

            {/* <Window buttons={["Не понял", "Понял"]}>
        Axolotl — это современный, инновационный, коммерческий, с закрытым исходным кодом, кросс-платформенный
        объектно-ориентированный язык программирования и один из 5 лучших языков программирования на GitHub.
        <hr></hr>
        У вас есть опыт работы с brainfuck, ифкуиль или Flat Assembler? Вы сразу же обнаружите, что знакомы с Axolotl!
      </Window> */}
        </ThemeProvider>
    )
};