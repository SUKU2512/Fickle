import React from 'react'
import Ssub from './Subscribe.module.css';
export default function () {
  return (
    <div className={Ssub.maindiv}>
        <h6 style={{color:"blue"}}>SUBSCRIBE TO OUR NEWSLETTER</h6>
        <h4>Get Weekly updates</h4>
        <div className={Ssub.box}>
            <p style={{marginLeft:20}}>Fill in your details to join the party!</p>
            <div>
            <input style={{paddingRight:80}} type='text' placeholder='Your name'/>
            </div>
            <div>
            <input style={{paddingRight:80}} type='text' placeholder='Email address'/>
            </div>
            <button style={{marginLeft:20,backgroundColor:"orange",border:"1px solid black",borderRadius:5,color:"white",paddingRight:30,paddingLeft:30,paddingTop:5,paddingBottom:5}}>SUBMIT</button>
        </div>
    </div>
  )
}
