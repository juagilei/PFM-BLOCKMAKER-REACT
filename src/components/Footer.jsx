

export default function Footer() {
    return (
    <footer className="bg-black py-4 px-10 sm:p-8 flex justify-between items-center text-gray-300">
            <p>Derechos de autor &copy; {new Date().getFullYear()} Juagilei</p>
            <p>Contacto: <a href="mailto:juagilei@gmail.com">juagilei@gmail.com</a></p>
             <a href="https://github.com/juagilei/PFM-BLOCKMAKER-REACT.git">
            <img src="../../public/github-mark-white.png" alt="Icono git" width={50} />
            </a>
    </footer>
    )
}