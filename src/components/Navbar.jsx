import logo from "../assets/images/logo.svg";

export default function Navbar() {
    return (
        <header>
            <nav>
                <img src={logo} alt="" />
                <a href="">Features</a>
                <a href="">Team</a>
                <a href="">Sign In</a>
            </nav>
        </header>
    );
}
