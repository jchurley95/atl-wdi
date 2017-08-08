import React, { Component } from 'react';
import locationData from '../locationData';

class Location extends Component {
    render() {
        return (
            <div className="location">
                
                <h4> {this.props.locationData.name} </h4>
                <h4>Address:</h4>
                <h4> {this.props.locationData.address} </h4>
                <h4>Phone:</h4>
                <h4> {this.props.locationData.phone} </h4>
                
            </div>
        );
    }
}

export default Location;