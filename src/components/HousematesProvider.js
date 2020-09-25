import React, { Component, createContext } from "react";
import ArrayHousemates from "./ArrayHousemates";

const HouseMatesContext = createContext();

class HousematesProvider extends Component {
  state = {
    houseMate: ArrayHousemates
  };

  render() {
    return (
      <HouseMatesContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </HouseMatesContext.Provider>
    );
  }
}

export { HouseMatesContext, HousematesProvider };
