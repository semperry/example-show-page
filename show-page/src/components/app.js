import React, { Component } from "react";
import { Link } from "react-router-dom";
import { mockData } from "./mockData";

export default class App extends Component {
  renderProducts = () => {
    return mockData.map(item => {
      return (
        
        <div key={item.id} className="product-card">
          <Link to={{
          pathname: `/show-page/${item.id}`
        }}>
          <div>
            <img src={item.image} alt="Product" />
          </div>
          <div>{item.title}</div>
          <div>${Number(item.price).toFixed(2)}</div>
          </Link>
        </div>
      );
    });
  };

  render() {
    return <div className="app">{this.renderProducts()}</div>;
  }
}
