import React, { Component } from "react";
import Box from "./Box";
import "./BoxContainer.css";

export default class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 24,
    allColors: [
      "00b8a9",
      "f8f3d4",
      "f6416c",
      "ffde7d",
      "f688bb",
      "e8f9e9",
      "baf1a1",
      "5f6caf",
      "edf7fa",
      "ffb677",
      "f65c78",
      "ffd271",
      "413c69",
      "0f4c81",
      "142850",
      "fd367e",
      "182952"
    ]
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box colors={this.props.allColors} />
    ));
    return <div className="BoxContainer">{boxes}</div>;
  }
}
