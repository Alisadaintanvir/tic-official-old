
import { Fragment } from "react";

import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";


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
				title={"Perfect WooCommerce Packages For You"}
				curPage={"Woocemerce Package"}
			/>
			<div className="shop-page padding-tb">
				<div id="generic_price_table">
					<section className="py-5">
						<div class="container">
							<div class="row">
								<div class="col-md-12">
									<div class="price-heading clearfix">
										<h1>Perfect WooCommerce Packages For You</h1>
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
													<span>Standard</span>
												</div>
											</div>

											<div class="generic_price_tag clearfix">
												<span class="price">
													<span class="sign">৳</span>
													<span class="currency">12,500</span>
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
													<span>Vendor ship single or multi </span>
												</li>
												<li>
													<span> Secure access </span>
												</li>
												<li>
													<span> Email notifications </span>
												</li>
												<li>
													<span> Shopping Cart </span>
												</li>
												<li>
													<span> Order management </span>
												</li>

												<li>
													<span> Client Registration and Shop</span>
												</li>
												<li>
													<span> Clients Review on Products </span>
												</li>
												<li>
													<span> Unlimited Category </span>
												</li>
												<li>
													<span> Unlimited Products</span>
												</li>
												<li>
													<span> Product Sales Report </span>
												</li>
												<li>
													<span> Price Filter </span>
												</li>
												<li>
													<span> Variable Product Features </span>
												</li>
												<li>
													<span> Discount options </span>
												</li>
												<li>
													<span> Mobile Friendly / Responsive </span>
												</li>
												<li>
													<span> Product Management System </span>
												</li>
												<li>
													<span> Auto Shipping Charge Calculating </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> Management Training </span>
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
													<span>Professional</span>
												</div>
											</div>

											<div class="generic_price_tag clearfix">
												<span class="price">
													<span class="sign">৳</span>
													<span class="currency">21,000</span>
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
													<span>3000 MB Hosting</span> Free
												</li>
												<li>
													<span>60GB Bandwidth </span> Free
												</li>
												<li>
													<span>Vendor ship single or multi </span>
												</li>
												<li>
													<span> Secure access </span>
												</li>
												<li>
													<span> Email notifications </span>
												</li>
												<li>
													<span> Shopping Cart </span>
												</li>
												<li>
													<span> Order management </span>
												</li>

												<li>
													<span> Client Registration and Shop</span>
												</li>
												<li>
													<span> Clients Review on Products </span>
												</li>
												<li>
													<span> Unlimited Category </span>
												</li>
												<li>
													<span> Unlimited Products</span>
												</li>
												<li>
													<span> Product Sales Report </span>
												</li>
												<li>
													<span> Price Filter </span>
												</li>
												<li>
													<span> Variable Product Features </span>
												</li>
												<li>
													<span> Discount options </span>
												</li>
												<li>
													<span> Mobile Friendly / Responsive </span>
												</li>
												<li>
													<span> Product Management System </span>
												</li>
												<li>
													<span> Auto Shipping Charge Calculating </span>
												</li>
												<li>
													<span> Product Compare </span>
												</li>
												<li>
													<span> Wish list</span>
												</li>
												<li>
													<span> Mega Menu </span>
												</li>
												<li>
													<span> Multi Currency </span>
												</li>
												<li>
													<span>  Multi Language </span>
												</li>
												<li>
													<span>  Logo & Banner Design </span>
												</li>
												<li>
													<span>Webview Android App </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> X </span>
												</li>
												<li>
													<span> Management Training </span>
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
													<span class="currency">30,500</span>
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
													<span>5000 MB Hosting</span> Free
												</li>
												<li>
													<span>100GB Bandwidth </span> Free
												</li>
												<li>
													<span>Vendor ship single or multi </span>
												</li>
												<li>
													<span> Secure access </span>
												</li>
												<li>
													<span> Email notifications </span>
												</li>
												<li>
													<span> Shopping Cart </span>
												</li>
												<li>
													<span> Order management </span>
												</li>

												<li>
													<span> Client Registration and Shop</span>
												</li>
												<li>
													<span> Clients Review on Products </span>
												</li>
												<li>
													<span> Unlimited Category </span>
												</li>
												<li>
													<span> Unlimited Products</span>
												</li>
												<li>
													<span> Product Sales Report </span>
												</li>
												<li>
													<span> Price Filter </span>
												</li>
												<li>
													<span> Variable Product Features </span>
												</li>
												<li>
													<span> Discount options </span>
												</li>
												<li>
													<span> Mobile Friendly / Responsive </span>
												</li>
												<li>
													<span> Product Management System </span>
												</li>
												<li>
													<span> Auto Shipping Charge Calculating </span>
												</li>
												<li>
													<span> Product Compare </span>
												</li>
												<li>
													<span> Wish list</span>
												</li>
												<li>
													<span> Mega Menu </span>
												</li>
												<li>
													<span> Multi Currency </span>
												</li>
												<li>
													<span>  Multi Language </span>
												</li>
												<li>
													<span>  Logo & Banner Design </span>
												</li>
												<li>
													<span>Webview Android App </span>
												</li>
												<li>
													<span> Stock Management </span>
												</li>
												<li>
													<span>   Basic SEO Optimization </span>
												</li>
												<li>
													<span>  Product Filter Option </span>
												</li>
												<li>
													<span> Smart Affiliate System </span>
												</li>
												<li>
													<span>  Popup window </span>
												</li>
												<li>
													<span>   Advanced Search System </span>
												</li>
												<li>
													<span>  Jquery & CSS3 Effects </span>
												</li>
												<li>
													<span>  Speed Optimization</span>
												</li>
												<li>
													<span> Management Training </span>
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
