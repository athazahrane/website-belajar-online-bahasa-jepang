import './style.css'
import Footer from '../../components/Footer/Footer'
import { PelajaranSatu } from '../Pelajaran/Pages/DaftarPelajaran'
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import MinnaNoNihonGo1 from '../../images/minna-no-nihongo/1.jpg'
import MinnaNoNihonGo2 from '../../images/minna-no-nihongo/2.jpg'

function DaftarPelajaran() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className="daftar-pelajaran-section">
            <main className="pelajaran-section">
                <div className="card-container">
                    <div
                        className="card"
                        data-aos="fade-up"
                    >
                        <div className="image-card">
                            <img src={MinnaNoNihonGo1} alt="Buku satu minna no nihon go" />
                        </div>
                        <div className="content-card">
                            <h4>Buku satu minna no nihon go</h4>
                            <small>
                                Buku ini merupakan buku pertama dalam seri Minna no Nihongo. Buku
                                ini membahas tentang dasar-dasar bahasa Jepang, seperti huruf, angka, dan kalimat dasar.
                            </small>
                            <Button variant="contained" className="btn-primary">
                                <Link to='/pelajaran/Minna-no-nihon-go-1' className="link">Belajar sekarang</Link>
                            </Button>
                        </div>
                    </div>
                    <div
                        className="card"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="image-card">
                            <img src={MinnaNoNihonGo2} alt="Buku satu minna no nihon go" />
                        </div>
                        <div className="content-card">
                            <h4>Buku dua minna no nihon go</h4>
                            <small>
                                Buku ini merupakan buku kedua dalam seri Minna no Nihongo. Buku
                                ini membahas tentang kalimat dasar, kalimat majemuk, dan kalimat pas
                            </small>
                            <Button variant="contained" className="btn-primary">
                                <Link className="link">Belajar sekarang</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </section>
    )
}
export default DaftarPelajaran