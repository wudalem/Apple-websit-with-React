import React from 'react'
import "../../../commonResource/css/bootstrap.css"
import "../../../commonResource/css/styles.css"
import arcade from "../../../commonResource/images/icons/arcade.png"

function SectionSix() {
  return (
    <section className="sixth-heghlight-wrapper">
    <div className="container-fluid">
        <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
                <div className="left-side-container">
                    <div className="top-logo-wrapper">
                        <div className="logo-wrapper">
                            <img src={arcade}/>
                        </div>
                    </div>
                    <div className="description-wraper white">
                        Agent 8 is a small hero on a big mission.
                    </div>
                    <div className="links-wrapper">
                        <ul>
                            <li><a href="" alt="">Play now<sup>2</sup></a></li>
                            <li><a href="" alt="">Learn about Apple Arcade</a></li>
                        </ul> 
                    </div>						
                </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
                <div className="right-side-container">
                    <div className="title-wraper">
                        Apple Card Monthly Installments 
                    </div> 
                    <div className="description-wraper">
                        Pay for your next iPhone over time, interest-free with Apple Card.
                    </div>
                    <div className="links-wrapper">
                        <ul>
                            <li><a href="" alt="">Learn more</a></li>
                            <li><a href="" alt="">Apply now</a></li>
                        </ul> 
                    </div>
                </div>
            </div>					
        </div>
    </div> 
</section>


  )
}

export default SectionSix