import React from "react";

export default function Icon(props) {
  return (
    <>
      {props.type == "wi-day-rain-mix" && (
       <div class="weather cloud_sun_rain">
       <div class="size_6">
           <div class="sun_form">
               <div></div>
               <div>
                   <span></span>
               </div>
               <div>
                   <span></span>
               </div>
               <div>
                   <span></span>
               </div>
               <div>
                   <span></span>
               </div>
               <div>
                   <span></span>
               </div>
               <div>
                   <span></span>
               </div>
               <div>
                   <span></span>
               </div>
               <div>
                   <span></span>
               </div>
           </div>
       </div>
       <div class="cloud_form">
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
       </div>
       <div class="rain_form">
           <div></div>
       </div>
       <div class="rain_form">
           <div></div>
       </div>
       <div class="rain_form">
           <div></div>
       </div>
   </div>
      )}
      {props.type == "wi-day-sunny" && (
        <div class="weather sun">
          <div class="sun_form">
            <div></div>
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
          </div>
        </div>
      )}
      {props.type == "wi-day-snow" && (
        <div class="weather snow">
        <div class="cloud_form">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
        <div class="snow_form">
            <span></span>
        </div>
    </div>
      )}
      {props.type == "wi-day-rain" && (
        <div class="weather rain">
        <div class="cloud_form">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
    </div>
      )}
      {(props.type == "wi-day-cloudy" || props.type == "wi-cloudy" || props.type ==  "wi-night-alt-cloudy") && (
        <div class="weather cloud">
          <div>
            <div class="cloud_form">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="cloud_form">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {props.type == "wi-day-thunderstorm" && (
        <div class="weather storm">
        <div class="cloud_form">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div class="storm_form">
            <div></div>
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
        <div class="rain_form">
            <div></div>
        </div>
    </div>
      )}
    </>
  );
}
