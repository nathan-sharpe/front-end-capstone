import logo from '../images/little-lemon-logo.svg'
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom'

function Header () {

    const navigate = useNavigate();
    function handleClick() {
        navigate("/home");
    }

    return (
        <header className="Header">
            <img src={logo} alt="Logo of the Little Lemon Restaurant" onClick={handleClick}></img>
            <Nav/>
        </header>
    )
}

export default Header