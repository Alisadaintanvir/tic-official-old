import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import GoogleMap from "../component/sidebar/googlemap";


const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle = "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const ContactPage = () => {

    return ( 
        <Fragment>
            <Header />
            <PageHeader title={'Get In Touch With Us'} curPage={'Help Us'} />
            <div className="contact-section padding-tb">
                <div className="container">  
                    <div className="row">
                        <h2>STUDENT SUPPORT</h2>
                         <p>We are enthusiastic to help our student to make them successful by supporting them 24 hours. Our team is available to support you rapidly.</p>
                         <p>After getting our admission, you will be integrated to our special support team, secret groups, Skype, Team viewer & will be given access our own software to get Instant support.</p>
                         <p>We have two shift in charges for providing supports Day shift and Night shift and Trainers are also available for our learners in certain time.</p>
                         <a href = "mailto: support@ticlimited.com.bd">Email Us: support@ticlimited.com.bd</a>
                         <p>or<br/> Message send Live Chat Support</p>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}



export default ContactPage;