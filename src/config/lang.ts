export interface LangConfig {
    [key: string]: {
        header: string[];
        mainInfo: string;
        advantages: string;
        footer: string[];
        buttons: string[];
        window: string[];
        docs: {
            [key: string]: string;
        };
    };
}

export const lang: LangConfig =
{
        EN: {
            header: ["Editor", "Docs", "Home", "Community"],
            mainInfo: "is designed primarily as event-driven and object-oriented. The combination of the two paradigms will greatly simplify the design of the architecture of your programs while respecting the provided conventions.",
            advantages: "A few examples of axl's advantages: ",
            footer: ["1", "1", "1", "1"],
            buttons: ["ок", "отмена", "принять", "подробнее"],
            window: [""],
            docs: {
                Introduction: `
                <h3>Getting Started</h3>
                <p>First, you need to install the Axolotl compiler. You can do this by running the following command:</p>
                <pre>npm install -g axolotl-compiler</pre>
                <p>After that, you can compile your Axolotl code by running the following command:</p>
                <pre>axolotl compile yourfile.ax</pre>
            `,
                Basics: `
                <h2>Language Basics</h2>
                <p>Axolotl is a statically-typed programming language. It supports the following data types:</p>
                <ul>
                    <li>int</li>
                    <li>float</li>
                    <li>string</li>
                    <li>boolean</li>
                </ul>
                <p>Axolotl also supports the following control structures:</p>
                <ul>
                    <li>if</li>
                    <li>else</li>
                    <li>for</li>
                    <li>while</li>
                    <li>switch</li>
                    <li>case</li>
                    <li>break</li>
                    <li>continue</li>
                </ul>
            `,
                Functions: `
                <h2>Functions</h2>
                <p>Axolotl supports functions. You can define a function using the <code>def</code> keyword:</p>
            `
            }
        },
        RU: {
            header: ["Редактор", "Документация", "Главная", "Сообщество"],
            mainInfo: "разработан в первую очередь как событийно-ориентированный и объектно-ориентированный. Комбинация двух парадигм значительно упростит разработку архитектуры ваших программ при соблюдении предусмотренных соглашений.",
            advantages: "A few examples of axl's advantages: ",
            footer: ["1", "1", "1", "1"],
            buttons: ["ок", "отмена", "принять", "подробнее"],
            window: [""],
            docs: {
                Introduction: `
                <h2>Начало работы</h2>
                <p>Сначала вам нужно установить компилятор Axolotl. Вы можете сделать это, запустив следующую команду:</p>
                <pre>npm install -g axolotl-compiler</pre>
                <p>После этого вы можете скомпилировать свой код Axolotl, запустив следующую команду:</p>
                <pre>axolotl compile yourfile.ax</pre>
            `,
                Basics: `
                <h2>Основы языка</h2>
                <p>Axolotl — это статически типизированный язык программирования. Он поддерживает следующие типы данных:</p>
                <ul>
                    <li>int</li>
                    <li>float</li>
                    <li>string</li>
                    <li>boolean</li>
                </ul>
                <p>Axolotl также поддерживает следующие структуры управления:</p>
                <ul>
                    <li>if</li>
                    <li>else</li>
                    <li>for</li>
                    <li>while</li>
                    <li>switch</li>
                    <li>case</li>
                    <li>break</li>
                    <li>continue</li>
                </ul>
            `,
                Functions: `
                <h2>Функции</h2>
                <p>Axolotl поддерживает функции. Вы можете определить функцию, используя ключевое слово <code>def</code>:</p>
            `
            }
        },

        // "JA": {
        // }

        };
