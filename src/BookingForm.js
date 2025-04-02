import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        setDate("");
        setTime("");
        setGuests(1);
        setOccasion("");
    }

    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState("")

    const navigate = useNavigate();
    function handleClick() {
        navigate("/confirmation");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="formField">
                        <label htmlFor="res-date">Select Date:</label>
                        <input
                            id="res-date"
                            type="date"
                            name="res-name"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="formField">
                        <label htmlFor="res-time">Select Time:</label>
                        <select id="res-time"  name="res-time" value={time} onChange={(e) => {setTime(e.target.value)}}>
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
                        />
                    </div>
                    <div className="formField">
                        <label htmlFor="occasion">Occasion:</label>
                        <select id="occasion" name="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value)}}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                    <button className="button submitButton" type="submit" onClick={handleClick}>Submit Reservation</button>
                </fieldset>
            </form>
        </>
    )
}

export default BookingForm