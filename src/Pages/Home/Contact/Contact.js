import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Contact = () => {
  return (
    <section
      style={{ background: `url(${appointment})`, backgroundSize: "cover" }}
      className="p-10"
    >
      <div className="w-full lg:w-1/2 mx-auto">
        <h5 className="text-center text-xl text-primary">Contact Us</h5>
        <h2 className="text-center text-3xl text-white">Stay Connected With Us</h2>
        <div className="form-control">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mt-3"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mt-3"
          />
          <textarea
            className="textarea textarea-bordered mt-3"
            placeholder="Bio"
          ></textarea>
          <div className="mx-auto mt-3">
        <PrimaryButton>Submit</PrimaryButton>
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
