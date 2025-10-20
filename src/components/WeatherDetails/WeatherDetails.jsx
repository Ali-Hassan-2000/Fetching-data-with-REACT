const WeatherDetails = (props) => {
  
  return (
    <>
      <section className="weather-details">
        <h2>Weather Details</h2>
        
        {/* Location Information */}
        <div className="location-info">
          <h3>Location</h3>
          <p>{props.weather[0]}</p>
          <p>{props.weather[1]}</p>
          <p>{props.weather[2]}</p>
          <p>{props.weather[3]} {props.weather[3]  ? ',' : ''} {props.weather[4]}</p>
          <p>{props.weather[5]}</p>
        </div>

        {/* Temperature Information */}
        <div className="temperature-info">
          <h3>Temperature</h3>
          <p>{props.weather[6]}</p>
          <p>{props.weather[7]}</p>
          <p>{props.weather[15]}</p>
          <p>{props.weather[16]}</p>
        </div>

        {/* Weather Conditions */}
        <div className="conditions-info">
          <h3>Conditions</h3>
          <p>{props.weather[8]}</p>
          <p>{props.weather[13]}%</p>
          <p>{props.weather[14]}%</p>
        </div>

        {/* Wind Information */}
        <div className="wind-info">
          <h3>Wind</h3>
          <p>{props.weather[9]}</p>
          <p>{props.weather[10]}</p>
          <p>{props.weather[11]}°</p>
        </div>

        {/* Atmospheric Information */}
        <div className="atmosphere-info">
          <h3>Atmosphere</h3>
          <p>{props.weather[12]} mb</p>
        </div>

      </section>
    </>
  );
};

export default WeatherDetails;