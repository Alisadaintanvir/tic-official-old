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
const pageHeader = "Perfect News Portal Website Packages for you";
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
        title={"Perfect School/Collage Web Site Packages for you"}
        curPage={"Shop"}
      />
      <div className="shop-page padding-tb ">
        <div id="generic_price_table">
          <section className="py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="price-heading clearfix">
                    <h1>Perfect Nonprofit Or NGO Packages for you</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="generic_content clearfix">
                    <div class="generic_head_price clearfix">
                      <div class="generic_head_content clearfix">
                        <div class="head_bg"></div>
                        <div class="head">
                          <span>ECONOMY</span>
                        </div>
                      </div>

                      <div class="generic_price_tag clearfix">
                        <span class="price">
                          <span class="sign">৳</span>
                          <span class="currency">8,500</span>
                          <span class="month">/Ontime</span>
                        </span>
                      </div>
                    </div>

                    <div class="generic_feature_list">
                      <ul>
                        <li>
                          <span>.com/net/org domain</span> Free
                        </li>
                        <li>
                          <span>500 MB Hosting</span> Free
                        </li>
                        <li>
                          <span>10GB Bandwidth </span> Free
                        </li>
                        <li>
                          <span>Page & Emails : </span> 10
                        </li>
                        <li>
                          <span> Homepage </span> Fantastic design
                        </li>
                        <li>
                          <span> Featured Slider & Photo Gallery </span> 
                        </li>
                        <li>
                          <span>Breaking </span>  News Scroller (No) 
                        </li>
                        <li>
                          <span>  Client  </span> Say (No)
                        </li>

                        <li>
                          <span>  Notice</span>  Board/ manage
                        </li>
                        <li>
                          <span> Mobile  </span> Friendly / Responsive (No)
                        </li>
                        <li>
                          <span>  Online </span> Contact & Feedback form 
                        </li>
                        <li>
                          <span> Complaint  </span> box & Site Map 
                        </li>
                        <li>
                          <span> News  </span> with Video
                        </li>
                        <li>
                          <span> Social  </span> Sharing Buttons Auto
                        </li>
                        <li>
                          <span> Related </span>websites links 
                        </li>
                        <li>
                          <span> Graphic  </span>Design
                        </li>
                        <li>
                          <span> Onpage </span>SEO & Backups (No) 
                        </li>
                        <li>
                          <span> Online  </span>Support
                        </li>
                        <li>
                          <span> Management  </span>Training
                        </li>
                        <li>
                          <span> Development Time:  </span>7 working days
                        </li>
                        <li>
                          <span> Renew :</span>2,000TK (Yearly)
                        </li>
                      </ul>
                    </div>

                    <div class="generic_price_btn clearfix">
                      <a class="" href="">
                        Sign up
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="generic_content active clearfix">
                    <div class="generic_head_price clearfix">
                      <div class="generic_head_content clearfix">
                        <div class="head_bg"></div>
                        <div class="head">
                          <span>STANDARD</span>
                        </div>
                      </div>

                      <div class="generic_price_tag clearfix">
                        <span class="price">
                          <span class="sign">৳</span>
                          <span class="currency">11,500</span>
                          <span class="month">/Ontime</span>
                        </span>
                      </div>
                    </div>

                    <div class="generic_feature_list">
                      <ul>
                      <li>
                          <span>.com/net/org domain</span> Free
                        </li>
                        <li>
                          <span>1000 MB Hosting</span> Free
                        </li>
                        <li>
                          <span>20GB Bandwidth </span> Free
                        </li>
                        <li>
                          <span>Page & Emails : </span> 20
                        </li>
                        <li>
                          <span> Homepage </span> Fantastic design
                        </li>
                        <li>
                          <span> Featured Slider & Photo Gallery </span> 
                        </li>
                        <li>
                          <span>Breaking </span>  News Scroller 
                        </li>
                        <li>
                          <span>  Client  </span> Say
                        </li>

                        <li>
                          <span>  Notice</span>  Board/ manage
                        </li>
                        <li>
                          <span> Mobile  </span> Friendly / Responsive
                        </li>
                        <li>
                          <span>  Online </span> Contact & Feedback form 
                        </li>
                        <li>
                          <span> Complaint  </span> box & Site Map 
                        </li>
                        <li>
                          <span> News  </span> with Video
                        </li>
                        <li>
                          <span> Social  </span> Sharing Buttons Auto
                        </li>
                        <li>
                          <span> Related </span>websites links 
                        </li>
                        <li>
                          <span> Graphic  </span>Design
                        </li>
                        <li>
                          <span> Onpage </span>SEO & Backups (No) 
                        </li>
                        <li>
                          <span> Online  </span>Support
                        </li>
                        <li>
                          <span> Management  </span>Training
                        </li>
                        <li>
                          <span> Development Time:  </span>10 working days
                        </li>
                        <li>
                          <span> Renew :</span>2,700TK (Yearly)
                        </li>
                      </ul>
                    </div>

                    <div class="generic_price_btn clearfix">
                      <a class="" href="">
                        Sign up
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="generic_content clearfix">
                    <div class="generic_head_price clearfix">
                      <div class="generic_head_content clearfix">
                        <div class="head_bg"></div>
                        <div class="head">
                          <span>PROFESSIONAL</span>
                        </div>
                      </div>

                      <div class="generic_price_tag clearfix">
                        <span class="price">
                          <span class="sign">৳</span>
                          <span class="currency">14,500</span>
                          <span class="month">/Ontime</span>
                        </span>
                      </div>
                    </div>

                    <div class="generic_feature_list">
                      <ul>
                      <li>
                          <span>.com/net/org domain</span> Free
                        </li>
                        <li>
                          <span>3072 MB Hosting</span> Free
                        </li>
                        <li>
                          <span>60GB Bandwidth </span> Free
                        </li>
                        <li>
                          <span>Page & Emails : </span> Unlimited
                        </li>
                        <li>
                          <span> Homepage </span> Fantastic design
                        </li>
                        <li>
                          <span> Featured Slider & Photo Gallery </span> 
                        </li>
                        <li>
                          <span>Breaking </span>  News Scroller
                        </li>
                        <li>
                          <span>  Client  </span> Say
                        </li>

                        <li>
                          <span>  Notice</span>  Board/ manage
                        </li>
                        <li>
                          <span> Mobile  </span> Friendly / Responsive 
                        </li>
                        <li>
                          <span>  Online </span> Contact & Feedback form 
                        </li>
                        <li>
                          <span> Complaint  </span> box & Site Map 
                        </li>
                        <li>
                          <span> News  </span> with Video
                        </li>
                        <li>
                          <span> Social  </span> Sharing Buttons Auto
                        </li>
                        <li>
                          <span> Related </span>websites links 
                        </li>
                        <li>
                          <span> Graphic  </span>Design
                        </li>
                        <li>
                          <span> Onpage </span>SEO & Backups (No) 
                        </li>
                        <li>
                          <span> Online Support &</span> Other Benfits
                        </li>
                        <li>
                          <span> Management  </span>Training
                        </li>
                        <li>
                          <span> Development Time:  </span>15 working days
                        </li>
                        <li>
                          <span> Renew :</span>3700TK (Yearly)
                        </li>
                      </ul>
                    </div>

                    <div class="generic_price_btn clearfix">
                      <a class="" href="">
                        Sign up
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ShopPage;
