import { useState } from "react";

function LoginForm() {
    const handleSubmit = (e) => {
        setFirstName("")
        setLastName("")
        setAddress("")
        setEmail("")
        setPassword("")
    }

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <form action="/accountConfirmation" onSubmit={handleSubmit}>
                <fieldset>
                <h2 className="formHeader">Create an Account:</h2>
                <p className="formDescription">Create an account to be able to order deliveries and place reservations seamlessly.</p>
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
                        <label htmlFor="customer-email">Account Email Address:</label>
                        <input
                            id="customer-email"
                            name="customer-email"
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
                    <button className="button submitFormButton" type="submit">Submit Reservation</button>
                </fieldset>
            </form>
        </>
    )
}

export default LoginForm