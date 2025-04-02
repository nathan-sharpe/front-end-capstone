import Header from "./Header"
import Footer from "./Footer"

function BookingConfirmationPage() {
    return (
        <>
            <Header />
            <h1>Booking Confirmed!</h1>
            <a href="/home"><button className="button">Return to Homepage</button></a>
            <Footer />
        </>
    )
}

export default BookingConfirmationPage