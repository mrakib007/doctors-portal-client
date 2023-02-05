import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, selectedDate,setTreatment }) => {
  const { name, slots } = treatment; //treatment is appointment options just different name here.
  const date = format(selectedDate, "PP");
  const {user} = useContext(AuthContext);

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
  fetch('http://localhost:5000/bookings',{
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(booking)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    if(data.acknowledged){
      setTreatment(null);
      toast.success('Booking Confirmed');
    }
  })
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
                value={slot}
                key={i}>
                 {slot}
                </option>)
              }
            </select>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              readOnly disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              readOnly disabled
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
