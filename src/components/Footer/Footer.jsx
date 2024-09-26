import './footer.css'
import Logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-1">
                <img src={Logo} alt="Japanext" />
                <p>
                    Belajar bahasa Jepang dengan cara interaktif dan menyenangkan! Kuasai kosakata dan tata bahasa N5 dan N4. Bergabunglah sekarang.
                </p>
            </div>
            <div className="footer-2">
                <h2>Usefull Links</h2>
                <ul>
                    <li className="li-footer">
                        <Link className="footer-link" to='/'>Home</Link>
                    </li>
                    <li className="li-footer">
                        <Link className="footer-link" to='/kosakata'>Daftar Kosakata</Link>
                    </li>
                    <li className="li-footer">
                        <Link className="footer-link" to='/pelajaran'>Daftar Pelajaran</Link>
                    </li>
                    <li className="li-footer">
                        <Link className="footer-link" to='/contact'>Kontak Kami</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-copyright">
                <p>© 2024 Created by Elang Atha Zahran</p>
            </div>
        </footer>
    )
}
export default Footer