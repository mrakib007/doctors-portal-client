import React from "react";
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="mt-21" style={{
        background: `url(${appointment})`
        }} >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor} alt=""
            className="lg:w-1/2 -mt-32 hidden lg:block md:block rounded-lg shadow-2xl"
          />
          <div>
            <h4 className="text-lg text-primary">Appointment</h4>
            <h1 className="text-axl text-white font-bold">Make An Appointment Today</h1>
            <p className="py-6 text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut veniam magnam nobis iure saepe asperiores dolorum a libero dolore veritatis illum reiciendis et quam autem modi possimus quidem cumque, earum id deserunt hic fugiat non eos culpa! Inventore, perspiciatis in qui magnam nesciunt et, dolore assumenda atque sequi minima sed.
            </p>
           <PrimaryButton>Make Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
