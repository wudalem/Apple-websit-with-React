import React from 'react'
import "../../../commonResource/css/bootstrap.css"
import "../../../commonResource/css/styles.css"

function SectionTwo() {
  return (
    <section className="second-hightlight-wrapper">
    <div className="container">

        <div className="new-alert">
            New
        </div>

        <div className="title-wraper bold black">
            MacBook Air 
        </div> 

        <div className="description-wrapper black">
            Twice the speed. Twice the storage.
        </div>

        <div className="price-wrapper grey">
            From $999.
        </div>

        <div className="links-wrapper">
            <ul>
                <li><a href="" alt="">Learn more</a></li>
                <li><a href="" alt="">Buy</a></li>
            </ul> 
        </div>
    </div>
</section>
  )
}

export default SectionTwo