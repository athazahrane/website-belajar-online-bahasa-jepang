
// import components
import './Kosakata.css'
import KataKerja from "./Components/Katakerja/KataKerja";
import KataBenda from './Components/KataBenda/KataBenda';
import KataSifat from './Components/KataSifat/KataSifat';

import Footer from '../../components/Footer/Footer';

export default function Kosakata() {
    return (
        <section className="kosakata-section">
            <div className="title-section"># Kosakata</div>
            <main className="content-kosakata">
                {/* kata kerja */}
                <div className="kata-kerja-content">
                    <h3 className='title-kosakata'>Kata Kerja</h3>
                    <br />
                    <p>
                        Kata kerja dalam bahasa Jepang adalah bagian dari kalimat yang menunjukkan tindakan atau keadaan. Dalam bahasa Jepang, kata kerja biasanya terletak di akhir kalimat dan dibedakan berdasarkan bentuk dan maknanya. Berikut adalah kosakata untuk kata kerja :
                    </p>
                    <br />
                    <KataKerja />
                </div>

                {/* kata benda */}
                <div className="kata-benda-content">
                    <h3 className='title-kosakata'>Kata Benda</h3>
                    <br />
                    <p>
                        Kata benda dalam bahasa Jepang adalah kata yang merujuk pada orang, tempat, benda, atau konsep. Kata benda dapat berfungsi sebagai subjek, objek, atau pelengkap dalam kalimat.
                    </p>
                    <KataBenda />
                </div>

                {/* kata benda */}
                <div className="kata-benda-content">
                    <h3 className='title-kosakata'>Kata Sifat</h3>
                    <br />
                    <p>
                        Kata sifat dalam bahasa Jepang digunakan untuk menggambarkan atau memberikan informasi lebih lanjut tentang kata benda. Kata sifat dapat menunjukkan kualitas, kondisi, atau keadaan suatu benda.
                    </p>
                    <KataSifat />
                </div>
            </main>
            <Footer />
        </section>
    )
}
