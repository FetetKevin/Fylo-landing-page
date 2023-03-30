import productiveImg from "../assets/images/illustration-stay-productive.png";

import profile_1 from "../assets/images/profile-1.jpg";
import profile_2 from "../assets/images/profile-2.jpg";
import profile_3 from "../assets/images/profile-3.jpg";

export default function Testimonials(props) {
    return (
        <section className="testimonials">
            <div className="top">
                <img
                    className={
                        (props.windowHeight >= 1537 &&
                            props.windowWidth > 810) ||
                        (props.windowHeight >= 1400 &&
                            props.windowWidth <= 810 &&
                            props.windowWidth > 450) ||
                        (props.windowHeight >= 1771 && props.windowWidth <= 450)
                            ? "productive animate"
                            : "productive"
                    }
                    src={productiveImg}
                    alt=""
                />
                <div
                    className={
                        (props.windowHeight >= 1537 &&
                            props.windowWidth > 810) ||
                        (props.windowHeight >= 1703 &&
                            props.windowWidth <= 810 &&
                            props.windowWidth > 450) ||
                        (props.windowHeight >= 2180 && props.windowWidth <= 450)
                            ? "block-right animate"
                            : "block-right"
                    }
                >
                    <h2>Stay productive, wherever your are.</h2>
                    <p>
                        Never let location be an issue when accessing your
                        files. Fylo has you covered for all of your file storage
                        needs
                    </p>
                    <p>
                        Securely share files and folders with friends, family
                        and colleagues for live collaboration. No email
                        attachments required.
                    </p>
                    <h4 className="link">
                        <a href="#">See how Fylo works</a>
                    </h4>
                </div>
            </div>

            <div className="comments">
                <div
                    className={
                        (props.windowHeight >= 1905 &&
                            props.windowWidth > 810) ||
                        (props.windowHeight >= 2063 &&
                            props.windowWidth <= 810 &&
                            props.windowWidth > 450) ||
                        (props.windowHeight >= 2485 && props.windowWidth <= 450)
                            ? "comment comment-1 animate"
                            : "comment comment-1"
                    }
                >
                    <p>
                        Fylo has improved our team productivity by an order of
                        magnitude. Since making the switch our team has become a
                        well-oiled collaborative machine.
                    </p>
                    <div className="user">
                        <img src={profile_1} alt="" />
                        <div className="infos">
                            <h3>Satish Patel</h3>
                            <h4>Founder & CEO, Huddle</h4>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        (props.windowHeight >= 1905 &&
                            props.windowWidth > 810) ||
                        (props.windowHeight >= 2303 &&
                            props.windowWidth <= 810 &&
                            props.windowWidth > 450) ||
                        (props.windowHeight >= 2716 && props.windowWidth <= 450)
                            ? "comment comment-2 animate"
                            : "comment comment-2"
                    }
                >
                    <p>
                        Fylo has improved our team productivity by an order of
                        magnitude. Since making the switch our team has become a
                        well-oiled collaborative machine.
                    </p>
                    <div className="user">
                        <img src={profile_2} alt="" />
                        <div className="infos">
                            <h3>Bruce McKenzie</h3>
                            <h4>Founder & CEO, Huddle</h4>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        (props.windowHeight >= 1905 &&
                            props.windowWidth > 810) ||
                        (props.windowHeight >= 2535 &&
                            props.windowWidth <= 810 &&
                            props.windowWidth > 450) ||
                        (props.windowHeight >= 2965 && props.windowWidth <= 450)
                            ? "comment comment-3 animate"
                            : "comment comment-3"
                    }
                >
                    <p>
                        Fylo has improved our team productivity by an order of
                        magnitude. Since making the switch our team has become a
                        well-oiled collaborative machine.
                    </p>
                    <div className="user">
                        <img src={profile_3} alt="" />
                        <div className="infos">
                            <h3>Iva Boyd</h3>
                            <h4>Founder & CEO, Huddle</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
