import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import Logo from '../../images/logo.png'
import './Navbar.css'
import { checkboxClasses } from "@mui/material"

function Navbar() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('home');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const path = location.pathname.slice(1);
        setActiveLink(path || 'home');

        const checkbox = document.querySelector('input[type="checkbox"]');
        const sidebar = document.querySelector('.navbar-nav');
        const navContainer = document.querySelector('.navbar-container');
        let lastScrollTop = 0;

        checkbox.addEventListener('change', function () {
            setIsSidebarOpen(checkbox.checked);
            if (checkbox.checked) {
                sidebar.classList.add('show');
            } else {
                sidebar.classList.remove('show');
            }
        });

        window.addEventListener('scroll', () => {
            const { scrollY } = window;

            // Tutup sidebar hanya jika menggulir ke bawah
            if (scrollY > lastScrollTop && isSidebarOpen) {
                checkbox.checked = false; // Menutup sidebar
                setIsSidebarOpen(false);
                sidebar.classList.remove('show');
            }

            if (scrollY > lastScrollTop) {
                navContainer.classList.remove('visible');
            } else if (scrollY < lastScrollTop) {
                navContainer.classList.add('visible');
            }

            lastScrollTop = scrollY <= 0 ? 0 : scrollY;
        }, { passive: true });

        const handleClickOutside = (event) => {
            if (isSidebarOpen && !sidebar.contains(event.target) && !checkbox.contains(event.target)) {
                checkbox.checked = false;
                setIsSidebarOpen(false);
                sidebar.classList.remove('show');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            checkbox.removeEventListener('change', function () { });
            window.removeEventListener('scroll', () => { });
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, [location, isSidebarOpen]);

    return (
        <header className="navbar-container visible">
            <img src={Logo} alt="Logo Web" className="navbar-brand" />
            <nav className="navbar-nav">
                <ul>
                    <li onClick={() => setActiveLink('home')}>
                        <i className="fa-solid fa-house icon-link"></i>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li onClick={() => setActiveLink('kosakata')}>
                        <i className="fa-solid fa-bookmark icon-link"></i>
                        <Link to="/kosakata" className="nav-link">Daftar Kosakata</Link>
                    </li>
                    <li onClick={() => setActiveLink('pelajaran')}>
                        <i className="fa-solid fa-book icon-link"></i>
                        <Link to="/pelajaran" className="nav-link">Daftar Pelajaran</Link>
                    </li>
                    <li onClick={() => setActiveLink('contact')}>
                        <i className="fa-solid fa-phone icon-link"></i>
                        <Link to="/contact" className="nav-link">Kontak Kami</Link>
                    </li>
                    <div className={`line-link ${activeLink}`}></div>
                </ul>
            </nav>
            <label className="hamburger">
                <input type="checkbox" />
                <svg viewBox="0 0 32 32">
                    <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className="line" d="M7 16 27 16"></path>
                </svg>
            </label>
        </header>
    );
}

export default Navbar;