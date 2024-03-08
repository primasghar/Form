import './Form.css';

const Form = () => {
    return (
        <div className="card">
            <h2 className="mainHeading">Reserve Table</h2>
            <form className="formContainer">
                <label htmlFor="firstname" className="label">First Name</label>
                <input type="text" id="firstname"/>

                <label htmlFor="lastname" className="label">Last Name</label>
                <input type="text" id="lastname"/>

                <label htmlFor="email" className="label">Email</label>
                <input type="text" id="email"/>

                <label htmlFor="phone" className="label">Phone</label>
                <input type="text" id="phone"/>

                <label htmlFor="totalGuests" className="label">Number of Guests</label>
                <input type="text" id="totalGuests"/>

                <h3 className="subHeading">Reservation </h3>
                <div className="dateTime">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="date" max="2024-12-31"/>

                    <label htmlFor="time">Time</label>
                    <select className="optionVal" name="time" id="time">
                        <option value="">--Please choose the time--</option>
                        <option value="13:00">1:00 AM</option>
                        <option value="15:00">15:00</option>
                        <option value="19:00">19:00</option>
                        <option value="21:00">21:00</option>
                        <option value="23:00">23:00</option>
                    </select>
                </div>


                <button className="button">Submit</button>
            </form>
        </div>
    );
};

export default Form;