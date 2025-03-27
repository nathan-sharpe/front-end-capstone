import heroImage from "./restauranfood.jpg"
import restaurantImage from "./restaurant.jpg"
import marioAndAdrian from "./Mario and Adrian b.jpg"

function Main() {
    return (
        <main>
            <section className="heroSectionContainer">
                <section className="heroSectionColumn">
                    <h2>Little Lemon</h2>
                    <h4>Chicago</h4>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes with a modern twist.
                    </p>
                    <button>Reserve a Table</button>
                </section>
                <section className="heroSectionColumn">
                    <img src={heroImage} className="heroImage"></img>
                </section>
            </section>
            <section className="highlightsContainer">
                <section className="specialsTopFlex">
                    <h3>This week's specials!</h3>
                    <button>Online Menu</button>
                </section>
                <section className="specialsCards">
                    <section className="specialsCard">Greek Salad</section>
                    <section className="specialsCard">Bruschetta</section>
                    <section className="specialsCard">Lemon Dessert</section>
                </section>
            </section>
            <section className="testimonialsContainer">
                <h2>Testimonials</h2>
                <section className="testimonialsCards">
                    <section className="testimonialsCard">Testimonal1</section>
                    <section className="testimonialsCard">Testimonal2</section>
                    <section className="testimonialsCard">Testimonal3</section>
                    <section className="testimonialsCard">Testimonal4</section>
                </section>
            </section>
            <section className="aboutContainer">
                <section className="aboutColumn">
                    <h2>Little Lemon</h2>
                    <h4>Chicago</h4>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes with a modern twist.
                    </p>
                </section>
                <section className="aboutColumn">
                    <img src={restaurantImage} className="aboutImage"></img>
                    <img src={marioAndAdrian} className="aboutImage"></img>
                </section>
            </section>
        </main>
    )
}

export default Main