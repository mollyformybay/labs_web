import Header from './components/Header.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
export default function App() {
    return (
        <div className="min-h-screen bg-[#09090f] px-4 py-4 font-sans leading-relaxed text-zinc-300 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-5xl">
            <Header />

            <main className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <section id="about" className="scroll-mt-6 rounded-2xl border border-l-4 border-[#33283f] border-l-purple-400 bg-[#15131c] p-6 shadow-sm sm:col-span-2 sm:p-7">
                    <h2 className="mb-4 text-2xl font-bold leading-tight text-purple-50">Про мене</h2>
                    <p className="my-2">
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
        </div>
        </div>
    );
}
