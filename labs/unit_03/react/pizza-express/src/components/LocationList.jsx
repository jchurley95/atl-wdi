import React, { Component } from 'react';
import locationData from '../locationData';
import Location from './Location';

class LocationList extends Component {
    render() {
        return (
            <div>
                <div className="locations-title">Locations:</div>
                <div className="locations">
                    <a name="Locations"></a>
                    {locationData.map((locationData, i) => {
                        return <Location key={i} locationData={locationData}/>
                    })}
                </div>
            </div>
        );
    }
}

export default LocationList;