import React, { useState } from "react";
function Form(props) {
  const { getWeather } = props;
  // for the input
  const [city, setCity] = useState("");
  const [country, setCoutry] = useState("");
  return (
    <React.Fragment>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">city</label>
          <input type="text" name="city" onChange={(e) => setCity(e.target.value)} className="form-control" id="inputEmail4" placeholder="city..." />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">country</label>
          <input type="text" name="country" className="form-control" id="inputPassword4" onChange={(e) => setCoutry(e.target.value)} placeholder="Coutry ..." />
        </div>
      </div>

      <button type="submit" className="w-100 btn btn-secondary" onClick={(e) => { e.preventDefault(); getWeather(city, country) }}>Show</button>
    </React.Fragment>
  );
}

export default Form;
