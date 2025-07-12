export interface LangConfig {
    [key: string]: {
        header: string[];
        mainInfo: string;
        advantages: string;
        footer: string[];
        buttons: string[];
        window: string[];
        docs: {
            [key: string | number]: string | string[] | { [key: string | number]: string[] };
        };
    };
}

export const lang: LangConfig = {
    EN: {
        header: ["Editor", "Documentation", "Home", "Community"],
        mainInfo: "is designed primarily as event-driven and object-oriented. The combination of the two paradigms will greatly simplify the design of the architecture of your programs while respecting the provided conventions.",
        advantages: "A few examples of axl's advantages: high performance, easy learning curve, flexible syntax, strong type system, and excellent tooling support.",
        footer: ["© 2024 Axolotl Team", "Privacy Policy", "Terms of Service", "Contact Us"],
        buttons: ["OK", "Cancel", "Accept", "Learn More"],
        window: ["Axolotl Programming Language"],
        docs: {
            headers: ["Introduction", "Paradigms", "Functions", "Methods", "Interfaces", "Abstract classes", "Classes", "Handlers", "Abstract modules", "Modules", "Annotations", "Decorators"],
            pageNav: {
                introduction: ["Getting Started", "Introduction"],
                paradigms: ["Object-Oriented Programming", "Event-Driven Programming", "Functional Programming"],
                functions: ["Functions", "Methods", "Interfaces", "Abstract Classes", "Classes", "Handlers", "Abstract Modules", "Modules"],
                methods: ["Annotations", "Decorators"],
            },
            introduction: `
                <h3>Getting Started</h3>
                <p>First, you need to install the Axolotl compiler. You can do this by running the following command:</p>
                <pre>npm install -g axolotl-compiler</pre>
                <p>After that, you can compile your Axolotl code by running the following command:</p>
                <pre>axolotl compile yourfile.ax</pre>
                <p>To run your compiled program:</p>
                <pre>axolotl run yourfile.ax</pre>
            `,
            paradigms: `
                <h2>Object-Oriented Programming</h2>
                <table>
                    <tr>
                        <th>Principle</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>Encapsulation</td>
                        <td>Data and methods are combined within classes</td>
                    </tr>
                    <tr>
                        <td>Inheritance</td>
                        <td>Ability to extend functionality of base classes</td>
                    </tr>
                    <tr>
                        <td>Polymorphism</td>
                        <td>Universal interface for interacting with different objects</td>
                    </tr>
                    <tr>
                        <td>Abstraction</td>
                        <td>Highlighting significant characteristics of an object, hiding implementation details</td>
                    </tr>
                </table>

                <h2>Event-Driven Programming</h2>
                <table>
                    <tr>
                        <th>Principle</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>Event Model</td>
                        <td>System built around events that represent key state changes</td>
                    </tr>
                    <tr>
                        <td>Asynchronicity</td>
                        <td>Events are processed in non-blocking mode, ensuring high performance</td>
                    </tr>
                    <tr>
                        <td>Event Handlers</td>
                        <td>Application logic defined through functions registered to handle specific events</td>
                    </tr>
                    <tr>
                        <td>Component Binding</td>
                        <td>Application components interact through events, not directly, reducing coupling</td>
                    </tr>
                </table>

                <h2>Functional Programming</h2>
                <table>
                    <tr>
                        <th>Principle</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>Pure Functions</td>
                        <td>Functions whose result depends only on their input data, without side effects</td>
                    </tr>
                    <tr>
                        <td>Immutability</td>
                        <td>Using immutable data to simplify state tracking</td>
                    </tr>
                    <tr>
                        <td>Higher-Order Functions</td>
                        <td>Functions that take other functions as arguments or return them</td>
                    </tr>
                    <tr>
                        <td>Lambda Expressions</td>
                        <td>Anonymous functions for concise behavior description</td>
                    </tr>
                    <tr>
                        <td>Currying</td>
                        <td>Splitting a function with multiple arguments into multiple functions with one argument</td>
                    </tr>
                </table>
            `,
            functions: `
                <h2>Functions</h2>
                <p>Axolotl supports functions. You can define a function using the <code>def</code> keyword:</p>
                <pre>
def greet(name: String): String {
    return "Hello, " + name + "!";
}
                </pre>
                <p>Functions can have default parameters:</p>
                <pre>
def greet(name: String = "World"): String {
    return "Hello, " + name + "!";
}
                </pre>
            `,
            methods: `
                <h2>Methods</h2>
                <p>Methods are functions that belong to a class. They can access the instance's properties:</p>
                <pre>
class Person {
    private name: String;
    
    constructor(name: String) {
        this.name = name;
    }
    
    def greet(): String {
        return "Hello, I'm " + this.name;
    }
}
                </pre>
            `,
            interfaces: `
                <h2>Interfaces</h2>
                <p>Interfaces define contracts that classes must implement:</p>
                <pre>
interface Drawable {
    def draw(): void;
    def getArea(): Number;
}

class Circle implements Drawable {
    private radius: Number;
    
    constructor(radius: Number) {
        this.radius = radius;
    }
    
    def draw(): void {
        // Drawing logic
    }
    
    def getArea(): Number {
        return Math.PI * this.radius * this.radius;
    }
}
                </pre>
            `,
            abstractClasses: `
                <h2>Abstract Classes</h2>
                <p>Abstract classes cannot be instantiated directly and may contain abstract methods:</p>
                <pre>
abstract class Animal {
    protected name: String;
    
    constructor(name: String) {
        this.name = name;
    }
    
    abstract def makeSound(): String;
    
    def getName(): String {
        return this.name;
    }
}

class Dog extends Animal {
    def makeSound(): String {
        return "Woof!";
    }
}
                </pre>
            `,
            classes: `
                <h2>Classes</h2>
                <p>Classes are the fundamental building blocks of object-oriented programming in Axolotl:</p>
                <pre>
class Vehicle {
    private speed: Number;
    private fuel: Number;
    
    constructor(initialFuel: Number) {
        this.speed = 0;
        this.fuel = initialFuel;
    }
    
    def accelerate(amount: Number): void {
        if (this.fuel > 0) {
            this.speed += amount;
            this.fuel -= amount * 0.1;
        }
    }
    
    def getSpeed(): Number {
        return this.speed;
    }
}
                </pre>
            `,
            handlers: `
                <h2>Event Handlers</h2>
                <p>Event handlers are special functions that respond to events:</p>
                <pre>
event UserClick {
    x: Number;
    y: Number;
}

handler onUserClick(event: UserClick) {
    console.log("User clicked at: " + event.x + ", " + event.y);
}

// Register the handler
register(UserClick, onUserClick);
                </pre>
            `,
            abstractModules: `
                <h2>Abstract Modules</h2>
                <p>Abstract modules define interfaces for modules that must be implemented:</p>
                <pre>
abstract module DatabaseModule {
    abstract def connect(connectionString: String): void;
    abstract def query(sql: String): Array&lt;Object&gt;;
    abstract def disconnect(): void;
}
                </pre>
            `,
            modules: `
                <h2>Modules</h2>
                <p>Modules are containers for related functionality:</p>
                <pre>
module MathUtils {
    def add(a: Number, b: Number): Number {
        return a + b;
    }
    
    def multiply(a: Number, b: Number): Number {
        return a * b;
    }
    
    const PI: Number = 3.14159;
}

// Usage
import MathUtils;
let result = MathUtils.add(5, 3);
                </pre>
            `,
            annotations: `
                <h2>Annotations</h2>
                <p>Annotations provide metadata about code elements:</p>
                <pre>
@Deprecated("Use newMethod instead")
def oldMethod(): void {
    // Old implementation
}

@Override
def toString(): String {
    return "Custom string representation";
}

@Async
def fetchData(): Promise&lt;String&gt; {
    // Asynchronous operation
}
                </pre>
            `,
            decorators: `
                <h2>Decorators</h2>
                <p>Decorators modify the behavior of classes and methods:</p>
                <pre>
@Component
class UserService {
    @Inject("userRepository")
    private repository: UserRepository;
    
    @Cache(timeout: 300)
    def getUser(id: Number): User {
        return this.repository.findById(id);
    }
}
                </pre>
            `
        }
    },
    RU: {
        header: ["Редактор", "Документация", "Главная", "Сообщество"],
        mainInfo: "разработан в первую очередь как событийно-ориентированный и объектно-ориентированный. Комбинация двух парадигм значительно упростит разработку архитектуры ваших программ при соблюдении предусмотренных соглашений.",
        advantages: "Несколько примеров преимуществ axl: высокая производительность, простота изучения, гибкий синтаксис, строгая типизация и отличная поддержка инструментов.",
        footer: ["© 2024 Команда Axolotl", "Политика конфиденциальности", "Условия использования", "Связаться с нами"],
        buttons: ["ОК", "Отмена", "Принять", "Подробнее"],
        window: ["Язык программирования Axolotl"],
        docs: {
            headers: ["Введение", "Парадигмы", "Функции", "Методы", "Интерфейсы", "Абстрактные классы", "Классы", "Обработчики", "Абстрактные модули", "Модули", "Аннотации", "Декораторы"],
            pageNav: {
                introduction: ["Начало работы", "Введение"],
                paradigms: ["Объектно-ориентированное программирование", "Событийно-ориентированное программирование", "Функциональное программирование"],
                functions: ["Функции", "Методы", "Интерфейсы", "Абстрактные классы", "Классы", "Обработчики", "Абстрактные модули", "Модули"],
                methods: ["Аннотации", "Декораторы"],
            },
            introduction: `
                <h2>Начало работы</h2>
                <p>Сначала вам нужно установить компилятор Axolotl. Вы можете сделать это, запустив следующую команду:</p>
                <pre>npm install -g axolotl-compiler</pre>
                <p>После этого вы можете скомпилировать свой код Axolotl, запустив следующую команду:</p>
                <pre>axolotl compile yourfile.ax</pre>
                <p>Чтобы запустить скомпилированную программу:</p>
                <pre>axolotl run yourfile.ax</pre>
            `,
            paradigms: `
                <h2>Объектно-ориентированное программирование</h2>
                <table>
                    <tr>
                        <th>Принцип</th>
                        <th>Описание</th>
                    </tr>
                    <tr>
                        <td>Инкапсуляция</td>
                        <td>Данные и методы объединены в рамках классов</td>
                    </tr>
                    <tr>
                        <td>Наследование</td>
                        <td>Возможность расширения функциональности базовых классов</td>
                    </tr>
                    <tr>
                        <td>Полиморфизм</td>
                        <td>Универсальный интерфейс для взаимодействия с различными объектами</td>
                    </tr>
                    <tr>
                        <td>Абстракция</td>
                        <td>Выделение значимых характеристик объекта, скрытие деталей реализации</td>
                    </tr>
                </table>

                <h2>Событийно-ориентированное программирование</h2>
                <table>
                    <tr>
                        <th>Принцип</th>
                        <th>Описание</th>
                    </tr>
                    <tr>
                        <td>Событийная модель</td>
                        <td>Система построена вокруг событий, которые представляют собой ключевые изменения состояния</td>
                    </tr>
                    <tr>
                        <td>Асинхронность</td>
                        <td>События обрабатываются в неблокирующем режиме, обеспечивая высокую производительность</td>
                    </tr>
                    <tr>
                        <td>Обработчики событий</td>
                        <td>Логика приложения определяется через функции, регистрируемые для обработки определённых событий</td>
                    </tr>
                    <tr>
                        <td>Связывание компонентов</td>
                        <td>Компоненты приложения взаимодействуют через события, а не напрямую, что снижает связанность</td>
                    </tr>
                </table>

                <h2>Функциональное программирование</h2>
                <table>
                    <tr>
                        <th>Принцип</th>
                        <th>Описание</th>
                    </tr>
                    <tr>
                        <td>Чистые функции</td>
                        <td>Функции, результат которых зависит только от их входных данных, без побочных эффектов</td>
                    </tr>
                    <tr>
                        <td>Неизменяемость</td>
                        <td>Использование неизменяемых данных для упрощения отслеживания состояния</td>
                    </tr>
                    <tr>
                        <td>Функции высшего порядка</td>
                        <td>Функции, которые принимают в качестве аргументов другие функции или возвращают их</td>
                    </tr>
                    <tr>
                        <td>Лямбда-выражения</td>
                        <td>Анонимные функции для лаконичного описания поведения</td>
                    </tr>
                    <tr>
                        <td>Каррирование</td>
                        <td>Разделение функции с несколькими аргументами на несколько функций с одним аргументом</td>
                    </tr>
                </table>
            `,
            functions: `
                <h2>Функции</h2>
                <p>Axolotl поддерживает функции. Вы можете определить функцию с помощью ключевого слова <code>def</code>:</p>
                <pre>
def приветствие(имя: String): String {
    return "Привет, " + имя + "!";
}
                </pre>
                <p>Функции могут иметь параметры по умолчанию:</p>
                <pre>
def приветствие(имя: String = "Мир"): String {
    return "Привет, " + имя + "!";
}
                </pre>
            `,
            methods: `
                <h2>Методы</h2>
                <p>Методы - это функции, принадлежащие классу. Они могут получать доступ к свойствам экземпляра:</p>
                <pre>
class Человек {
    private имя: String;
    
    constructor(имя: String) {
        this.имя = имя;
    }
    
    def приветствие(): String {
        return "Привет, я " + this.имя;
    }
}
                </pre>
            `,
            interfaces: `
                <h2>Интерфейсы</h2>
                <p>Интерфейсы определяют контракты, которые должны реализовать классы:</p>
                <pre>
interface Рисуемый {
    def рисовать(): void;
    def получитьПлощадь(): Number;
}

class Круг implements Рисуемый {
    private радиус: Number;
    
    constructor(радиус: Number) {
        this.радиус = радиус;
    }
    
    def рисовать(): void {
        // Логика рисования
    }
    
    def получитьПлощадь(): Number {
        return Math.PI * this.радиус * this.радиус;
    }
}
                </pre>
            `,
            abstractClasses: `
                <h2>Абстрактные классы</h2>
                <p>Абстрактные классы не могут быть созданы напрямую и могут содержать абстрактные методы:</p>
                <pre>
abstract class Животное {
    protected имя: String;
    
    constructor(имя: String) {
        this.имя = имя;
    }
    
    abstract def издатьЗвук(): String;
    
    def получитьИмя(): String {
        return this.имя;
    }
}

class Собака extends Животное {
    def издатьЗвук(): String {
        return "Гав!";
    }
}
                </pre>
            `,
            classes: `
                <h2>Классы</h2>
                <p>Классы являются основными строительными блоками объектно-ориентированного программирования в Axolotl:</p>
                <pre>
class Транспорт {
    private скорость: Number;
    private топливо: Number;
    
    constructor(начальноеТопливо: Number) {
        this.скорость = 0;
        this.топливо = начальноеТопливо;
    }
    
    def ускориться(количество: Number): void {
        if (this.топливо > 0) {
            this.скорость += количество;
            this.топливо -= количество * 0.1;
        }
    }
    
    def получитьСкорость(): Number {
        return this.скорость;
    }
}
                </pre>
            `,
            handlers: `
                <h2>Обработчики событий</h2>
                <p>Обработчики событий - это специальные функции, которые реагируют на события:</p>
                <pre>
event КликПользователя {
    x: Number;
    y: Number;
}

handler наКликПользователя(событие: КликПользователя) {
    console.log("Пользователь кликнул в: " + событие.x + ", " + событие.y);
}

// Регистрация обработчика
register(КликПользователя, наКликПользователя);
                </pre>
            `,
            abstractModules: `
                <h2>Абстрактные модули</h2>
                <p>Абстрактные модули определяют интерфейсы для модулей, которые должны быть реализованы:</p>
                <pre>
abstract module МодульБазыДанных {
    abstract def подключиться(строкаПодключения: String): void;
    abstract def запрос(sql: String): Array&lt;Object&gt;;
    abstract def отключиться(): void;
}
                </pre>
            `,
            modules: `
                <h2>Модули</h2>
                <p>Модули - это контейнеры для связанной функциональности:</p>
                <pre>
module МатематическиеУтилиты {
    def сложить(a: Number, b: Number): Number {
        return a + b;
    }
    
    def умножить(a: Number, b: Number): Number {
        return a * b;
    }
    
    const PI: Number = 3.14159;
}

// Использование
import МатематическиеУтилиты;
let результат = МатематическиеУтилиты.сложить(5, 3);
                </pre>
            `,
            annotations: `
                <h2>Аннотации</h2>
                <p>Аннотации предоставляют метаданные о элементах кода:</p>
                <pre>
@Устарело("Используйте новыйМетод вместо этого")
def старыйМетод(): void {
    // Старая реализация
}

@Переопределение
def toString(): String {
    return "Пользовательское строковое представление";
}

@Асинхронный
def получитьДанные(): Promise&lt;String&gt; {
    // Асинхронная операция
}
                </pre>
            `,
            decorators: `
                <h2>Декораторы</h2>
                <p>Декораторы изменяют поведение классов и методов:</p>
                <pre>
@Компонент
class СервисПользователя {
    @Внедрить("репозиторийПользователя")
    private репозиторий: РепозиторийПользователя;
    
    @Кэш(таймаут: 300)
    def получитьПользователя(id: Number): Пользователь {
        return this.репозиторий.найтиПоId(id);
    }
}
                </pre>
            `
        }
    },
    JA: {
        header: ["エディター", "ドキュメント", "ホーム", "コミュニティ"],
        mainInfo: "主にイベント駆動型およびオブジェクト指向として設計されています。2つのパラダイムの組み合わせにより、提供された規則を遵守しながら、プログラムのアーキテクチャ設計を大幅に簡素化できます。",
        advantages: "axlの利点のいくつかの例：高いパフォーマンス、簡単な学習曲線、柔軟な構文、強力な型システム、優れたツールサポート。",
        footer: ["© 2024 Axolotlチーム", "プライバシーポリシー", "利用規約", "お問い合わせ"],
        buttons: ["OK", "キャンセル", "受け入れる", "詳細"],
        window: ["Axolotlプログラミング言語"],
        docs: {
            headers: ["はじめに", "パラダイム", "関数", "メソッド", "インターフェース", "抽象クラス", "クラス", "ハンドラー", "抽象モジュール", "モジュール", "アノテーション", "デコレーター"],
            pageNav: {
                introduction: ["はじめに", "紹介"],
                paradigms: ["オブジェクト指向プログラミング", "イベント駆動プログラミング", "関数型プログラミング"],
                functions: ["関数", "メソッド", "インターフェース", "抽象クラス", "クラス", "ハンドラー", "抽象モジュール", "モジュール"],
                methods: ["アノテーション", "デコレーター"],
            },
            introduction: `
                <h2>はじめに</h2>
                <p>まず、Axolotlコンパイラをインストールする必要があります。次のコマンドを実行してインストールできます：</p>
                <pre>npm install -g axolotl-compiler</pre>
                <p>その後、次のコマンドを実行してAxolotlコードをコンパイルできます：</p>
                <pre>axolotl compile yourfile.ax</pre>
                <p>コンパイルされたプログラムを実行するには：</p>
                <pre>axolotl run yourfile.ax</pre>
            `,
            paradigms: `
                <h2>オブジェクト指向プログラミング</h2>
                <table>
                    <tr>
                        <th>原則</th>
                        <th>説明</th>
                    </tr>
                    <tr>
                        <td>カプセル化</td>
                        <td>データとメソッドがクラス内で結合されている</td>
                    </tr>
                    <tr>
                        <td>継承</td>
                        <td>基底クラスの機能を拡張する能力</td>
                    </tr>
                    <tr>
                        <td>ポリモーフィズム</td>
                        <td>異なるオブジェクトと対話するためのユニバーサルインターフェース</td>
                    </tr>
                    <tr>
                        <td>抽象化</td>
                        <td>オブジェクトの重要な特性を強調し、実装の詳細を隠す</td>
                    </tr>
                </table>

                <h2>イベント駆動プログラミング</h2>
                <table>
                    <tr>
                        <th>原則</th>
                        <th>説明</th>
                    </tr>
                    <tr>
                        <td>イベントモデル</td>
                        <td>重要な状態変化を表すイベントを中心に構築されたシステム</td>
                    </tr>
                    <tr>
                        <td>非同期性</td>
                        <td>イベントは非ブロッキングモードで処理され、高いパフォーマンスを保証</td>
                    </tr>
                    <tr>
                        <td>イベントハンドラー</td>
                        <td>特定のイベントを処理するために登録された関数を通じて定義されるアプリケーションロジック</td>
                    </tr>
                    <tr>
                        <td>コンポーネントバインディング</td>
                        <td>アプリケーションコンポーネントは直接ではなくイベントを通じて相互作用し、結合度を下げる</td>
                    </tr>
                </table>

                <h2>関数型プログラミング</h2>
                <table>
                    <tr>
                        <th>原則</th>
                        <th>説明</th>
                    </tr>
                    <tr>
                        <td>純粋関数</td>
                        <td>結果が入力データのみに依存し、副作用のない関数</td>
                    </tr>
                    <tr>
                        <td>不変性</td>
                        <td>状態追跡を簡素化するための不変データの使用</td>
                    </tr>
                    <tr>
                        <td>高階関数</td>
                        <td>他の関数を引数として取るか、関数を返す関数</td>
                    </tr>
                    <tr>
                        <td>ラムダ式</td>
                        <td>行動を簡潔に記述するための匿名関数</td>
                    </tr>
                    <tr>
                        <td>カリー化</td>
                        <td>複数の引数を持つ関数を単一の引数を持つ複数の関数に分割</td>
                    </tr>
                </table>
            `,
        }
    }
}