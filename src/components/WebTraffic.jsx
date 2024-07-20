import React, {useState, useEffect} from 'react';
import CardFilter from './CardFilter';
import WebTrafficChart from "./WebTrafficChart";

function WebTraffic() {

    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    };

    
    return (
        <div className="card">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body pb-0">
                <h5 className="card-title">
                    Website Wraffic <span>| {filter}</span>
                </h5>
                <WebTrafficChart />
            </div>
        </div>
    )
}

export default WebTraffic;
