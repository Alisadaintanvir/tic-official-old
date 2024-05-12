import { useEffect } from "react";
import { Component, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import serviceaApi from "../api/serviceaApi";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Pagination from "../component/sidebar/pagination";
import PopularPost from "../component/sidebar/popular-post";
import Rating from "../component/sidebar/rating";
import Search from "../component/sidebar/search";
import ShopCategory from "../component/sidebar/shop-category";
import Tags from "../component/sidebar/tags";
import { API } from "../config";


const showResult = "Showing 01 - 12 of 139 Results";
const pageHeader = "Perfect Health/Clinic/Hospital/Doctor Web Site Packages for you"
const subpageHeder = "Perfect Health/Clinic/Hospital/Doctor Web Site Packages for you"

let ProductList = [
    {
        imgUrl: 'assets/images/shop/yost-1.jpg',
        imgAlt: 'Product Thumb',
        title: 'WordPress SEO Premium',
        price: '$49.00',
        orginalprice:'$89.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    },
    {
        imgUrl: 'assets/images/shop/wp-rocket.jpg',
        imgAlt: 'Product Thumb',
        title: 'WP Rocket by WP Media',
        price: '$4.00',
        orginalprice:'$199.00',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
    }
    
]


const ShopPage = () => {
    const [GridList, setGridList] = useState(true);
    const [services, setService] = useState([]);
    const {getService} = serviceaApi();
    const {serviceCategory} = serviceaApi();
    const {serviceCat, setServiceCat} = useState([])
    

    useEffect(()=>{
        getService().then(data=>setService(data))
    },[])

    useEffect(()=>{
        serviceCategory().then(data=>setServiceCat(data))
    },[])
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Perfect School/Collage Web Site Packages for you'} curPage={'Shop'} />
                <div className="shop-page padding-tb">
                <div class="pricing-area">
                            <div class="container">
                                <div class="row">
                                <div className="title text-center mb-5" style={{fontSize: "35px"}}>
                                    <h2>{pageHeader}</h2>
                                    <p>{subpageHeder}</p>
                                </div>
                                <div class="col-md-3 col-sm-6 col-xs-12">
                                    <div class="single-price">
                                    <div class="deal-top">
                                        <h3>ULTIMATE</h3>
                                        <h4><span class="">৳</span>40,000  </h4> 
                                        <p>/On time</p>
                                    </div>
                                    <div class="deal-bottom">
                                        <ul class="deal-item">
                                                <li><b>.com/.net/.org domain </b> Free</li>
                                                <li><b>3000 MB Hosting</b> Free</li>
                                                <li><b>60 GB</b> Bandwidth Free</li>
                                                <li><b>Page & Emails:</b> Unlimited</li>
                                                <li><b>Homepage </b> Dynamic</li>
                                                <li><b>Featured </b> Slider & Photo Gallery</li>
                                                <li><b>Online </b> Contact & Feedback Form</li>
                                                <li><b>Mobile Friendly /</b> Responsive</li>
                                                <li><b>Notice</b> Board/manage</li>
                                                <li><b>Complaint </b> box, Site Map, Hit Counter</li>
                                                <li><b>News </b> with Video</li>
                                                <li><b>Social</b>Sharing Buttons </li>
                                                <li><b>Related/important </b>websites links</li>
                                                <li><b>Breaking News</b> Scroller</li>
                                                <li><b>Clients</b> Profile</li>
                                                <li><b>Clients</b>Login</li>
                                                <li><b>Clients</b> data management</li>
                                                <li><b>Graphics</b> Design</li>
                                                <li><b>SEO & Backups & Security</b></li>
                                                <li><b>Hospital</b>management Software</li>
                                                <li><b>Full</b>Support & Many Other Benefits </li>
                                                <li><b>Management </b>Training</li>
                                                <li><b>Development Time:</b>  20 working days</li>
                                                <li><b>Renew Fee (Yearly) : </b> 8500 Taka</li>
                                            
                                        </ul>
                                        <div class="btn-area">
                                        <a href="#">ORDER NOW</a>       
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6 col-xs-12">
                                    <div class="single-price">
                                    <div class="deal-top">
                                        <h3>PROFESSIONAL</h3>
                                        <h4><span class="sup">$</span>  14,500 </h4>
                                        <p>/On time</p>
                                    </div>
                                    <div class="deal-bottom">
                                        <ul class="deal-item">
                                                 <li><b>.com/.net/.org domain </b> Free</li>
                                                <li><b>2000 MB Hosting</b> Free</li>
                                                <li><b>40 GB</b> Bandwidth Free</li>
                                                <li><b>Page & Emails:</b> Unlimited</li>
                                                <li><b>Homepage </b> Dynamic</li>
                                                <li><b>Featured </b> Slider & Photo Gallery</li>
                                                <li><b>Online </b> Contact & Feedback Form</li>
                                                <li><b>Mobile Friendly /</b> Responsive</li>
                                                <li><b>Notice</b> Board/manage</li>
                                                <li><b>Complaint </b> box, Site Map, Hit Counter</li>
                                                <li><b>News </b> with Video</li>
                                                <li><b>Social</b>Sharing Buttons </li>
                                                <li><b>Related/important </b>websites links</li>
                                                <li><b>Breaking News</b> Scroller</li>
                                                <li><b>Clients</b> Profile</li>
                                                <li><b>Clients</b>Login</li>
                                                <li><b>Clients</b> data management</li>
                                                <li><b>Graphics</b> Design</li>
                                                <li><b>SEO & Backups & Security</b></li>
                                                <li><b>No Hospital</b>management Software</li>
                                                <li><b>Online</b>Support & Many Other Benefits </li>
                                                <li><b>Management </b>Training</li>
                                                <li><b>Development Time:</b>  15 working days</li>
                                                <li><b>Renew Fee (Yearly) : </b> 3700 Taka</li>
                                        </ul>
                                        <div class="btn-area">
                                        <a href="#">ORDER NOW</a>       
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6 col-xs-12">
                                    <div class="single-price">
                                    <div class="deal-top">
                                        <h3>STANDARD</h3>
                                        <h4><span class="sup">৳</span>  11,500 </h4>
                                        <p>/On time</p> 
                                    </div>
                                    <div class="deal-bottom">
                                        <ul class="deal-item">
                                                <li><b>.com/.net/.org domain </b> Free</li>
                                                <li><b>1000 MB Hosting</b> Free</li>
                                                <li><b>20 GB</b> Bandwidth Free</li>
                                                <li><b>Page & Emails:</b> 20</li>
                                                <li><b>Homepage </b> Dynamic</li>
                                                <li><b>Featured </b> Slider & Photo Gallery</li>
                                                <li><b>Online </b> Contact & Feedback Form</li>
                                                <li><b>Mobile Friendly /</b> Responsive</li>
                                                <li><b>Notice</b> Board/manage</li>
                                                <li><b>Complaint </b> box, Site Map, Hit Counter</li>
                                                <li><b>News </b> with Video</li>
                                                <li><b>Social</b>Sharing Buttons </li>
                                                <li><b>Related/important </b>websites links</li>
                                                <li><b>Breaking News</b> Scroller</li>
                                                <li><b>No Clients</b> Profile</li>
                                                <li><b>No Clients</b>Login</li>
                                                <li><b>No. Clients</b> data management</li>
                                                <li><b>Graphics</b> Design</li>
                                                <li><b>SEO & Backups</b></li>
                                                <li><b>No Hospital</b>management Software</li>
                                                <li><b>Online</b>Support</li>
                                                <li><b>Management </b>Training</li>
                                                <li><b>Development Time:</b>  10 working days</li>
                                                <li><b>Renew Fee (Yearly) : </b> 2700 Taka</li>
                                        </ul>
                                        <div class="btn-area">
                                        <a href="#">ORDER NOW</a>       
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-sm-6 col-xs-12">
                                    <div class="single-price">
                                    <div class="deal-top">
                                        <h3>ECONOMY</h3>
                                        <h4><span class="sup">৳</span> 8,500  </h4> 
                                        <p>/On time</p>
                                    </div>
                                    <div class="deal-bottom">
                                        <ul class="deal-item">
                                                <li><b>.com/.net/.org domain </b> Free</li>
                                                <li><b>500 MB Hosting</b> Free</li>
                                                <li><b>10 GB</b> Bandwidth Free</li>
                                                <li><b>Page & Emails:</b> 20</li>
                                                <li><b>Homepage </b> Dynamic</li>
                                                <li><b>Featured </b> Slider & Photo Gallery</li>
                                                <li><b>Online </b> Contact & Feedback Form</li>
                                                <li><b>Mobile Friendly /</b> Responsive</li>
                                                <li><b>Notice</b> Board/manage</li>
                                                <li><b>Complaint </b> box, Site Map, Hit Counter</li>
                                                <li><b>News </b> with Video</li>
                                                <li><b>Social</b>Sharing Buttons </li>
                                                <li><b>Related/important </b>websites links</li>
                                                <li><b>Breaking News</b> Scroller</li>
                                                <li><b>No Clients</b> Profile</li>
                                                <li><b>No Clients</b>Login</li>
                                                <li><b>No. Clients</b> data management</li>
                                                <li><b>No Graphics</b> Design</li>
                                                <li><b>SEO & Backups</b></li>
                                                <li><b>No Hospital</b>management Software</li>
                                                <li><b>Online</b>Support</li>
                                                <li><b>Management </b>Training</li>
                                                <li><b>Development Time:</b>  7 working days</li>
                                                <li><b>Renew Fee (Yearly) : </b> 2000 Taka</li>
                                        </ul>
                                        <div class="btn-area">
                                        <a href="#">ORDER NOW</a>       
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>       
                    </div>
                </div>
            <Footer />
        </Fragment>
    );
}
 
export default ShopPage;