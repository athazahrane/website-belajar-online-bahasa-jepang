import './style.css'
import Footer from '../../../../components/Footer/Footer'
import { PelajaranSatu } from '../../Pages/DaftarPelajaran'
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';

function MinnaNoNihonGo1() {
    useEffect(() => {
        AOS.init()
    })
    return (
        <section className="buku-satu">
            <div className="card-container">
                {PelajaranSatu.map((card, index) => (
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
            <Footer />
        </section>
    )
}

export default MinnaNoNihonGo1