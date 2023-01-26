import React from "react";

function ShowData(props) {
  //afficher le resultat envoyé par API
  return (
<div>   
     <div><h3 className="fw-bolder mt-5 d-flex justify-content-center"  > The given data</h3> <br /></div>
     <div className="mx-auto p-5 border border-dark rounded rounded-3 w-50">
     <div className="mx-auto d-flex justify-content-center"> <h4>Temperature :  {props.temp}</h4></div>
     <div className="mx-auto d-flex justify-content-center"> <h4>Humidity :    {props.humidity}</h4></div>
   </div>
    </div>
  );
}

export default ShowData;
