import React, { useEffect, useState } from "react";
import './Home.css'
import imageHero from '../../images/hero.png'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import { cards } from './CardData'
import Logo from '../../images/logo.png'
import Footer from "../../components/Footer/Footer";

function Home() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="home-section">

            {/* hero */}
            <main className="hero">
                <div className="content-left" data-aos="fade-up">
                    <h1>Welcome to our <span className="text-primary">Website</span></h1>
                    <p>
                        Platform belajar bahasa Jepang online yang efektif dan interaktif, cocok untuk semua level. Dapatkan materi kosakata, tata bahasa, dan latihan praktis dengan metode yang menyenangkan. Mulai belajar sekarang dan kuasai bahasa Jepang dengan mudah!
                    </p>
                    <Button variant="contained" className="btn-primary">
                        <Link to='/pelajaran' className="link">Belajar sekarang</Link>
                    </Button>
                </div>
                <div className="content-right" data-aos="fade-left" data-aos-delay="300">
                    <img src={imageHero} alt="Image Hero Section" />
                </div>
            </main>

            {/* daftar pelajaran */}
            <main className="pelajaran-section">
                <h2 className="title-section">Pelajaran <span className="text-primary">Kami</span></h2>
                <div className="card-container">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className="card"
                            data-aos="fade-up"
                            data-aos-delay={`${index * 300}`}
                        >
                            <div className="image-card">
                                {console.log(card.image)}
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
                <a href="/pelajaran" className="more">
                    Lihat pelajaran lainnnya <i class="fa-solid fa-arrow-right"></i>
                </a>
            </main>

            {/* footer */}
            <Footer />

        </div>
    )
}
export default Home