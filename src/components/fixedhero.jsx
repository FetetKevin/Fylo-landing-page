import heroImg from "../assets/images/illustration-intro.png";
import { useState, useEffect } from "react";
export default function Hero() {
    const [animationPlayed, setAnimationPlayed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const button = document.querySelector(".btn-get-started");

            if (
                !animationPlayed &&
                button &&
                button.getBoundingClientRect().top < window.innerHeight
            ) {
                button.classList.add("animate");
                setAnimationPlayed(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [animationPlayed]);

    return (
        <section className="hero">
            <img src={heroImg} alt="" />
            <h2>All your files in one secure location, accessible anywhere.</h2>
            <p>
                Fylo stores all your most important files in one secure
                location. Access them wherever you need, share and collaborate
                with friends family, and co-workers
            </p>
            <a className="btn-get-started" href="#">
                Get Started
            </a>
        </section>
    );
}
