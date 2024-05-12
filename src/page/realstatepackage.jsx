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
const pageHeader = "Perfect Real Estate Packages for you";
const subpageHeder =
  "Web design, development and hosting of a trusted institution";

let ProductList = [
  {
    imgUrl: "assets/images/shop/yost-1.jpg",
    imgAlt: "Product Thumb",
    title: "WordPress SEO Premium",
    price: "$49.00",
    orginalprice: "$89.00",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
  },
  {
    imgUrl: "assets/images/shop/wp-rocket.jpg",
    imgAlt: "Product Thumb",
    title: "WP Rocket by WP Media",
    price: "$4.00",
    orginalprice: "$199.00",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
  },
];

const ShopPage = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader
        title={"Perfect Real Estate Packages for you"}
        curPage={"Real State Project"}
          />
          <div className="shop-page padding-tb ">
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
                                        <h4><span class="">৳</span> 50,000 </h4> 
                                    </div>
                                    <div class="deal-bottom">
                                        <ul class="deal-item">
                                                <li><b>.com/net/org domain </b> 5 GB Hosting</li>
                                                <li><b>About company</b> management system</li>
                                                <li><b>Homepage</b>Fantastic design</li>
                                                <li><b>Blog / News </b> Section Set up</li>
                                                <li><b>Property </b>  Slider, Slideshow</li>
                                                <li><b>Property </b>  Video/Virtual Tour</li>
                                                <li><b>Featured </b>  Listing, Listing Map</li>
                                                <li><b>Latest Listing, </b> Community Features</li>
                                                <li><b>Number of Pages : </b>  Unlimited</li>
                                                <li><b>Administrator </b>  backend access</li>
                                                <li><b>Contact Agent</b> on Listing Page</li>
                                                <li><b>Agent</b>Profile w/Listings</li>
                                                <li><b>SEARCH BY</b>Category, Town/City, Agent-</li>
                                                <li><b>Price, Bedroom,</b>  Listing Location</li>
                                                <li><b>Google Map</b>  7 working days</li>
                                                <li><b>Global Properties:</b>  Map, Walk Score</li>
                                                <li><b>RENTALS with </b>Availability Calendar</li>
                                                <li><b>Mortgage / Loan </b>Calculator</li>
                                                <li><b>Member</b> Profile - Member Login</li>
                                                <li><b>Browse by</b>Type, Search Listing</li>
                                                <li><b>Mobile Friendly / </b> Responsive</li>
                                                <li><b>Onpage</b>SEO & Backups</li>
                                                <li><b>Simple Android</b>App</li>
                                                <li><b>Online</b>& Offline Support</li>
                                                <li><b>Management </b> Training</li>
                                                <li><b>Development Time: </b>30 working days</li>
                                                <li><b>Renew Fee (Yearly) : </b>5500 Taka</li>
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
                                        <h4> <span class="">৳ </span> 15,500  </h4>
                                    </div>
                                    <div class="deal-bottom">
                                        <ul class="deal-item">
                                              <li><b>.com/net/org domain </b> 5 GB Hosting</li>
                                                <li><b>About company</b> management system</li>
                                                <li><b>Homepage</b>Fantastic design</li>
                                                <li><b>Blog / News </b> Section Set up</li>
                                                <li><b>Property </b>  Slider, Slideshow</li>
                                                <li><b>Property </b>  Video/Virtual Tour</li>
                                                <li><b>Featured </b>  Listing, Listing Map</li>
                                                <li><b>Latest Listing, </b> Community Features</li>
                                                <li><b>Number of Pages : </b>  Unlimited</li>
                                                <li><b>Administrator </b>  backend access</li>
                                                <li><b>Contact Agent</b> on Listing Page</li>
                                                <li><b>Agent</b>Profile w/Listings</li>
                                                <li><b>SEARCH BY</b>Category, Town/City, Agent-</li>
                                                <li><b>Price, Bedroom,</b>  Listing Location</li>
                                                <li><b>Google Map</b>  7 working days</li>
                                                <li><b>Global Properties:</b>  Map, Walk Score</li>
                                                <li><b>RENTALS with </b>Availability Calendar</li>
                                                <li><b>Mortgage / Loan </b>Calculator</li>
                                                <li><b>Member</b> Profile - Member Login</li>
                                                <li><b>Browse by</b>Type, Search Listing</li>
                                                <li><b>Mobile Friendly / </b> Responsive</li>
                                                <li><b>Onpage</b>SEO & Backups</li>
                                                <li><b>No Android</b>App</li>
                                                <li><b>Online</b>Support</li>
                                                <li><b>Management </b> Training</li>
                                                <li><b>Development Time: </b>15 working days</li>
                                                <li><b>Renew Fee (Yearly) : </b>3500 Taka</li>
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
                                        <h4><span class="">৳</span> 10,500 </h4> 
                                    </div>
                                    <div class="deal-bottom">
                                        <ul class="deal-item">
                                              <li><b>.com/net/org domain </b> 1 GB Hosting</li>
                                                <li><b>About company</b> management system</li>
                                                <li><b>Homepage</b>Fantastic design</li>
                                                <li><b>Blog / News </b> Section Set up</li>
                                                <li><b>Property </b>  Slider, Slideshow</li>
                                                <li><b>Property </b>  Video/Virtual Tour</li>
                                                <li><b>Featured </b>  Listing, Listing Map</li>
                                                <li><b>Latest Listing, </b> Community Features</li>
                                                <li><b>Number of Pages : </b>  Unlimited</li>
                                                <li><b>Administrator </b>  backend access</li>
                                                <li><b>Contact Agent</b> on Listing Page</li>
                                                <li><b>Agent</b>Profile w/Listings</li>
                                                <li><b>SEARCH BY</b>Category, Town/City, Agent-</li>
                                                <li><b>Price, Bedroom,</b>  Listing Location</li>
                                                <li><b>Google Map</b>  7 working days</li>
                                                <li><b>Global Properties:</b>  Map, Walk Score</li>
                                                <li><b>RENTALS with </b>Availability Calendar</li>
                                                <li><b>Mortgage / Loan </b>Calculator</li>
                                                <li><b>No Member</b> Profile - Member Login</li>
                                                <li><b>No Browse by</b>Type, Search Listing</li>
                                                <li><b>Mobile Friendly / </b> Responsive</li>
                                                <li><b>Onpage</b>SEO & Backups</li>
                                                <li><b>No Android</b>App</li>
                                                <li><b>Online</b>Support</li>
                                                <li><b>Management </b> Training</li>
                                                <li><b>Development Time: </b>30 working days</li>
                                                <li><b>Renew Fee (Yearly) : </b>2500 Taka</li>
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
                                        <h4><span class="">৳</span> 8,500 </h4> 
                                    </div>
                                    <div class="deal-bottom">
                                        <ul class="deal-item">
                                               <li><b>.com/net/org domain </b> 500 MB Hosting</li>
                                                <li><b>About company</b> management system</li>
                                                <li><b>Homepage</b>Fantastic design</li>
                                                <li><b>Blog / News </b> Section Set up</li>
                                                <li><b>Property </b>  Slider, Slideshow</li>
                                                <li><b>Property </b>  Video/Virtual Tour</li>
                                                <li><b>Featured </b>  Listing, Listing Map</li>
                                                <li><b>Latest Listing, </b> Community Features</li>
                                                <li><b>Number of Pages : </b>  Unlimited</li>
                                                <li><b>No Administrator </b>  backend access</li>
                                                <li><b>Contact Agent</b> on Listing Page</li>
                                                <li><b>Agent</b>Profile w/Listings</li>
                                                <li><b>SEARCH BY</b>Category, Town/City, Agent-</li>
                                                <li><b>Price, Bedroom,</b>  Listing Location</li>
                                                <li><b>Google Map</b>  7 working days</li>
                                                <li><b>No Global Properties:</b>  Map, Walk Score</li>
                                                <li><b>RENTALS with </b>Availability Calendar</li>
                                                <li><b>No Mortgage / Loan </b>Calculator</li>
                                                <li><b>No Member</b> Profile - Member Login</li>
                                                <li><b>No Browse by</b>Type, Search Listing</li>
                                                <li><b>Mobile Friendly / </b> Responsive</li>
                                                <li><b>No Onpage</b>SEO & Backups</li>
                                                <li><b>No Android</b>App</li>
                                                <li><b>Online</b>Support</li>
                                                <li><b>Management </b> Training</li>
                                                <li><b>Development Time: </b>30 working days</li>
                                                <li><b>Renew Fee (Yearly) : </b>2000 Taka</li>
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
};

export default ShopPage;
