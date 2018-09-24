import React from "react";
import "./Card.css";
class Card extends React.PureComponent {
  render() {
    return <div className="paper">{this.props.children}</div>;
  }
}
export default Card;
