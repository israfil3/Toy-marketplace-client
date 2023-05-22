import React from 'react';

import logo from './toy-inside.jpg'

const Section1 = () => {
    return (
       <div className="px-20 py-10 border">
        <h1 className='text-4xl text-center my-5 text-red-500'>Bangladesh toy worker</h1>
        <hr className='border-4 my-5 w-48 mx-auto border-green-500'/>
        <div className='flex border-[30px] border-green-100 rounded-lg'>
            
            <img className='w-[40%] rounded-r-[100px] border-4' src={logo} alt="" />
                <div className="mx-4">
                    <h1 className='text-2xl text-green-500'>The booming toy industry, which meets 80% of local demand, needs a dedicated zone as well as government's policy support to grow more and grab a good-share of the global market, according to local manufacturers.</h1> <br /><br />
                    <p> 

                    The booming toy industry, which meets 80% of local demand, needs a dedicated zone as well as government's policy support to grow more and grab a good-share of the global market, according to local manufacturers. <br /><br />

                   Market players say they will be able to expand their production capacity as   well as set up backward linkage plants including toy components and mould factories. <br />

                  "Currently moulds and different other toy components are being imported for which heavy duty   has to be paid," said Shamim Ahmed, president of Bangladesh Plastic Goods Manufacturers and Exporters Association (BPGMEA). <br /><br />

                 Depending on the product, manufacturers have to pay import duties of up to 52%. This increases the price of local toys manifold, he added.

                "The estimated toy market size in Bangladesh is around Tk7000 crore, and 80% of this is produced locally. Now manufacturers have eyes on the export market where Bangladesh is still an infant", said the BPGMEA president. t", said the BPGMEA president. </p>
                </div>
        </div>

       </div>
    );
};

export default Section1;