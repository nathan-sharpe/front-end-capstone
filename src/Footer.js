import logo from './little-lemon-logo.svg'
import Nav from './Nav'

function Footer() {
    return (
        <footer>
            <img src={logo} alt="Logo for the Little Lemon Restaurant"></img>
            <h3>Doormat Navigation</h3>
            <Nav/>
            <h3>Contact</h3>
            <ul>
                <li>Address</li>
                <li>Email</li>
                <li>Phone number</li>
            </ul>
            <h3>Social Media Links</h3>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </footer>
    )
}

export default Footer