import React from "react";
import Icon from "../icons";
import {connect} from "react-redux";

class Header extends React.Component {
  convertTimestamptoTime = unixTimestamp => {
    var dateObj = new Date(unixTimestamp * 1000);
    var checkHours = dateObj.getUTCHours();
    var hours =
      dateObj.getUTCHours() > 12 ? checkHours - 12 : dateObj.getUTCHours();

    return (
      ("0" + hours).slice(-2) +
      ":" +
      ("0" + dateObj.getUTCMinutes()).slice(-2) +
      (dateObj.getUTCHours() > 12 ? " PM" : " AM")
    );
  };

  tryRequireSatellite = path => {
    try {
      return require("../../../images/satellites/" +
        path.replace(" ", "_") +
        ".jpg");
    } catch (err) {
      return require("../../assets/media/rocket.png");
    }
  };

  tryRequire = path => {
    try {
      return require("../../assets/media/flag/" +
        path.replace(" ", "_").toLowerCase() +
        ".gif");
    } catch (err) {
      return null;
    }
  };

  render() {
    const {rocket} = this.props;
    return (
      <>
        <div className="col-xs-12 bg-color bg-color-dark">
          <div className="col-xs-3 header-icon">
            {/* <img width="100%" src={require("../../assets/media/rocket.png")} /> */}

            {!!rocket.length && (
              <img
                width="100%"
                src={this.tryRequire(rocket[0].pad.location.country)}
              />
            )}

            {/* {!!rocket.length && (
              <img
                width="100%"
                src={this.tryRequireSatellite(
                  rocket[0].provider.name + "_" + rocket[0].vehicle.name
                )}
              />
            )} */}
          </div>
          <div className="col-xs-1 time PD-set">
            <Icon type={!!rocket.length && rocket[0].weather_icon} />
          </div>

          <div className="col-xs-2 time PD-set PD-top date-font">
            <div className="live-rocket">
              {" "}
              {!!rocket.length && (
                <>
                  <span>{rocket[0].date_str.split(" ")[1]}</span>{" "}
                  <strong> {rocket[0].date_str.split(" ")[0]} </strong>
                </>
              )}{" "}
            </div>
            <div className="live-time">
              {" "}
              {!!rocket.length &&
                this.convertTimestamptoTime(rocket[0].sort_date)}{" "}
            </div>
          </div>

          <div className="col-xs-4 PD-set time font-big">
            <div>
              {" "}
              <strong>
                {" "}
                {!!rocket.length && rocket[0].vehicle.name.toUpperCase()}{" "}
              </strong>{" "}
            </div>
            <div>
              {" "}
              {!!rocket.length && rocket[0].provider.name.toUpperCase()}{" "}
            </div>
            <p>
              {" "}
              {!!rocket.length &&
                rocket[0].pad.name +
                  " " +
                  rocket[0].pad.location.name +
                  ", " +
                  (rocket[0].pad.location.state ||
                    rocket[0].pad.location.country)}{" "}
            </p>
          </div>

          <div className="col-xs-2 PD-set time font-big">
            <strong>
              {" "}
              {!!rocket.length &&
                rocket[0].name.toUpperCase()}{" "}
            </strong>
            <p>
              {!!rocket.length &&
                !!rocket[0].tags.length &&
                rocket[0].tags[0].text}
            </p>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({Rocket: {rocket}}) => ({rocket});
export default connect(mapStateToProps, null)(Header);
