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
                <div className="demo">
                    <div className="container">
                        <div className="row">
                            <div className="title text-center mb-5" style={{fontSize: "35px"}}>
                                <h2>Perfect School/Collage Web Site Packages for you</h2>
                                <p>Web design, development and hosting of a trusted institution</p>
                            </div>
                            <div className="col-md-3 col-sm-6 ">
                                <div className="pricingTable ">
                                    <div className="pricingTable-header">
                                        <i className="fa fa-adjust"></i>
                                        <div className="price-value"> ৳13,500 <del className="" style={{color:"rgb(197 162 126)"}}>22500</del> <span className="month">/On time</span> </div>
                                    </div>
                                    <h3 className="heading">ECONOMY</h3>
                                    <div className="pricing-content">
                                        <ul>
                                            <li><b>.com/.net domain </b> Free</li>
                                            <li><b>500 MB Hosting</b> Free</li>
                                            <li><b>10 GB</b> Bandwidth Free</li>
                                            <li><b>Page & Emails : </b> 15</li>
                                            <li><b>Homepage :</b> Dynamic</li>
                                            <li><b>Featured</b> Slider & Photo Gallery</li>
                                            <li><b>Mobile Friendly / </b> Responsive</li>
                                            <li><b>Notice </b> Board/ manage</li>
                                            <li><b>Online </b> Admission Form & Download</li>
                                            <li><b>Complaint </b> box, Site Map, Hit Counter</li>
                                            <li><b>News</b>  with Video</li>
                                            <li><b>Social </b>Sharing Buttons</li>
                                            <li><b>Related/important </b> websites links</li>
                                            <li><b>No Breaking News</b>  Scroller</li>
                                            <li><b>No Teacher & Student’s</b> Design</li>
                                            <li><b>No Student</b> Login</li>
                                            <li><b>No Student </b> Data management</li>
                                            <li><b>No </b> Graphic Design</li>
                                            <li><b>No</b> SEO</li>
                                            <li><b>No Education</b> management Software</li>
                                            <li><b>Online </b> Support</li>
                                            <li><b>Management  </b> Training</li>
                                            <li><b>Development Time:</b> 7 working days</li>
                                            <li><b>Renew Fee (Yearly) :</b> 2000 Taka</li> 
                                        </ul>
                                    </div>
                                    <div className="pricingTable-signup">
                                        <a href="#">ORDER NOW</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6">
                                <div className="pricingTable green">
                                    <div className="pricingTable-header">
                                        <i className="fa fa-briefcase"></i>
                                        <div className="price-value"> ৳15,500 <del className="" style={{color:"rgb(197 162 126)"}}>31000</del> <span className="month">/On time</span> </div>
                                    </div>
                                    <h3 className="heading">STANDARD</h3>
                                    <div className="pricing-content">
                                        <ul>
                                            <li><b>.edu.bd domain  </b> Free</li>
                                            <li><b>1000 MB Hosting</b> Free</li>
                                            <li><b>20 GB</b> Bandwidth Free</li>
                                            <li><b>Page & Emails : </b> 20</li>
                                            <li><b>Homepage :</b> Dynamic</li>
                                            <li><b>Featured</b> Slider & Photo Gallery</li>
                                            <li><b>Mobile Friendly / </b> Responsive</li>
                                            <li><b>Notice </b> Board/ manage</li>
                                            <li><b>Online </b> Admission Form & Download</li>
                                            <li><b>Complaint </b> box, Site Map, Hit Counter</li>
                                            <li><b>News</b>  with Video</li>
                                            <li><b>Social </b>Sharing Buttons</li>
                                            <li><b>Related/important </b> websites links</li>
                                            <li><b>Breaking News</b>  Scroller</li>
                                            <li><b>Teacher & Student’s</b> Design</li>
                                            <li><b>No Student</b> Login</li>
                                            <li><b>No Student </b> Data management</li>
                                            <li><b>Graphic </b>  Design</li>
                                            <li><b>Onpage</b> SEO</li>
                                            <li><b>No Education</b> management Software</li>
                                            <li><b>Online </b> Support</li>
                                            <li><b>Management  </b> Training</li>
                                            <li><b>Development Time:</b> 10 working days</li>
                                            <li><b>Renew Fee (Yearly) :</b> 2700 Taka</li>
                                        </ul>
                                    </div>
                                    <div className="pricingTable-signup">
                                        <a href="#">ORDER NOW</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="pricingTable blue">
                                    <div className="pricingTable-header">
                                        <i className="fa fa-diamond"></i>
                                        <div className="price-value"> ৳22,500 <del className="" style={{color:"rgb(197 162 126)"}}>45000</del> <span className="month">/On time</span> </div>
                                    </div>
                                    <h3 className="heading">PROFESSIONAL</h3>
                                    <div className="pricing-content">
                                        <ul>
                                            <li><b>.edu.bd domain  </b> Free</li>
                                            <li><b>2048 MB Hosting</b> Free</li>
                                            <li><b>20 GB</b> Bandwidth Free</li>
                                            <li><b>Page & Emails : </b> Unlimited</li>
                                            <li><b>Homepage :</b> Dnamic (Fantastic looks)</li>
                                            <li><b>Featured</b> Slider & Photo Gallery</li>
                                            <li><b>Mobile Friendly / </b> Responsive</li>
                                            <li><b>Notice </b> Board/ manage</li>
                                            <li><b>Online </b> Admission Form & Download</li>
                                            <li><b>Complaint </b> box, Site Map, Hit Counter</li>
                                            <li><b>News</b>  with Video</li>
                                            <li><b>Social </b>Sharing Buttons</li>
                                            <li><b>Related/important </b> websites links</li>
                                            <li><b>Breaking News</b>  Scroller</li>
                                            <li><b>Teacher & Student’s</b> Profile</li>
                                            <li><b>Student</b> Login</li>
                                            <li><b>Student </b> Data management</li>
                                            <li><b>Graphic </b>  Design</li>
                                            <li><b>Onpage</b> SEO</li>
                                            <li><b>No Education</b> management Software</li>
                                            <li><b>Online </b> Support</li>
                                            <li><b>Management  </b> Training</li>
                                            <li><b>Development Time:</b> 10 working days</li>
                                            <li><b>Renew Fee (Yearly) :</b> 3700 Taka</li>
                                        </ul>
                                    </div>
                                    <div className="pricingTable-signup">
                                        <a href="#">ORDER NOW</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className="pricingTable red">
                                    <div className="pricingTable-header">
                                        <i className="fa fa-cube"></i>
                                        <div className="price-value"> ৳45,000<del className="" style={{color:"rgb(197 162 126)"}}>90000</del>  <span className="month">/On time</span> </div>
                                    </div>
                                    <h3 className="heading">ULTIMATE</h3>
                                    <div className="pricing-content">
                                        <ul>
                                            <li><b>.edu.bd domain  </b> Free</li>
                                            <li><b>3000 MB Hosting</b> Free</li>
                                            <li><b>60 GB</b> Bandwidth Free</li>
                                            <li><b>Page & Emails : </b> Unlimited</li>
                                            <li><b>Homepage :</b> Dnamic (Fantastic looks)</li>
                                            <li><b>Featured</b> Slider & Photo Gallery</li>
                                            <li><b>Mobile Friendly / </b> Responsive</li>
                                            <li><b>Notice </b> Board/ manage</li>
                                            <li><b>Online </b> Admission Form & Download</li>
                                            <li><b>Complaint </b> box, Site Map, Hit Counter</li>
                                            <li><b>News</b>  with Video</li>
                                            <li><b>Social </b>Sharing Buttons</li>
                                            <li><b>Related/important </b> websites links</li>
                                            <li><b>Breaking News</b>  Scroller</li>
                                            <li><b>Teacher & Student’s</b> Profile</li>
                                            <li><b>Student</b> Login</li>
                                            <li><b>Student </b> Data management</li>
                                            <li><b>Graphic </b>  Design</li>
                                            <li><b>SEO & Backup</b> & Security</li>
                                            <li><b>Education</b> management Software</li>
                                            <li><b>Full  </b> Support & Many Other Benefits</li>
                                            <li><b>Management  </b> Training</li>
                                            <li><b>Development Time:</b> 20 working days</li>
                                            <li><b>Renew Fee (Yearly) :</b> 8500 Taka</li>
                                        </ul>
                                    </div>
                                    <div className="pricingTable-signup">
                                        <a href="#">ORDER NOW</a>
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