import Header from "../components/Header"
import Footer from "../components/Footer"
import HighlightsSection from "../components/HighlightsSection"

function MenuPage() {
    const MenuStyles= {
        backgroundColor: "#FBDABB"
    }
    return (
        <>
            <Header />
            <div style={MenuStyles}><HighlightsSection /></div>
            <Footer />
        </>
    )
}

export default MenuPage