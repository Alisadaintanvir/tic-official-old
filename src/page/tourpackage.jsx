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
const pageHeader = "Perfect Tour & Travel Packages for you";
const subpageHeder =
  "Web design, development and hosting of a trusted institution";

const ShopPage = () => {
  return (
    <Fragment>
      <Header />
      <PageHeader
        title={"Perfect Tour & Travel Packages for you"}
        curPage={"Tour & Travel Project"}
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
                                                <li><b>.com/net/org domain </b> Free</li>
                                                <li><b>500 MB Hosting & </b> 10 GB Bandwidth</li>
                                                <li><b>Number of Page & Emails :</b>10</li>
                                                <li><b>Homepage</b>Dynamic</li>
                                                <li><b>About </b>Company Management</li>
                                                <li><b>Property </b>  Video/Virtual Tour</li>
                                                <li><b>Online </b> Contact & Feedback Form</li>
                                                <li><b>Complaint</b> box & Site Map</li>
                                                <li><b>Destination </b> & Itinerary managemen</li>
                                                <li><b>Master </b> Trip Management like</li>
                                                <li><b>Trip schedule </b> Creation and Automatic delete on time</li>
                                                <li><b>Trip Booking</b>Newsletter, Feedback</li>
                                                <li><b>Offer & Activity</b>Management</li>
                                                <li><b>Link</b>exchange Management</li>
                                                <li><b>News </b>Notice Board & Photo Gallery</li>
                                                <li><b>Testimonial</b>(Client Say) Management</li>
                                                <li><b>Virus </b>Protection & Responsive</li>
                                                <li><b>Package Management </b> like special Trip, Best Selling Trip etc.</li>
                                                <li><b>Feature Management </b> sharing Buttons & Graphic Design</li>
                                                <li><b>Social</b>Type, Search Listing</li>
                                                <li><b>Yes</b> SEO & Backups</li>
                                                <li><b>Simple Android</b>App</li>
                                                <li><b>Online</b>& Offline Support & Other Benefits </li>
                                                <li><b>Management </b> Training</li>
                                                <li><b>Development Time: </b>20 working days</li>
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
                                        <h3>PROFESSIONAL</h3>
                                        <h4> <span class="">৳ </span> 15,500  </h4>
                                    </div>
                                    <div class="deal-bottom">
                                        <ul class="deal-item">
                                              <li><b>.com/net/org domain </b> Free</li>
                                                <li><b>500 MB Hosting & </b> 10 GB Bandwidth</li>
                                                <li><b>Number of Page & Emails :</b>10</li>
                                                <li><b>Homepage</b>Dynamic</li>
                                                <li><b>About </b>Company Management</li>
                                                <li><b>Property </b>  Video/Virtual Tour</li>
                                                <li><b>Online </b> Contact & Feedback Form</li>
                                                <li><b>Complaint</b> box & Site Map</li>
                                                <li><b>Destination </b> & Itinerary managemen</li>
                                                <li><b>Master </b> Trip Management like</li>
                                                <li><b>Trip schedule </b> Creation and Automatic delete on time</li>
                                                <li><b>Trip Booking</b>Newsletter, Feedback</li>
                                                <li><b>Offer & Activity</b>Management</li>
                                                <li><b>Link</b>exchange Management</li>
                                                <li><b>News/ </b>Notice Board & Photo Gallery</li>
                                                <li><b>Testimonial</b>(Client Say) Management</li>
                                                <li><b>Virus </b>Protection & Responsive</li>
                                                <li><b>Package Management </b> like special Trip, Best Selling Trip etc.</li>
                                                <li><b>Feature Management </b>like FAQ, General Information etc.</li>
                                                <li><b>Social</b>Sharing Buttons & Graphic Design</li>
                                                <li><b>Yes</b> SEO & Backups</li>
                                                <li><b>No Android</b>App</li>
                                                <li><b>Online</b> & Offline Support</li>
                                                <li><b>Management </b> Training</li>
                                                <li><b>Development Time: </b>20 working days</li>
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
                                        <li><b>.com/net/org domain </b> Free</li>
                                                <li><b>500 MB Hosting & </b> 10 GB Bandwidth</li>
                                                <li><b>Number of Page & Emails :</b>10</li>
                                                <li><b>Homepage</b>Dynamic</li>
                                                <li><b>About </b>Company Management</li>
                                                <li><b>Property </b>  Video/Virtual Tour</li>
                                                <li><b>Online </b> Contact & Feedback Form</li>
                                                <li><b>Complaint</b> box & Site Map</li>
                                                <li><b>Destination </b> & Itinerary managemen</li>
                                                <li><b>Master </b> Trip Management like</li>
                                                <li><b>Trip schedule </b> Creation and Automatic delete on time</li>
                                                <li><b>Trip Booking</b>Newsletter, Feedback</li>
                                                <li><b>Offer & Activity</b>Management</li>
                                                <li><b>Link</b>exchange Management</li>
                                                <li><b>News/ </b>Notice Board & Photo Gallery</li>
                                                <li><b>Testimonial</b>(Client Say) Management</li>
                                                <li><b>Virus </b>Protection & Responsive</li>
                                                <li><b>Package Management </b> like special Trip, Best Selling Trip etc.</li>
                                                <li><b>Feature Management </b>like FAQ, General Information etc.</li>
                                                <li><b>Social</b>Sharing Buttons & Graphic Design</li>
                                                <li><b>Yes</b> SEO & Backups</li>
                                                <li><b>No Android</b>App</li>
                                                <li><b>Online</b> Support</li>
                                                <li><b>Management </b> Training</li>
                                                <li><b>Development Time: </b>7 working days</li>
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
                                                <li><b>.com/net/org domain </b> Free</li>
                                                <li><b>500 MB Hosting & </b> 10 GB Bandwidth</li>
                                                <li><b>Number of Page & Emails :</b>10</li>
                                                <li><b>Homepage</b>Dynamic</li>
                                                <li><b>About </b>Company Management</li>
                                                <li><b>Property </b>  Video/Virtual Tour</li>
                                                <li><b>Online </b> Contact & Feedback Form</li>
                                                <li><b>Complaint</b> box & Site Map</li>
                                                <li><b>Destination </b> & Itinerary managemen</li>
                                                <li><b>Master </b> Trip Management like</li>
                                                <li><b>Trip schedule </b> Creation and Automatic delete on time</li>
                                                <li><b>Trip Booking</b>Newsletter, Feedback</li>
                                                <li><b>Offer & Activity</b>Management</li>
                                                <li><b>Link</b>exchange Management</li>
                                                <li><b>News/ </b>Notice Board & Photo Gallery</li>
                                                <li><b>Testimonial</b>(Client Say) Management</li>
                                                <li><b>Virus </b>Protection & Responsive</li>
                                                <li><b>Package Management </b> like special Trip, Best Selling Trip etc.</li>
                                                <li><b>Feature Management </b>like FAQ, General Information etc.</li>
                                                <li><b>Social</b>Sharing Buttons & Graphic Design</li>
                                                <li><b>No</b> SEO & Backups</li>
                                                <li><b>No Android</b>App</li>
                                                <li><b>Online</b> Support</li>
                                                <li><b>Management </b> Training</li>
                                                <li><b>Development Time: </b>7 working days</li>
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
