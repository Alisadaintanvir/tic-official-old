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

const contactList = [
	{
		imgUrl: 'assets/images/icon/01.png',
		imgAlt: 'contact icon',
		title: 'Rajshahi Head Office',
		desc: 'AH.Tower (5th Floor), Alokar More, Ghoramara, Boalia, Rajshahi',
	},
	{
		imgUrl: 'assets/images/icon/01.png',
		imgAlt: 'contact icon',
		title: 'Kashorhat Branch',
		desc: 'Keshorhat Bypass Road, Mizan Complex 3rd Floor, keshorhat Pourosova, Mohonpur, Rajshahi',
	},
	{
		imgUrl: 'assets/images/icon/01.png',
		imgAlt: 'contact icon',
		title: 'Dhaka Branch',
		desc: 'House No. 47, Road No-15, Rupnagor, Mirpur-02, Dhaka-1216',
	},
	{
		imgUrl: 'assets/images/icon/02.png',
		imgAlt: 'contact icon',
		title: 'Phone number',
		desc: '+88 01722-952895, +88 01896156710',
	},
	{
		imgUrl: 'assets/images/icon/03.png',
		imgAlt: 'contact icon',
		title: 'Send email',
		desc: 'inof@ticlimited.com.bd',
	},
	{
		imgUrl: 'assets/images/icon/04.png',
		imgAlt: 'contact icon',
		title: 'Our website',
		desc: 'www.ticlimited.com.bd',
	},
]


const ContactPage = () => {

    return ( 
        <Fragment>
            <Header />
            <PageHeader title={'Get In Touch With Us'} curPage={'Help Us'} />
            <div className="contact-section padding-tb">
                <div className="container">  
                    <div className="section-wrapper">
                        <form className="contact-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Your Email *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="number"
                                    placeholder="Mobile Number *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Your Subject *"
                                />
                            </div>
                            <div className="form-group w-100">
                                <textarea 
                                    rows="8" 
                                    type="text"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <div className="form-group w-100 text-center">
                                <button className="lab-btn"><span>{btnText}</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}



export default ContactPage;