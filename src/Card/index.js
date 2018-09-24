import React from "react";
import "./Card.css";
class Card extends React.PureComponent {
  render() {
    return (
      <div className="paper">
        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}
export default Card;
