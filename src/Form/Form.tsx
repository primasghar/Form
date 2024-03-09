import './Form.css';

const Form = () => {
    return (
        <div className="card">
            <h2 className="mainHeading">Reserve Table</h2>
            <form className="formContainer">
                <section className="sectionOne">
                <label htmlFor="firstname" className="label">First Name</label>
                <input type="text" id="firstname"/>

                <label htmlFor="lastname" className="label">Last Name</label>
                <input type="text" id="lastname"/>

                <label htmlFor="email" className="label">Email</label>
                <input type="text" id="email"/>

                <label htmlFor="phone" className="label">Phone</label>
                <input type="number" id="phone"/>

                <label htmlFor="totalGuests" className="label">Number of Guests</label>
                <input type="text" id="totalGuests"/>
                </section>

                <section className="sectionTwo">
                <h3 className="subHeading">Reservation </h3>
                <div className=" reserveDateTime">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" max="2024-12-31"/>

                    <label htmlFor="time">Time</label>
                    <select className="optionVal" name="time" id="time">
                        <option value="13:00" className="optionVal">13:00</option>
                        <option value="15:00" className="optionVal">15:00</option>
                        <option value="19:00" className="optionVal">19:00</option>
                        <option value="21:00" className="optionVal">21:00</option>
                        <option value="23:00" className="optionVal">23:00</option>
                    </select>
                </div>
                <div className="reserveType">
                    <label htmlFor="type">Reservation type</label>
                    <select className="optionVal" name="type" id="type">
                        <option value="lunch" className="optionVal">Lunch</option>
                        <option value="dinner" className="optionVal">Dinner</option>
                        <option value="vip" className="optionVal">VIP/Mezzanine</option>
                        <option value="occassion" className="optionVal">Birthday/Anniversary</option>
                        <option value="private" className="optionVal">Private</option>
                        <option value="wedding" className="optionVal">Wedding</option>
                        <option value="nightlife" className="optionVal">Nightlife</option>
                        <option value="others" className="optionVal">Others</option>
                    </select>
                  </div>
                    <div className="ifOthers">
                    <label htmlFor="ifOthers" >If others above, please specify</label>
                    <input type="text" id="ifOthers" name="otherSpecify"/>
                </div>

            </section>
                <button className="button">Submit</button>
            </form>
        </div>
    );
};

export default Form;