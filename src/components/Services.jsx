import accessImg from "../assets/images/icon-access-anywhere.svg";
import securityImg from "../assets/images/icon-security.svg";
import realtimeImg from "../assets/images/icon-collaboration.svg";
import storeImg from "../assets/images/icon-any-file.svg";

export default function Services(props) {
    return (
        <section className="services">
            <article
                className={
                    (props.windowHeight >= 497 && props.windowWidth > 810) ||
                    (props.windowHeight >= 590 &&
                        props.windowWidth <= 810 &&
                        props.windowWidth > 450) ||
                    (props.windowHeight >= 534 && props.windowWidth <= 450)
                        ? "article-1 animate"
                        : "article-1"
                }
            >
                <img src={accessImg} alt="" />
                <h3>Access your files, anywhere</h3>
                <p>
                    The ability to use a smartphone, tablet, or computer to
                    access your account means your files follow you everywhere.
                </p>
            </article>

            <article
                className={
                    (props.windowHeight >= 497 && props.windowWidth > 810) ||
                    (props.windowHeight >= 590 &&
                        props.windowWidth <= 810 &&
                        props.windowWidth > 450) ||
                    (props.windowHeight >= 942 && props.windowWidth <= 450)
                        ? "article-2 animate"
                        : "article-2"
                }
            >
                <img src={securityImg} alt="" />
                <h3>Security you can trust</h3>
                <p>
                    2-factor authetification and suer-controlled encryption are
                    just a couple of the security features we allow to help
                    secure your files.
                </p>
            </article>

            <article
                className={
                    (props.windowHeight >= 846 && props.windowWidth > 810) ||
                    (props.windowHeight >= 947 &&
                        props.windowWidth <= 810 &&
                        props.windowWidth > 450) ||
                    (props.windowHeight >= 1248 && props.windowWidth <= 450)
                        ? "article-3 animate"
                        : "article-3"
                }
            >
                <img src={realtimeImg} alt="" />
                <h3>Real-time collaboration</h3>
                <p>
                    Security share files and folders with friends, family and
                    colleagues fr live collaboration. No email attachments
                    required.
                </p>
            </article>

            <article
                className={
                    (props.windowHeight >= 846 && props.windowWidth > 810) ||
                    (props.windowHeight >= 947 &&
                        props.windowWidth <= 810 &&
                        props.windowWidth > 450) ||
                    (props.windowHeight >= 1656 && props.windowWidth <= 450)
                        ? "article-4 animate"
                        : "article-4"
                }
            >
                <img src={storeImg} alt="" />
                <h3>Store any type of file</h3>
                <p>
                    Weather you're sharing holidays photos or work documents,
                    Fylo has you covered allowing for all file types to be
                    securely stored and shared.
                </p>
            </article>
        </section>
    );
}
