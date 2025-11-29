
import "../styles/all.css"

import f1 from "../img/features/f1.png"
import f2 from "../img/features/f2.png"
import f3 from "../img/features/f3.png"
import f4 from "../img/features/f4.png"
import f5 from "../img/features/f5.png"
import f6 from "../img/features/f6.png"
import Card from '../props/cards';

function Cards(){
    return(
        <>
        <div className="row">
            <div className="col-md-4">
                <Card img={f1} text={"Free Shoping"}/>

            </div>
              <div className="col-md-4">
                <Card img={f2} text={"Online Order"}/>

            </div>
              <div className="col-md-4">
                <Card img={f3} text={"Save Money"}/>

            </div>
              <div className="col-md-4">
                <Card img={f4} text={"Fromotions"}/>

            </div>
              <div className="col-md-4">
                <Card img={f5} text={"Happy Sell"}/>

            </div>
              <div className="col-md-4">
                <Card img={f6} text={"F24/7 Supports"}/>

            </div>
        </div>
        </>
    )
}
export default Cards