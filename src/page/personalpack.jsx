import { useEffect } from "react";
import { Fragment, useState } from "react";
// import { Link } from "react-router-dom";
import serviceaApi from "../api/serviceaApi";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
// import Pagination from "../component/sidebar/pagination";
// import PopularPost from "../component/sidebar/popular-post";
// import Rating from "../component/sidebar/rating";
// import Search from "../component/sidebar/search";
// import ShopCategory from "../component/sidebar/shop-category";
// import Tags from "../component/sidebar/tags";
// import { API } from "../config";

// const showResult = "Showing 01 - 12 of 139 Results";

const ShopPage = () => {


	return (
		<Fragment>
			<Header />
			<PageHeader
				title={"PERSONAL WEBSITE PACKAGES PERFECT FOR YOU!"}
				curPage={"Personal Package Package"}
			/>
			<div className="shop-page padding-tb">
				<div id="generic_price_table">
					<section className="py-5">
						<div class="container">
							<div class="row">
								<div class="col-md-12">
									<div class="price-heading clearfix">
										<h1>PERSONAL WEBSITE PACKAGES PERFECT FOR YOU!</h1>
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
													<span>Simple</span>
												</div>
											</div>

											<div class="generic_price_tag clearfix">
												<span class="price">
													<span class="sign">৳</span>
													<span class="currency" >3,500 </span>
													<span class="currency" style={{ fontSize: "40px", color: "orange" }}><del>8500</del></span>
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
													<span>Page & Emails : </span> 5
												</li>

												<li>
													<span> Homepage </span>Fantastic design
												</li>
												<li>
													<span>Online </span>Contact & Feedback Form
												</li>

												<li>
													<span> Featured Slider & Photo Galler </span>
												</li>

												<li>
													<span> Mobile Friendly / Responsive</span> No
												</li>
												<li>
													<span> Client Say </span>
												</li>
												<li>
													<span> SEO & Backups </span>
												</li>
												<li>
													<span> 24/7/365 Online Support </span>
												</li>

												<li>
													<span> Development Time : </span> 7 Days
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
													<span class="currency">7,500</span>
													<span class="currency" style={{ fontSize: "40px", color: "orange" }}><del>15000</del></span>
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
													<span>2024MB Hosting</span> Free
												</li>
												<li>
													<span>20GB Bandwidth </span> Free
												</li>
												<li>
													<span>Page & Emails : </span> 10
												</li>

												<li>
													<span> Homepage </span>Fantastic design
												</li>
												<li>
													<span>Online </span>Contact & Feedback Form
												</li>

												<li>
													<span> Featured Slider & Photo Galler </span>
												</li>

												<li>
													<span> Mobile Friendly / Responsive</span> Yes
												</li>
												<li>
													<span> Client Say </span>
												</li>
												<li>
													<span> SEO & Backups </span>
												</li>
												<li>
													<span> 24/7/365 Online Support </span>
												</li>

												<li>
													<span> Development Time : </span> 15 Working Days
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
													<span>Ultimate</span>
												</div>
											</div>

											<div class="generic_price_tag clearfix">
												<span class="price">
													<span class="sign">৳</span>
													<span class="currency">14,500 </span>
													<span class="currency" style={{ fontSize: "40px", color: "orange" }}><del>30000</del></span>
													<span class="month">/Once</span>
												</span>
											</div>
										</div>

										<div class="generic_feature_list">
											<ul>
												<li>
													<span>.com/net/org domain</span> Free
												</li>
												<li>
													<span>4096 MB Hosting</span> Free
												</li>
												<li>
													<span>60GB Bandwidth </span> Free
												</li>
												<li>
													<span>Page & Emails : </span> 20
												</li>

												<li>
													<span> Homepage </span>Fantastic design
												</li>
												<li>
													<span>Online </span>Contact & Feedback Form
												</li>

												<li>
													<span> Featured Slider & Photo Galler </span>
												</li>

												<li>
													<span> Mobile Friendly / Responsive</span> Yes
												</li>
												<li>
													<span> Client Say </span>
												</li>
												<li>
													<span> SEO & Backups </span>
												</li>
												<li>
													<span> 24/7/365 Online Support </span>
												</li>

												<li>
													<span> Development Time : </span> 30 Working Days
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
