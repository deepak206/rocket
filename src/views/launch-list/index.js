import React from "react";
import {connect} from "react-redux";
import {fetchRocket} from "../../actions/rockets-action-type";
import Icon from "../icons";
import CountDownTimer from "../count-down-timer";

class LaunchList extends React.Component {
  componentDidMount() {
    this.props.fetchRocket();
    setInterval(() => this.props.fetchRocket(), 50000);
  }

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

  tryRequire = path => {
    try {
      return require("../../assets/media/flag/" +
        path.replace(" ", "_").toLowerCase() +
        ".gif");
    } catch (err) {
      return null;
    }
  };

  // tryRequireSatellite = path => {
  //   try {
  //     return require("../../../images/satellites/" +
  //       path.replace(" ", "_") +
  //       ".jpg");
  //   } catch (err) {
  //     return require("../../assets/media/1.png");
  //   }
  // };

  render() {
    const {rocket, isLoading} = this.props;

    return (
      <>
        {!!rocket.length &&
          rocket.slice(1,10).map((detail, key) => (
            <div key={key} className="col-xs-12 bg-color bg-icon">
              <div className="col-xs-1">
                {/* <img
                  width="100%"
                  src={this.tryRequireSatellite(
                    detail.provider.name + "_" + detail.vehicle.name
                  )}
                /> */}
                <img
                  width="100%"
                  src={this.tryRequire(detail.pad.location.country)}
                />
                {/* <video width="100" loop Autoplay="autoplay">
                  <source src={this.tryRequire(detail.pad.location.country)} type="video/ogg"/>
                  </video> */}
              </div>
              <div className="col-xs-2 time PD-top time-font">
              <CountDownTimer date={detail.sort_date} type={"list"}/>
                {/* {this.timeDifference(detail.sort_date)} */}
              </div>

              <div className="col-xs-3 time PD-top date-font list-PD-top">
                <div className="list-wether-svg-image"><Icon type={detail.weather_icon} /></div>
                <div><span className={isLoading ? "mius-mr loading-start" : "mius-mr"}>
                  {" "}{detail.date_str}
                  <small>
                    {" "}
                    {this.convertTimestamptoTime(detail.sort_date)}{" "}
                  </small>
                </span></div>
              </div>
              <div className="col-xs-4 time">
                {detail.provider.name.toUpperCase()}{" "}
                <strong> {detail.vehicle.name.toUpperCase()} </strong>
                <p>
                  {" "}
                  {/* <img
                    onError={this.handleError}
                    width="20"
                    src={this.tryRequire(detail.pad.location.country)}
                  />{" "} */}
                  {detail.pad.name +
                    " " +
                    detail.pad.location.name +
                    ", " +
                    (detail.pad.location.state ||
                      detail.pad.location.country)}{" "}
                </p>
              </div>
              <div className="col-xs-2 time tags-info">
                <strong> {detail.name.toUpperCase()} </strong>
                <p> {!!detail.tags.length && detail.tags[0].text} </p>
              </div>
            </div>
          ))}
      </>
    );
  }
}

const mapStateToProps = ({Rocket: {rocket, isLoading}}) => ({rocket, isLoading});
export default connect(mapStateToProps, {fetchRocket})(LaunchList);
