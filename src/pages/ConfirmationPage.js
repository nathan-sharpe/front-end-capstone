import Header from "../components/Header";
import Footer from "../components/Footer";

function ConfirmationPage(props) {
    return (
        <>
            <Header />
            <h1 className="confirmationHeader">{props.confirmation} confirmed! Check your email for details</h1>
            <a href="/home"><button className="button returnButton">Return to Homepage</button></a>
            <Footer />
        </>
    )
}

export default ConfirmationPage