import { useState } from "react"

function DeliverySection() {
    const handleSubmit = (e) => {
        setEmail("")
        setPassword("")
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <form action="/orderConfirmation" onSubmit={handleSubmit}>
                <fieldset>
                <h2 className="formHeader">Order a Delivery:</h2>
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
                        <label htmlFor="emailInput">Account Email Address:</label>
                        <input
                            id="emailInput"
                            name="emailInput"
                            type="email"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                            required
                        />
                    </div>
                    <div className="formField">
                    <label htmlFor="passwordInput">Account Password:</label>
                        <input
                            id="passwordInput"
                            name="passwordInput"
                            type="password"
                            minLength={6}
                            maxLength={30}
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
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