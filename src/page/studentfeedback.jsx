import { Component, Fragment, useEffect, useState } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import GoogleMap from "../component/sidebar/googlemap";
import { API } from "../config";


const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle = "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const ContactPage = () => {

    const [students, setStudents] = useState([]);
    useEffect(()=>{
        fetch(`${API}/sstory`)
        .then(res=>res.json())
        .then(data=>setStudents(data))
    },[]) 

    return ( 
        <Fragment>
            <Header />
            <PageHeader title={'Student Feedback'} curPage={'Help Us'} />
            <div className="contact-section padding-tb">
            <div class="album py-5 bg-light">
                    <div class="container">
                    <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 g-3">
                       {
                         students.map((st, i)=>(
                            <div class="col">
                            <div class="card shadow-sm">
                            <img src={`${API}/sstroy/thumbnail/${st._id}`} width="100%" className="bd-placeholder-img card-img-top" height={225}/>
                                {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                                <div class="card-body">
                                <p class="card-text"><span style={{fontWeight:"bold", fontSize:"22px"}}>{st.sname}</span></p>
                                <p class="card-text">{st.companyname}, <span style={{color:"orange"}}>{st.sdesignation}</span></p>
                                </div>
                            </div>
                            </div>
                         )) 
                       }
                      
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}



export default ContactPage;