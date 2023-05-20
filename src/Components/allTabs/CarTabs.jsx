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
      console.log(useData.spider1)
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

                  <TabPanel>
                    {
                      useData.spider1.map(dk=>
                      <div className="card w-96 glass">
                      <figure><img src="" alt="car!"/></figure>
                      <div className="card-body">
                        <h2 className="card-title">{dk.name}</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary">Learn now!</button>
                        </div>
                      </div>
                    </div>)
                    }
                              
                  </TabPanel>

                  <TabPanel>
                  <h2>Subcategories of Category 2</h2>
                  {/* Add subcategory content for Category 2 */}
                  </TabPanel>

                  <TabPanel>
                  <h2>Subcategories of Category 3</h2>
                  {/* Add subcategory content for Category 3 */}
                  </TabPanel>
              </Tabs>
            </Tabs>
        </div>
    );
};

export default CarTabs;