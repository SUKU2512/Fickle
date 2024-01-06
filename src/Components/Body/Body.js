import React from "react";
import Sbody from "../Body/Body.module.css";
export default function Body() {

function roundway(){
  document.getElementById("return").disabled=false;
}
  return (
    <div className={Sbody.maindiv}>
      <div className={Sbody.title}>
        <h1 style={{ textAlign: "center" }}>
          Let's Explore & travel the world
        </h1>
        <h6 style={{ textAlign: "center" }}>
          Find the best destinations and the most popular stays!
        </h6>
        <div className={Sbody.box}>
          <div className={Sbody.topview}>
          <h6 style={{marginLeft:18}}>SEARCH FLIGHTS</h6>
          <div className={Sbody.radioflex}>
            <input type="radio" name="one" defaultChecked="true"/><span style={{marginTop:5}} >One Way</span>
            <input type="radio" name="one" onClick={()=>roundway()}/><span style={{marginTop:5}} >Round Trip</span>
          </div>
          </div>
          <div className={Sbody.inputbox}>
            <input type="text" placeholder="From"/>
            <input type="text" placeholder="To"/>
            <input type="date" style={{paddingRight:50}}/>
            <input type="date" style={{paddingRight:50}} id="return" disabled/>
            <button className={Sbody.searchbtn}>SEARCH FLIGHT</button>
          </div>
        </div>
      </div>
    </div>
  );
}