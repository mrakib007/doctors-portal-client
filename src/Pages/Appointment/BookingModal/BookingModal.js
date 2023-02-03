import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate,setTreatment }) => {
  const { name, slots } = treatment; //treatment is appointment options just different name here.
  const date = format(selectedDate, "PP");

  const handleBooking = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    
    const booking = {
      appointmentDate: date,
      treatment: name,
      // name: name,
      patient: name,
      slot,
      email,
      phone,
    }
    //send data to the server
    //and when data is saved then close the modal
    //then display toast

  console.log(booking);
  setTreatment(null);
  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-10" action="">
            <input
              type="text"
              value={date}
              disabled
              className="input w-full  input-bordered"
            />
            <select name="slot" className="select select-bordered w-full">
              
              {
                slots.map((slot,i)=> <option 
                value={slot}>
                 {slot}
                 key={i}
                </option>)
              }
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <input
              type="submit"
              className="btn btn-accent w-full "
              value="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
