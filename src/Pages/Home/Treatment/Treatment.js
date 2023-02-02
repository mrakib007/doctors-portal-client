import React from "react";
import treatment from '../../../assets/images/treatment.png';

const Treatment = () => {
  return (
    <div className="hero mb-12 mt-12">
  <div className="hero-content flex-col lg:flex-row">
    <img src={treatment} className="lg:w-1/3 md:w-3/4  rounded-lg shadow-2xl" />
    <div className="md:w-3/4">
      <h1 className="text-5xl font-bold">Get Your Desired Treatment</h1>
      <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repellat quae reiciendis nam? Voluptatum repellendus mollitia quo? Nemo recusandae saepe veniam consequatur soluta vitae iusto rerum eaque? At nemo necessitatibus labore. Velit exercitationem saepe quibusdam obcaecati, ab possimus dignissimos placeat?</p>
      <button className="btn btn-primary">Get Started</button>
    </div>.
  </div>
</div>

  );
};

export default Treatment;
