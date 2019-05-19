import React, { Component } from "react";
import { mockData } from "./mockData";

export default class ShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: []
    };
  }

  renderProduct = () => {
    return this.state.product.map(item => {
      return (
        <div key={item.id}>
          <div>
            <img src={item.image} alt="product"/>
          </div>
          <div>
            {item.title}
          </div>
          <div>
            {Number(item.price).toFixed(2)}
          </div>
        </div>
      )
    })
  };

  componentWillMount() {
    this.setState({
      product: mockData.filter(item => {
        return item.id === this.props.match.params.id;
      })
    });
  }

  render() {
    return <div className="show-page-wrapper">{this.renderProduct()}</div>;
  }
}
