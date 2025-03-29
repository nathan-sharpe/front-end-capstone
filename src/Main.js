import heroImage from "./restauranfood.jpg"
import restaurantImage from "./restaurant.jpg"
import marioAndAdrian from "./Mario and Adrian b.jpg"
import greekSalad from "./greek salad.jpg"
import bruschetta from "./bruchetta.svg"
import lemonDessert from "./lemon dessert.jpg"

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
                    <section className="specialsCard">
                        <img src={greekSalad} className="specialsImage" alt="Greek salad"></img>
                        <section className="specialsCardContent">
                            <section className="specialsCardHeadingPrice">
                                <h4 className="specialsCardHeader">Greek Salad</h4>
                                <p className="specialsCardPrice">$12.99</p>
                            </section>
                            <p className="specialsCardDescription">
                                The famous Greek salad of peppers, lettuce, olives, and our Chicago style feta cheese,
                                garnished with crunchy garlic and rosemary croutons.
                            </p>
                            <button className="button specialsCardButton">Order a Delivery</button>
                        </section>
                    </section>
                    <section className="specialsCard">
                        <img src={bruschetta} className="specialsImage" alt="Bruschetta"></img>
                        <section className="specialsCardContent">
                            <section className="specialsCardHeadingPrice">
                                <h4 className="specialsCardHeader">Bruschetta</h4>
                                <p className="specialsCardPrice">$5.99</p>
                            </section>
                            <p className="specialsCardDescription">
                                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                            </p>
                            <button className="button specialsCardButton">Order a Delivery</button>
                        </section>
                    </section>
                    <section className="specialsCard">
                        <img src={lemonDessert} className="specialsImage" alt="Lemon Dessert cake"></img>
                        <section className="specialsCardContent">
                            <section className="specialsCardHeadingPrice">
                                <h4 className="specialsCardHeader">Lemon Dessert</h4>
                                <p className="specialsCardPrice">$5.00</p>
                            </section>
                            <p className="specialsCardDescription">
                                This comes straight from every grandma's recipe book, every last ingredient has been sourced
                                 and is as authentic as can be imagined.
                            </p>
                            <button className="button specialsCardButton">Order a Delivery</button>
                        </section>
                    </section>
                </section>
            </section>
            <section className="testimonialsContainer">
                <h2 className="testimonialsHeader">Testimonials</h2>
                <section className="testimonialsCards">
                    <section className="testimonialsCard">
                        "The food was great, 10/10, highly recommend." - Robert P.
                    </section>
                    <section className="testimonialsCard">
                        "Best Greek salad I've ever had!" - Martha B.
                    </section>
                    <section className="testimonialsCard">
                        "Best Mediterranean food in Chicago at a great price." - Tim Q.
                    </section>
                    <section className="testimonialsCard">
                        "The food is always great whether in house or delivered." - Matt R.
                    </section>
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