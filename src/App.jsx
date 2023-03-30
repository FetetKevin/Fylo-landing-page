import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
    const [windowHeight, setWindowHeight] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const height = () => {
            setWindowHeight(window.scrollY);
        };
        window.addEventListener("scroll", height);
        return () => {
            window.removeEventListener("scroll", height);
        };
    }, []);

    useEffect(() => {
        const getWidth = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", getWidth);
        return () => {
            window.removeEventListener("resize", getWidth);
        };
    }, []);

    console.log(windowHeight, windowWidth);
    return (
        <>
            <div className="container">
                <Navbar />
                <main>
                    <Hero
                        windowHeight={windowHeight}
                        windowWidth={windowWidth}
                    />
                    <Services
                        windowHeight={windowHeight}
                        windowWidth={windowWidth}
                    />
                    <Testimonials
                        windowHeight={windowHeight}
                        windowWidth={windowWidth}
                    />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default App;
