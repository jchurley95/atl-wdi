import React, { Component } from 'react';

class MenuItem extends Component {
    render() {
        return (
            <div className="menu-item">
                <img src={this.props.pizzaData.image} />
                <div className="fix-menu">
                    <div className="menu-item-name">{this.props.pizzaData.name}</div>
                    <div className="menu-price">${this.props.pizzaData.price}</div>
                    <div className="menu-description">{this.props.pizzaData.description}</div>
                </div>
            </div>
        );
    }
}

export default MenuItem;