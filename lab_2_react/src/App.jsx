import Header from './components/Header.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

export default function App() {
    return (
        <>
            <Header />

            <main>
                <section id="about">
                    <h2>Про мене</h2>
                    <p>
                        Я — Остап Левинець, студент Національного університету
                        «Львівська політехніка». Навчаюся за напрямом кібербезпеки.
                        Вмію працювати з Python та C#, вивчав вебтехнології
                        та пробував розробляти сайти.
                    </p>
                </section>

                <Education />
                <Skills />
                <Experience />
            </main>

            <Footer />
        </>
    );
}