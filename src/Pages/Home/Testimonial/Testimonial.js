import React from 'react';
import quote from '../../../assets/icons/quote.svg';

const Testimonial = () => {
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Say</h2>
                </div>
            </div>
            <div>
                <img className='w-24 lg:w-48 ' src={quote} alt="" srcset="" />
            </div>
        </section>
    );
};

export default Testimonial;