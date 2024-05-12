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
const pageHeader = "eCommerce Single Vendor With App"
const subpageHeder = "Freelancing, Domain, Hosting, Digital Marketing, Website, App & Software Development Institution"

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
            <PageHeader title={'ECommerce Single Vendor With App'} curPage={'Ecommerce Solutions'} />
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
                                        <h3>E-COMMERCE WEBSITE, APP WITH CONTROL PANEL</h3>
                                        <h4><span class="">৳</span> 50,000</h4> 
                                    </div>
                                    <div class="deal-bottom">
                                        <ul class="deal-item">
                                                <li><b>Domain & Hosting </b> Free</li>
                                                <li><b>Website (Front Side) : </b> Yes</li>
                                                <li><b>Customer App : </b> Yes</li>
                                                <li><b>Delivery App::</b> No</li>
                                                <li><b>Payment Gateway:</b> PayPal, Stripe, Razorpay & Cash On Delivery</li>
                                                <li><b>Brands System : </b> Yes</li>
                                                <li><b>Coupons/Offers System : </b> Yes</li>
                                                <li><b>Refunds System: </b>Yes </li>
                                                <li><b>Order Tracking: </b> Yes</li>
                                                <li><b>Shipping Option: </b> Yes</li>
                                                <li><b>SEO Friendly: </b> Yes</li>
                                                <li><b>Affiliate System:</b>No</li>
                                                <li><b>Accounting System: </b>No</li>
                                                <li><b>Development Time:</b>30 working days</li>
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
                                        <h3>GROCERY, FOOD DELIVERY, FRUITS/VEGETABLE STORE ECOMMERCE</h3>
                                        <h4> <span class="">৳</span> 50,000 </h4>
                                    </div>
                                    <div class="deal-bottom">
                                        <ul class="deal-item">
                                             <li><b>Domain & Hosting </b> Free</li>
                                                <li><b>Website (Front Side) : </b> Yes</li>
                                                <li><b>Customer App : </b> Yes</li>
                                                <li><b>Delivery App::</b> No</li>
                                                <li><b>Payment Gateway:</b> PayPal, PayUmoney, Paystack, Razorpay, & Cash On Delivery</li>
                                                <li><b>Brands System : </b> Yes</li>
                                                <li><b>Coupons/Offers System : </b> Yes</li>
                                                <li><b>Refunds System: </b>Yes </li>
                                                <li><b>Order Tracking: </b> Yes</li>
                                                <li><b>Shipping Option: </b> Yes</li>
                                                <li><b>SEO Friendly: </b> Yes</li>
                                                <li><b>Affiliate System:</b>No</li>
                                                <li><b>Accounting System: </b>No</li>
                                                <li><b>Development Time:</b>30 working days</li>
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
                                        <h3>WEBSITE, USER APP & DELIVERY APP WITH SOFTWARE</h3>
                                        <h4><span class="">৳</span> 50,000  </h4> 
                                    </div>
                                    <div class="deal-bottom">
                                        <ul class="deal-item">
                                               <li><b>Domain & Hosting </b> Free</li>
                                                <li><b>Website (Front Side) : </b> Yes</li>
                                                <li><b>Customer App : </b> Yes</li>
                                                <li><b>Delivery App::</b> No</li>
                                                <li><b>Payment Gateway:</b> PayPal, PayUmoney, Paystack, Razorpay, & Cash On Delivery</li>
                                                <li><b>Brands System : </b> Yes</li>
                                                <li><b>Coupons/Offers System : </b> Yes</li>
                                                <li><b>Refunds System: </b>Yes </li>
                                                <li><b>Order Tracking: </b> Yes</li>
                                                <li><b>Shipping Option: </b> Yes</li>
                                                <li><b>SEO Friendly: </b> Yes</li>
                                                <li><b>Affiliate System:</b>No</li>
                                                <li><b>Accounting System: </b>No</li>
                                                <li><b>Development Time:</b>30 working days</li>
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
                                        <h3>WEBSITE, USER APP (IOS & ANDROID) WITH MANAGEMENT SOFTWARE</h3>
                                        <h4><span class="">৳</span> 30,000 </h4> 
                                    </div>
                                    <div class="deal-bottom">
                                        <ul class="deal-item">
                                        <li><b>Domain & Hosting </b> Free</li>
                                                <li><b>Website (Front Side) : </b> Yes</li>
                                                <li><b>Customer App : </b> Yes</li>
                                                <li><b>Delivery App::</b> No</li>
                                                <li><b>Payment Gateway:</b> PayPal, PayUmoney, Paystack, Razorpay, & Cash On Delivery</li>
                                                <li><b>Brands System : </b> Yes</li>
                                                <li><b>Coupons/Offers System : </b> Yes</li>
                                                <li><b>Refunds System: </b>Yes </li>
                                                <li><b>Order Tracking: </b> Yes</li>
                                                <li><b>Shipping Option: </b> Multiple</li>
                                                <li><b>SEO Friendly: </b> Yes</li>
                                                <li><b>Affiliate System:</b>No</li>
                                                <li><b>Accounting System: </b>No</li>
                                                <li><b>Development Time:</b>30 working days</li>
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