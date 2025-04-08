import { useState } from "react";

function BookingForm() {
    const handleSubmit = (e) => {
        setDate("");
        setTime("");
        setGuests(1);
        setOccasion("");
        setEmail("");
        setPassword("");
    }

    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
            <form action="/bookingConfirmation" onSubmit={handleSubmit}>
                <fieldset>
                    <h2 className="formHeader">Book a Reservation:</h2>
                    <div className="formField">
                        <label htmlFor="res-date">Select Date:</label>
                        <input
                            id="res-date"
                            type="date"
                            name="res-date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="formField">
                        <label htmlFor="res-time">Select Time:</label>
                        <select id="res-time"  name="res-time" value={time} onChange={(e) => {setTime(e.target.value)}} required>
                            <option>17:00</option>
                            <option>18:00</option>
                            <option>19:00</option>
                            <option>20:00</option>
                            <option>21:00</option>
                            <option>22:00</option>
                        </select>
                    </div>
                    <div className="formField">
                        <label htmlFor="guests">Number of Guests:</label>
                        <input
                            id="guests"
                            type="number"
                            placeholder="1"
                            min="1"
                            max="10"
                            value={guests}
                            onChange={(e) => {setGuests(e.target.value)}}
                            required
                        />
                    </div>
                    <div className="formField">
                        <label htmlFor="occasion">Occasion:</label>
                        <select id="occasion" name="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value)}}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
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
                    <button className="button submitFormButton" type="submit">Submit Reservation</button>
                </fieldset>
            </form>
        </>
    )
}

export default BookingForm