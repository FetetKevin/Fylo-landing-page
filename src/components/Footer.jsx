import logo from "../assets/images/logo.svg";
import iconLocation from "../assets/images/icon-location.svg";
import iconPhone from "../assets/images/icon-phone.svg";
import iconEmail from "../assets/images/icon-email.svg";

export default function Footer() {
    return (
        <footer>
            <div className="middle">
                <h2>Get early access today</h2>
                <p>
                    It only takes a minute to sign up and our free starter tier
                    is ectremely generous. If you have any questions, our
                    support team would be happy to help you.
                </p>
                <div className="inputs">
                    <input type="text" placeholder="email@exemple.com" />
                    <button>Get Started For Free</button>
                </div>
            </div>

            <div className="footer-bottom">
                <img src={logo} alt="" />
                <div className="links">
                    <div className="block-1">
                        <img src={iconLocation} alt="" />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Tempora doloribus dolorem dolorum molestiae
                            eveniet ullam animi ea perspiciatis minus illum?
                        </p>
                    </div>
                    <div className="block-2">
                        <div className="sous-block">
                            <img src={iconPhone} alt="" />
                            <p>+1-234-567-899</p>
                        </div>
                        <div className="sous-block">
                            <img src={iconEmail} alt="" />
                            <p>exemple@fylo.com</p>
                        </div>
                    </div>
                    <div className="block-3">
                        <ul>
                            <li>About us</li>
                            <li>Jobs</li>
                            <li>Press</li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                    <div className="block-4">
                        <ul>
                            <li>Contact us</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className="block-5">
                        <ul>
                            <li><img src={iconLocation} alt="" /></li>
                            <li><img src={iconLocation} alt="" /></li>
                            <li><img src={iconLocation} alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
