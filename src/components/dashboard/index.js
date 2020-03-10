import React from "react";
import Header from "../../views/header";
import SubHeader from "../../views/sub-header";
import LaunchList from "../../views/launch-list";

class Dashboard extends React.Component {
  
  render() {
    return (
      <div className="container">
        <div className="row">
            <Header />
            <SubHeader />
            <LaunchList  />
        </div>
      </div>
    );
  }
}

export default Dashboard;
