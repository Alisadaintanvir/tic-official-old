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
const pageHeader = "Perfect News Portal Website Packages for you"
const subpageHeder = "Web design, development and hosting of a trusted institution"

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
                                        <h3>ECONOMY</h3>
                                        <h4><span class="">৳</span> 8,500  </h4> 
                                    </div>
                                    <div class="deal-bottom">
                                        <ul class="deal-item">
                                                <li><b>.com/.net/.org domain </b> Free</li>
                                                <li><b>500 MB Hosting</b> Free</li>
                                                <li><b>10 GB</b> Bandwidth Free</li>
                                                <li><b>Number of Page :</b> 10</li>
                                                <li><b>Number of Emails :</b> 10</li>
                                                <li><b>Homepage </b> Dynamic</li>
                                                <li><b>Featured News</b> Slider</li>
                                                <li><b>Lead  </b> News & Featured News</li>
                                                <li><b>Breaking News </b> Scroller</li>
                                                <li><b>News  </b>  with Video</li>
                                                <li><b>Archive  </b> News</li>
                                                <li><b>Social Sharing  </b> Buttons</li>
                                                <li><b>No </b>Graphic Design </li>
                                                <li><b>No </b>SEO</li>
                                                <li><b>No Android</b>  App</li>
                                                <li><b>Development Time:</b>  7 working days</li>
                                                <li><b>Renew Fee (Yearly) : </b> 2000 Taka</li>
                                            
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
                                        <h3>Standard</h3>
                                        <h4> <span class="">৳</span> 10,500 </h4>
                                    </div>
                                    <div class="deal-bottom">
                                        <ul class="deal-item">
                                        <li><b>.com/.net/.org domain </b> Free</li>
                                                <li><b>1000 MB Hosting</b> Free</li>
                                                <li><b>20 GB</b> Bandwidth Free</li>
                                                <li><b>Number of Page :</b> 20</li>
                                                <li><b>Number of Emails :</b>20</li>
                                                <li><b>Homepage </b> Dynamic</li>
                                                <li><b>Featured News</b> Slider</li>
                                                <li><b>Lead  </b> News & Featured News</li>
                                                <li><b>Breaking News </b> Scroller</li>
                                                <li><b>News  </b>  with Video</li>
                                                <li><b>Archive  </b> News</li>
                                                <li><b>Social Sharing  </b> Buttons</li>
                                                <li><b>Yes </b>Graphic Design </li>
                                                <li><b>No </b>SEO</li>
                                                <li><b>No Android</b>  App</li>
                                                <li><b>Development Time:</b>  10 working days</li>
                                                <li><b>Renew Fee (Yearly) : </b> 2500 Taka</li>
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
                                        <h3>Professional</h3>
                                        <h4><span class="">৳</span> 15,500 </h4> 
                                    </div>
                                    <div class="deal-bottom">
                                        <ul class="deal-item">
                                        <li><b>.com/.net/.org domain </b> Free</li>
                                                <li><b>3000 MB Hosting</b> Free</li>
                                                <li><b>60 GB</b> Bandwidth Free</li>
                                                <li><b>Number of Page :</b> 30</li>
                                                <li><b>Number of Emails :</b>30</li>
                                                <li><b>Homepage </b> Dynamic</li>
                                                <li><b>Featured News</b> Slider</li>
                                                <li><b>Lead  </b> News & Featured News</li>
                                                <li><b>Breaking News </b> Scroller</li>
                                                <li><b>News  </b>  with Video</li>
                                                <li><b>Archive  </b> News</li>
                                                <li><b>Auto Sharing  </b> Buttons</li>
                                                <li><b>Yes </b>Graphic Design </li>
                                                <li><b>10 Pages </b>SEO</li>
                                                <li><b>No Android</b>  App</li>
                                                <li><b>Development Time:</b>  15 working days</li>
                                                <li><b>Renew Fee (Yearly) : </b> 3500 Taka</li>
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
                                        <h3>Professional</h3>
                                        <h4><span class="">৳</span>  50,000</h4> 
                                    </div>
                                    <div class="deal-bottom">
                                        <ul class="deal-item">
                                        <li><b>.com/.net/.org domain </b> Free</li>
                                                <li><b>3000 MB Hosting</b> Free</li>
                                                <li><b>60 GB</b> Bandwidth Free</li>
                                                <li><b>Number of Page :</b> Unlimited</li>
                                                <li><b>Number of Emails :</b>Unlimited</li>
                                                <li><b>Homepage </b> Dynamic</li>
                                                <li><b>Featured News</b> Slider</li>
                                                <li><b>Lead  </b> News & Featured News</li>
                                                <li><b>Breaking News </b> Scroller</li>
                                                <li><b>News  </b>  with Video</li>
                                                <li><b>Archive  </b> News</li>
                                                <li><b>Auto Sharing  </b> Buttons</li>
                                                <li><b>Yes </b>Graphic Design </li>
                                                <li><b>20 Pages </b>SEO</li>
                                                <li><b>Simple Android</b>  App</li>
                                                <li><b>Development Time:</b>  30 working days</li>
                                                <li><b>Renew Fee (Yearly) : </b> 5500 Taka</li>
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