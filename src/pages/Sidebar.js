import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="side">
        <h2>Upcoming Recipes</h2>
        <h5>Litti Chokha</h5>
        <div className="fakeimg" style={{ height: 200 }}>
          Image
        </div>
        <p>This is famous street food of Patna in Bihar.</p>
        <h3>Global Street Food</h3>
        <p>Click image below to find recipes around the world</p>
        <div className="fakeimg" style={{ height: 60 }}>
          Image
        </div>
        <br />
        <div className="fakeimg" style={{ height: 60 }}>
          Image
        </div>
        <br />
        <div className="fakeimg" style={{ height: 60 }}>
          Image
        </div>
      </div>
    );
  }
}

export default Sidebar;
