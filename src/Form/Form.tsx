import './Form.css';

const Form = () => {

    const date = new Date().toLocaleDateString();

    return (
        <div className="card">
            <h2 className="formHeading">Reservation Form </h2>

            <form className="formContainer">
                <h3 className="subHeading">Personal details </h3>
                <section className="sectionOne">
                    <div className="fullName">
                    <label htmlFor="firstname" className="label" >First Name</label>
                    <input className="fInput" type="text" id="firstname"  name="fname"/>

                    <label htmlFor="lastname" className="label">Last Name</label>
                    <input className="lInput" type="text" id="lastname"  name="lname"/> </div>

                    <label htmlFor="email" className="label">Email</label>
                    <input className="inputs" type="text" id="email"  name="email"/>

                    <label htmlFor="phone" className="label">Phone</label>
                    <input className="inputs" type="number" id="phone" name="phone"/>
                </section>

                <section className="sectionTwo">
                    <h3 className="subHeading">Reservation details </h3>

                    <div className="dateTime">
                        <label htmlFor="date" className="label">Date</label>
                        <input className="dateInput" type="date" id="date" name="date" min={date} max="31/12/2024"/>

                        <label htmlFor="time" className="label">Time</label>
                        <select className="timeVal" id="time" name="time">
                            <option value="13:00" className="timeVal">13:00</option>
                            <option value="15:00" className="timeVal">15:00</option>
                            <option value="19:00" className="timeVal">19:00</option>
                            <option value="21:00" className="timeVal">21:00</option>
                            <option value="23:00" className="timeVal">23:00</option>
                        </select></div>
                    <label htmlFor="totalGuests" className="label">Number of Guests</label>
                    <input className="inputs" type="text" id="totalGuests" name="totalguests"/>

                    <div className="aboutReservation">
                        <label htmlFor="type" className="label">Reservation type</label>
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

                        <label htmlFor="ifOthers" className="label">If others reservation type above, please specify</label>
                        <input className="inputs" type="text" id="ifOthers" name="otherSpecify"/>

                        <label htmlFor="specialRequest" className="label">Any special requests</label>
                        <textarea className="inputs" id="specialRequest" name="otherSpecify" rows= {4} cols={50}/>
                    </div>
                </section>
                <button className="button">Submit</button>
            </form>
        </div>
    );
};

export default Form;