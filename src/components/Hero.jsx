import heroImg from "../assets/images/illustration-intro.png";

export default function Hero(props) {
    return (
        <section className="hero">
            <img src={heroImg} alt="" />
            <h2>All your files in one secure location, accessible anywhere.</h2>
            <p>
                Fylo strores all your most important files in one secure
                location. Access them wherever you need, share and collaborate
                with friends family, and co-workers
            </p>
            <a
                className={
                    (props.windowHeight > 95 && props.windowWidth > 810) ||
                    (props.windowHeight > 240 &&
                        props.windowWidth <= 810 &&
                        props.windowWidth > 450) ||
                    props.windowWidth <= 450
                        ? "btn-get-started animate"
                        : "btn-get-started"
                }
                href="#"
            >
                Get Started
            </a>
        </section>
    );
}
