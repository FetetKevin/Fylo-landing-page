import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div className="container">
                <Navbar />
                <main>
                    <Hero />
                    <Services />
                    <Testimonials />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default App;
