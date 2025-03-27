import logo from './little-lemon-logo.svg'

function Footer() {
    return (
        <footer className="footerGrid">
            <img src={logo} alt="Logo for the Little Lemon Restaurant"></img>
            <section className="footerColumn">
                <h3>Doormat Navigation</h3>
                <nav>
                    <ul className="footerListContainer">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/orderonline">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
            </section>
            <section className="footerColumn">
                <h3>Contact</h3>
                <ul className="footerListContainer">
                    <li>Address</li>
                    <li>Email</li>
                    <li>Phone number</li>
                </ul>
            </section>
            <section className="footerColumn">
                <h3>Social Media Links</h3>
                <ul className="footerListContainer">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer