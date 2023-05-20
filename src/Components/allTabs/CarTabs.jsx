// import React from 'react';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const CarTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [useData,setData] = useState([]);
    useEffect(()=> {
      fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
      console.log(useData.spider)
    const handleTabSelect = (index) => {
        setActiveTab(index);
      };
    return (
        <div>
            <Tabs className="text-center bg-teal-400">
              <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
                  <TabList>
                  <Tab>Spider Man</Tab>
                  <Tab>Iron Man</Tab>
                  <Tab>Captain America</Tab>
                  </TabList>

                  <TabPanel className='grid grid-cols-2 mx-auto '>
                    {
                      useData.spider?.map(dk=>
 
                      <div className="card w-96 glass grid grid-cols-2 mx-auto my-10 bg-red-400">
                          <figure><img className='rounded' src={dk.picture} alt="car!"/></figure>
                          <div className="card-body">
                            <h2 className="card-title">{dk.name}</h2>
                            <h2>Price: {dk.price}$</h2>
                            <div className="rating">
                              <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                              <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                              <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                              <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                              <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>
                            <div className="card-actions justify-end">
                              <button className="btn btn-outline btn-success">View Details</button>
                            </div>
                          </div>
                        </div> )
                    }
                              
                  </TabPanel>

                  <TabPanel>
                      {
                        useData.ironman?.map(ik =>
                          <div className="card w-96 glass grid grid-cols-2 mx-auto my-10 bg-red-400">
                          <figure><img className='rounded' src={ik.picture} alt="car!"/></figure>
                          <div className="card-body">
                            <h2 className="card-title">{ik.name}</h2>
                            <h2>Price: {ik.price}$</h2>
                                <div className="rating">
                                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            <div className="card-actions justify-end">
                              <button className="btn btn-outline btn-success">View Details</button>
                            </div>
                          </div>
                        </div> )
                      }
                  </TabPanel>

                  <TabPanel>
                  {
                    useData.captain?.map(ck =>
                      <div className="card w-96 glass grid grid-cols-2 mx-auto my-10 bg-red-400">
                      <figure><img className='rounded' src={ck.picture} alt="car!"/></figure>
                      <div className="card-body">
                        <h2 className="card-title">{ck.name}</h2>
                        <h2>Price: {ck.price}$</h2>
                        <div className="rating">
                          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                          <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        </div>
                        <div className="card-actions justify-end">
                          <button className="btn btn-outline btn-success">View Details</button>
                        </div>
                      </div>
                    </div> )
                  }
                  </TabPanel>
              </Tabs>
            </Tabs>
        </div>
    );
};

export default CarTabs;