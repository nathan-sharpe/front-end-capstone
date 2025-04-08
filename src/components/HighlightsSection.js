import greekSalad from "../images/greek salad.jpg"
import bruschetta from "../images/bruchetta.svg"
import lemonDessert from "../images/lemon dessert.jpg"

function HighlightsSection() {
    return (
        <section className="highlightsContainer">
                <section className="specialsHeaderContainer">
                    <h3 className="specialsHeader">This week's specials!</h3>
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
    )
}

export default HighlightsSection