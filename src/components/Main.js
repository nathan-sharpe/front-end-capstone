import heroImage from "../images/restauranfood.jpg"
import restaurantImage from "../images/restaurant.jpg"
import marioAndAdrian from "../images/Mario and Adrian b.jpg"
import greekSalad from "../images/greek salad.jpg"
import bruschetta from "../images/bruchetta.svg"
import lemonDessert from "../images/lemon dessert.jpg"

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
                    <a href="/reservations"><button className="button heroButton">Reserve a Table</button></a>
                </section>
                <section className="heroSectionColumn">
                    <img src={heroImage} className="heroImage" alt="Holding a tray of food"></img>
                </section>
            </section>
            <section className="highlightsContainer">
                <section className="specialsTopFlex">
                    <h3 className="specialsHeader">This week's specials!</h3>
                    <a href="/menu"><button className="button specialsButton">Online Menu</button></a>
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
                            <a href="/orderonline"><button className="button specialsCardButton">Order a Delivery</button></a>
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
                            <a href="/orderonline"><button className="button specialsCardButton">Order a Delivery</button></a>
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
                            <a href="/orderonline"><button className="button specialsCardButton">Order a Delivery</button></a>
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
                    <img src={restaurantImage} className="aboutImage" alt="Little Lemon restaurant interior"></img>
                    <img src={marioAndAdrian} className="aboutImage" alt="Brothers Mario and Adrian in the kitchen"></img>
                </section>
            </section>
        </main>
    )
}

export default Main