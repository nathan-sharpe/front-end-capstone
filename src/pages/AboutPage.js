import Header from "../components/Header"
import Footer from "../components/Footer"
import AboutSection from "../components/AboutSection"

function AboutPage () {
    const AboutStyles = {
        backgroundColor: "#F4CE14"
    }
    return (
        <>
            <Header />
            <div style={AboutStyles}><AboutSection /></div>
            <Footer />
        </>
    )
}

export default AboutPage