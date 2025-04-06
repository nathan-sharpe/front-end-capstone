import { useState } from "react"

function DeliverySection() {
    const handleSubmit = (e) => {
        setFirstName("")
        setLastName("")
        setAddress("")
        setEmail("")
    }

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")

    return (
        <>
            <h2 className="deliveryFormHeader">Order a Delivery:</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="formField">
                        <label htmlFor="first-name">First Name:</label>
                        <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            minLength={2}
                            maxLength={30}
                            required
                        />
                    </div>
                    <div className="formField">
                        <label htmlFor="last-name">Last Name:</label>
                        <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            minLength={2}
                            maxLength={30}
                            required
                        />
                    </div>
                    <div className ="formField itemsList">
                        <p>Select Items:</p>
                        <input type="checkbox" id="greekSalad" name="greekSalad" />
                        <label htmlFor="greekSalad">Greek Salad</label><br />
                        <input type="checkbox" id="bruschetta" name="bruschetta" />
                        <label htmlFor="bruschetta">Bruschetta</label><br />
                        <input type="checkbox" id="lemonDessert" name="lemonDessert" />
                        <label htmlFor="lemonDessert">Lemon Dessert</label>
                    </div>
                    <div className="formField">
                        <label htmlFor="address">Street Address:</label>
                        <input
                            id="address"
                            name="address"
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            minLength={5}
                            maxLength={50}
                            required
                        />
                    </div>
                    <div className="formField">
                        <label htmlFor="customer-email">Email Address:</label>
                        <input
                            id="customer-email"
                            name="customer-email"
                            type="email"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                            required
                        />
                    </div>
                    <button className="button submitFormButton" type="submit">Submit Order</button>
                </fieldset>
            </form>
        </>
    )
}

export default DeliverySection