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
            <PageHeader title={'Perfect Technology Packages for you'} curPage={'Technology Packages'} />
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
                                        <div className="price-value"> ৳ 50,000 <span className="month">/On time</span> </div>
                                    </div>
                                    <h3 className="heading">ULTIMATE</h3>
                                    <div className="pricing-content">
                                        <ul>
                                            <li><b>.com/.net/.org domain </b> Free</li>
                                            <li><b>3000 MB Hosting</b> Free</li>
                                            <li><b>60 GB</b> Bandwidth Free</li>
                                            <li><b>Number of Page : </b> Unlimited</li>
                                            <li><b>Number of Emails :</b> Unlimited</li>
                                            <li><b>Homepage  </b> Dynamic</li>
                                            <li><b>Featured News </b> Slider</li>
                                            <li><b>Lead News </b> & Featured News</li>
                                            <li><b>Breaking News</b> Scroller</li>
                                            <li><b>News </b>with Video</li>
                                            <li><b>Archive </b> News </li>
                                            <li><b>Auto </b> Social Sharing</li>
                                            <li><b>Yes</b>  Graphic Design</li>
                                            <li><b>20 Sites SEO</b> SEO</li>
                                            <li><b>Simple Android </b> App</li>
                                            <li><b>Development Time:</b> 30 working days</li>
                                            <li><b>Renew Fee (Yearly) :</b> 5500 Taka</li>
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
                                        <div className="price-value"> ৳15,500 <span className="month">/On time</span> </div>
                                    </div>
                                    <h3 className="heading">PROFESSIONAL</h3>
                                    <div className="pricing-content">
                                        <ul>
                                            <li><b>.com/.net/.org domain </b> Free</li>
                                            <li><b>3000 MB Hosting</b> Free</li>
                                            <li><b>60 GB</b> Bandwidth Free</li>
                                            <li><b>Number of Page : </b> 30</li>
                                            <li><b>Number of Emails :</b> 30</li>
                                            <li><b>Homepage  </b> Dynamic</li>
                                            <li><b>Featured News </b> Slider</li>
                                            <li><b>Lead News </b> & Featured News</li>
                                            <li><b>Breaking News</b> Scroller</li>
                                            <li><b>News </b>with Video</li>
                                            <li><b>Archive </b> News </li>
                                            <li><b>Auto </b> Social Sharing</li>
                                            <li><b>Yes</b>  Graphic Design</li>
                                            <li><b>10 Pages</b> SEO</li>
                                            <li><b>No Android </b> App</li>
                                            <li><b>Development Time:</b> 50 working days</li>
                                            <li><b>Renew Fee (Yearly) :</b> 3500 Taka</li>
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
                                        <div className="price-value"> ৳10,500 <span className="month">/On time</span> </div>
                                    </div>
                                    <h3 className="heading">STANDARD</h3>
                                    <div className="pricing-content">
                                        <ul>
                                            <li><b>.com/.net/.org domain </b> Free</li>
                                            <li><b>1000 MB Hosting</b> Free</li>
                                            <li><b>20 GB</b> Bandwidth Free</li>
                                            <li><b>Number of Page : </b> 30</li>
                                            <li><b>Number of Emails :</b> 30</li>
                                            <li><b>Homepage  </b> Dynamic</li>
                                            <li><b>Featured News </b> Slider</li>
                                            <li><b>Lead News </b> & Featured News</li>
                                            <li><b>Breaking News</b> Scroller</li>
                                            <li><b>News </b>with Video</li>
                                            <li><b>Archive </b> News </li>
                                            <li><b>Social Sharing </b> Buttons </li>
                                            <li><b>Yes</b>  Graphic Design</li>
                                            <li><b>No</b> SEO</li>
                                            <li><b>No Android </b> App</li>
                                            <li><b>Development Time:</b> 50 working days</li>
                                            <li><b>Renew Fee (Yearly) :</b> 2500 Taka</li>
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
                                        <div className="price-value"> ৳40,000 <span className="month">/On time</span> </div>
                                    </div>
                                    <h3 className="heading">ULTIMATE</h3>
                                    <div className="pricing-content">
                                        <ul>
                                           <li><b>.com/.net/.org domain </b> Free</li>
                                            <li><b>500 MB Hosting</b> Free</li>
                                            <li><b>10 GB</b> Bandwidth Free</li>
                                            <li><b>Number of Page : </b> 10</li>
                                            <li><b>Number of Emails :</b> 10</li>
                                            <li><b>Homepage  </b> Dynamic</li>
                                            <li><b>Featured News </b> Slider</li>
                                            <li><b>Lead News </b> & Featured News</li>
                                            <li><b>Breaking News</b> Scroller</li>
                                            <li><b>News </b>with Video</li>
                                            <li><b>Archive </b> News </li>
                                            <li><b>Social Sharing </b> Buttons </li>
                                            <li><b>No</b>  Graphic Design</li>
                                            <li><b>No</b> SEO</li>
                                            <li><b>No Android </b> App</li>
                                            <li><b>Development Time:</b> 50 working days</li>
                                            <li><b>Renew Fee (Yearly) :</b> 2000 Taka</li>
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