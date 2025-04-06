import Header from "../components/Header"
import Footer from "../components/Footer"

function BookingConfirmationPage() {
    return (
        <>
            <Header />
            <h1 className="bookingConfirmationHeader">Booking Confirmed! Check your email for details</h1>
            <a href="/home"><button className="button returnButton">Return to Homepage</button></a>
            <Footer />
        </>
    )
}

export default BookingConfirmationPage