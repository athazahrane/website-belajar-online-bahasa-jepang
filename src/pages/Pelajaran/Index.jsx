import './style.css'
import Footer from '../../components/Footer/Footer'
import { DaftarPelajarans } from './Pages/DaftarPelajaran'
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';

function DaftarPelajaran() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className="daftar-pelajaran-section">
            <main className="pelajaran-section">
                <div className="card-container">
                    {DaftarPelajarans.map((card, index) => (
                        <div
                            className="card"
                            key={card.id}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                        >
                            <div className="image-card">
                                <img src={card.image} alt={card.title} />
                            </div>
                            <div className="content-card">
                                <h4>{card.title}</h4>
                                <small>{card.description}</small>
                                <Button variant="contained" className="btn-primary">
                                    <Link to={card.link} className="link">Belajar sekarang</Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </section>
    )
}
export default DaftarPelajaran