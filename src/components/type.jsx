import React, { Component } from "react";
class Type extends Component {
  render() {
    return (
      <div className="section">
        <div className="container">
          <div class="columns">
            <div class="column">Auto</div>
            <div
              class="column is-three-fifths"
              style={{ backgroundColor: "cyan" }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rh
            </div>
            <div class="column">Auto</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Type;
