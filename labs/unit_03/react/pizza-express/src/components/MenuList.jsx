import React, { Component } from 'react';
import MenuItem from './MenuItem';
import pizzaData from '../pizzaData';

class MenuList extends Component {
    render() {
        return (
            <div className="menu-container">
                <div className="menu">
                    <a name="Menu"></a>
                    <h1>Menu</h1>
                    {pizzaData.map((pizzaData, i) => {
                        return <MenuItem key={i} pizzaData={pizzaData}/>
                    })}
                </div>
            </div>
        );
    }
}

export default MenuList;