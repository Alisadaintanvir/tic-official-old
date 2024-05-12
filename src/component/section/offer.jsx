
import { Link } from "react-router-dom";
import CountDown from "../sidebar/countdown";

const title = "Excel Training & Certification";
const desc = "It’s Perfect Time to Learn Spanish Language";
const btnText = "Register Now";
const discount = "90%";



const Offer = () => {
    return (
        <div className="offer-section padding-tb" style={{marginTop: "100px"}}>
            <div className="container">
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="section-header" style={{padding:"20px"}}>
                            <h2 className="title" style={{fontSize: "40px", color: "#000"}}>Excel Training<br/> <span style={{textAlign:"center"}}>&</span>  <br/>Certification</h2>
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="section-wrapper">
                            <div className="offer-area">
                                <h3 className="title"><span>{discount}</span> <b>Discount.</b> Let’s Start!</h3>
                                <CountDown />
                                <Link to="/addmission" className="lab-btn"><span>{btnText}</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Offer;