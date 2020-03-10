import React from "react";
import {connect} from "react-redux";
import CountDownTimer from "../../views/count-down-timer";

class SubHeader extends React.Component {
  
  dateformatter = (input) => {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

   var date =  new Date(input);
   var n = month[date.getMonth()];
   return n + " " +  date.getDate() + ", " + date.getUTCHours() + ":" + ("0" + date.getUTCMinutes()).slice(-2);
  }

  render() {
    const {rocket} = this.props;
    return (
      <>
        <div className="col-xs-12 bg-color bg-color-tr">
          <div className="col-xs-1">
            <img width="100%" src={require("../../assets/media/live.png")} />
          </div>
          <div className="col-xs-3 time-big">
            <h1 id="demo">
              {" "}
              {!!rocket.length && <CountDownTimer date={rocket[0].sort_date} type={"header"}/>}{" "}
            </h1>
            <p>
              {" "}
              <span> Hours </span> <span> Minutes </span> <span> Seconds </span>{" "}
            </p>
          </div>

          <div className="col-xs-8 time text-right">
            <div className="it-text">
              <p style={{marginBottom: "10px"}}>
                {" "}
    {!!rocket.length && this.dateformatter(rocket[0].weather_updated)} &nbsp;{" "}
                <span className="update_btn"> updated </span>{" "}
              </p>
    <p>{!!rocket.length && rocket[0].launch_description}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({Rocket: {rocket}}) => ({rocket});
export default connect(mapStateToProps, null)(SubHeader);
