// import React from 'react';
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const CarTabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [useData,setData] = useState([]);
    useEffect(()=> {
      fetch('http://localhost:5000/superman')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
      console.log(useData[0]?.name)
    const handleTabSelect = (index) => {
        setActiveTab(index);
      };
    return (
        <div>
            <Tabs className="text-center">
              <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
                  <TabList>
                  <Tab>Spider Man</Tab>
                  <Tab>Iron Man</Tab>
                  <Tab>Captain America</Tab>
                  </TabList>

                  <TabPanel className="">
                  <div className="card w-[40%] bg-base-100 shadow-xl grid grid-cols-2 mx-auto my-10">
                      <figure className="px-10 pt-10">
                        <img src={useData[0]?.picture} alt="Shoes" className="rounded-xl" />
                      </figure>
                      <div className="card-body items-center text-center">
                      <h2 className="card-title">{useData[0]?.name}</h2>
                          <p>Price: {useData[0]?.price} $</p>
                          <p>Rating: {useData[0]?.rating}</p> 
                        <div className="card-actions">
                          <button className="btn btn-outline btn-warning">View Details </button>
                        </div>
                      </div>
                    </div>
                    <div className="card w-[40%] bg-base-100 shadow-xl grid grid-cols-2 mx-auto my-10">
                      <figure className="px-10 pt-10">
                        <img src={useData[1]?.picture} alt="Shoes" className="rounded-xl" />
                      </figure>
                      <div className="card-body items-center text-center">
                      <h2 className="card-title">{useData[1]?.name}</h2>
                          <p>Price: {useData[1]?.price} $</p>
                          <p>Rating: {useData[1]?.rating}</p> 
                        <div className="card-actions">
                          <button className="btn btn-outline btn-warning">View Details </button>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                              
                  <TabPanel>
                  <div className="card w-[40%] bg-base-100 shadow-xl grid grid-cols-2 mx-auto my-10">
                      <figure className="px-10 pt-10">
                        <img src={useData[2]?.picture} alt="Shoes" className="rounded-xl" />
                      </figure>
                      <div className="card-body items-center text-center">
                      <h2 className="card-title">{useData[2]?.name}</h2>
                          <p>Price: {useData[2]?.price} $</p>
                          <p>Rating: {useData[2]?.rating}</p> 
                        <div className="card-actions">
                          <button className="btn btn-outline btn-warning">View Details </button>
                        </div>
                      </div>
                    </div>
                    <div className="card w-[40%] bg-base-100 shadow-xl grid grid-cols-2 mx-auto my-10">
                      <figure className="px-10 pt-10">
                        <img src={useData[3]?.picture} alt="Shoes" className="rounded-xl" />
                      </figure>
                      <div className="card-body items-center text-center">
                      <h2 className="card-title">{useData[3]?.name}</h2>
                          <p>Price: {useData[3]?.price} $</p>
                          <p>Rating: {useData[3]?.rating}</p> 
                        <div className="card-actions">
                          <button className="btn btn-outline btn-warning">View Details </button>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                  <div className="card w-[40%] bg-base-100 shadow-xl grid grid-cols-2 mx-auto my-10">
                      <figure className="px-10 pt-10">
                        <img src={useData[4]?.picture} alt="Shoes" className="rounded-xl" />
                      </figure>
                      <div className="card-body items-center text-center">
                      <h2 className="card-title">{useData[4]?.name}</h2>
                          <p>Price: {useData[4]?.price} $</p>
                          <p>Rating: {useData[4]?.rating}</p> 
                        <div className="card-actions">
                          <button className="btn btn-outline btn-warning">View Details </button>
                        </div>
                      </div>
                    </div>
                    <div className="card w-[40%] bg-base-100 shadow-xl grid grid-cols-2 mx-auto my-10">
                      <figure className="px-10 pt-10">
                        <img src={useData[5]?.picture} alt="Shoes" className="rounded-xl" />
                      </figure>
                      <div className="card-body items-center text-center">
                      <h2 className="card-title">{useData[5]?.name}</h2>
                          <p>Price: {useData[5]?.price} $</p>
                          <p>Rating: {useData[5]?.rating}</p> 
                        <div className="card-actions">
                          <button className="btn btn-outline btn-warning">View Details </button>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
              </Tabs>
            </Tabs>
        </div>
    );
};

export default CarTabs;
 