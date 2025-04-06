import heroImage from "../images/restauranfood.jpg";

function HeroSection() {
    return (
    <section className="heroSectionContainer">
        <section className="heroSectionColumn">
            <h2 className="heroSectionHeaderMain">Little Lemon</h2>
            <h4 className="heroSectionSubHeader">Chicago</h4>
            <p className="heroSectionDescription">
                We are a family owned Mediterranean restaurant, focused on traditional recipes with a modern twist.
            </p>
            <a href="/reservations"><button className="button heroButton">Reserve a Table</button></a>
        </section>
        <section className="heroSectionColumn">
            <img src={heroImage} className="heroImage" alt="Holding a tray of food"></img>
        </section>
    </section>
    )
}

export default HeroSection