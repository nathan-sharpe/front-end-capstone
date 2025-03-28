import heroImage from "./restauranfood.jpg"
import restaurantImage from "./restaurant.jpg"
import marioAndAdrian from "./Mario and Adrian b.jpg"

function Main() {
    return (
        <main>
            <section className="heroSectionContainer">
                <section className="heroSectionColumn">
                    <h2 className="heroSectionHeaderMain">Little Lemon</h2>
                    <h4 className="heroSectionSubHeader">Chicago</h4>
                    <p className="heroSectionDescription">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes with a modern twist.
                    </p>
                    <button className="button heroButton">Reserve a Table</button>
                </section>
                <section className="heroSectionColumn">
                    <img src={heroImage} className="heroImage"></img>
                </section>
            </section>
            <section className="highlightsContainer">
                <section className="specialsTopFlex">
                    <h3 className="specialsHeader">This week's specials!</h3>
                    <button className="button specialsButton">Online Menu</button>
                </section>
                <section className="specialsCards">
                    <section className="specialsCard">Greek Salad</section>
                    <section className="specialsCard">Bruschetta</section>
                    <section className="specialsCard">Lemon Dessert</section>
                </section>
            </section>
            <section className="testimonialsContainer">
                <h2 className="testimonialsHeader">Testimonials</h2>
                <section className="testimonialsCards">
                    <section className="testimonialsCard">Testimonal1</section>
                    <section className="testimonialsCard">Testimonal2</section>
                    <section className="testimonialsCard">Testimonal3</section>
                    <section className="testimonialsCard">Testimonal4</section>
                </section>
            </section>
            <section className="aboutContainer">
                <section className="aboutColumn">
                    <h2 className="aboutHeader">Little Lemon</h2>
                    <h4 className="aboutSubHeader">Chicago</h4>
                    <p className="aboutDescription">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes with a modern twist.
                    </p>
                </section>
                <section className="aboutColumn imageColumn">
                    <img src={restaurantImage} className="aboutImage"></img>
                    <img src={marioAndAdrian} className="aboutImage"></img>
                </section>
            </section>
        </main>
    )
}

export default Main