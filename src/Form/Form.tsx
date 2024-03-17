import './Form.css';

const Form = () => {

    const date = new Date().toLocaleDateString();

    return (
        <div className="card">
            <h2 className="formHeading">Reservation Form </h2>
            <p>Fields with yellow asterisks <span className="asterisk"> * </span>are required</p>
            <form className="formContainer">
                <h3 className="subHeading">Personal details </h3>

                <section className="sectionOne">
                    <div className="fullName">
                        <label htmlFor="firstName" className="label">First name<span
                            className="asterisk"> * </span></label>
                        <input type="text" id="firstName" name="firstName" required/>

                        <label htmlFor="lastName" className="label">Last name <span
                            className="asterisk"> * </span></label>
                        <input type="text" id="lastName" name="lastName" required/></div>

                    <label htmlFor="email" className="label">Email <span className="asterisk"> * </span></label>
                    <input className="inputs" type="text" id="email" name="email" required/>

                    <label htmlFor="phone" className="label">Phone</label>
                    <input className="inputs" type="number" id="phone" name="phone"/>
                </section>

                <section className="sectionTwo">
                    <h3 className="subHeading">Reservation details </h3>

                    <div className="dateTime">
                        <label htmlFor="date" className="label">Date <span className="asterisk"> * </span></label>
                        <input type="date" id="date" name="date" min={date} max="31/12/2024" required/>

                        <label htmlFor="time" className="label">Time <span className="asterisk"> * </span></label>
                        <select id="time" name="time" required>
                            <option value="selectTime" className="timeVal">Choose time</option>
                            <option value="13:00" className="timeVal">13:00</option>
                            <option value="15:00" className="timeVal">15:00</option>
                            <option value="19:00" className="timeVal">19:00</option>
                            <option value="21:00" className="timeVal">21:00</option>
                            <option value="23:00" className="timeVal">23:00</option>
                        </select></div>
                    <label htmlFor="totalGuests" className="label">Number of Guests <span
                        className="asterisk"> * </span></label>
                    <input className="inputs" type="text" id="totalGuests" name="totalguests" required/>

                    <div className="aboutReservation">
                        <label htmlFor="reservationType" className="label">Reservation type <span
                            className="asterisk"> * </span></label>
                        <select className="optionVal" name="reservationType" id="reservationType" required>
                            <option value="lunch" className="optionVal">Lunch</option>
                            <option value="dinner" className="optionVal">Dinner</option>
                            <option value="vip" className="optionVal">VIP/Mezzanine</option>
                            <option value="occassion" className="optionVal">Birthday/Anniversary</option>
                            <option value="private" className="optionVal">Private</option>
                            <option value="wedding" className="optionVal">Wedding</option>
                            <option value="nightlife" className="optionVal">Nightlife</option>
                            <option value="others" className="optionVal">Others</option>
                        </select>

                        <label htmlFor="ifOthersSpecify" className="label">If others reservation type above, please
                            specify<span className="asterisk"> * </span></label>
                        <input className="inputs" type="text" id="ifOthersSpecify" name="ifOthersSpecify" required/>

                        <label htmlFor="specialRequest" className="label">Any special requests</label>
                        <textarea className="inputs" id="specialRequest" name="specialRequest" rows={4} cols={50}/>
                    </div>
                </section>
                <button className="button">Submit</button>
            </form>
        </div>
    );
};

export default Form;