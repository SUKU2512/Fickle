import React from "react";
import sheader from "../Header/Header.module.css";
import { BellSimple } from "@phosphor-icons/react";

export default function Header() {
  return (
    <div style={{display:"flex",justifyContent:"space-between",marginTop:20,marginLeft:10,marginRight:30}}>
      <div class="d-flex">
        <h2 className={sheader.title}>
          FickleFligh<span className={sheader.rotate}>t</span>
        </h2>
      </div>
      <div class="row" >
        <button class="col" style={{color:"skyblue"}}>Explore</button>
        <button class="col">Search</button>
        <button class="col">Hotels</button>
        <button class="col">Offers</button>
        <button class="col"><BellSimple size={22}/></button>
        <p class="col" style={{marginLeft:10,padding:20,cursor:"pointer",backgroundColor:"red",borderRadius:"50%"}}></p>
      </div>
    </div>
  );
}