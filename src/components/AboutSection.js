import restaurantImage from "../images/restaurant.jpg"
import marioAndAdrian from "../images/Mario and Adrian b.jpg"

function AboutSection() {
    return (
        <section className="aboutContainer">
                <section className="aboutColumn">
                    <h2 className="aboutHeader">Little Lemon</h2>
                    <h4 className="aboutSubHeader">Chicago</h4>
                    <p className="aboutDescription">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes with a modern twist.
                    </p>
                </section>
                <section className="aboutColumn imageColumn">
                    <img src={restaurantImage} className="aboutImage" alt="Little Lemon restaurant interior"></img>
                    <img src={marioAndAdrian} className="aboutImage" alt="Brothers Mario and Adrian in the kitchen"></img>
                </section>
            </section>
    )
}

export default AboutSection