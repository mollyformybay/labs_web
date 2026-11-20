export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 py-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p>
                Остап Левинець. Лабораторна робота №3 з вебпрограмування.
            </p>
            <p><a href="#top" className="text-purple-300 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-400">На початок сторінки ↑</a></p>
        </footer>
    );
}
