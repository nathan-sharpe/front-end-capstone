import logo from './little-lemon-logo.svg'
import Nav from './Nav'

function Header () {
    return (
        <header className="Header">
            <img src={logo} alt="Logo of the Little Lemon Restaurant"></img>
            <Nav/>
        </header>
    )
}

export default Header