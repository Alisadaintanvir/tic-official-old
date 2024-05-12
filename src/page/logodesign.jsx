import { useEffect } from "react";
import { Component, Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

const ShopPage = () => {
  const { slug } = useParams();
  console.log(slug);
  const [GridList, setGridList] = useState(true);
  const [services, setService] = useState([]);
  const { getService } = serviceaApi();
  const { serviceCategory } = serviceaApi();
  const { serviceCat, setServiceCat } = useState([]);

  useEffect(() => {
    getService().then((data) => {
      const services = data;
      console.log(services);
      const categoryItems = services.filter(
        (item) => item.servicecategory.slug === slug
      );
      setService(categoryItems);
    });
  }, [slug]);

  useEffect(() => {
    serviceCategory().then((data) => setServiceCat(data));
  }, []);
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Logo Design"} curPage={"Logo"} />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <div
                    className={`shop-product-wrap row justify-content-center ${
                      GridList ? "grid" : "list"
                    }`}
                  >
                    <h5>LOGO DESIGN SERVICES</h5>
                  </div>
                  <p>
                  Looking to design proper brand identification to promote your business brand among various online mediums. End up your search with our Tech IT Center. We are modern and creative designing company offer customize logo designing services to your multi-purpose business requirements. Our logo designing services help to enhance your both startup and large enterprises to explain customers to what your business about.
                  </p>
                    <p><q>Designate the right way... Design Your Brand... Bring potential leads to your business</q></p>
                  <p>Our logo designing services will help to bring out your ideas into visualization. The creative graphic designing team at Tech IT Center will help to visualize your brand by applying various designing methodologies? Let us know about your requirements clearly, we will find out the exact way to bring your dream into reality.</p>
                  <h5>PROFESSIONAL LOGO DESIGN SERVICES:</h5>
                 <p>Tech IT Center provides professional logo designing services to design your brand and corporate identity. The perfect brand design will help to promote your business among various online mediums. For the last decade of years, we serve many industries to design their brand names using our creative designing skills.</p>
                    <h6>The key focus of our logo designing services and corporate brand identity design services included.</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Logo design for small businesses
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Logo design for corporate/large enterprises businesses
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Logo Redesigning
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Professional expert logo design
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Adaptive logo design
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Professional logo design
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Simple and creative logo design
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Unique, creative and professional logo design
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Hand crafted logo design
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Modern & pixel perfect logo design
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Brand Identity designing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Contemporary print design, etc.
                    </li>
                  </ul>
                  <p>Our professional designers having years of experience in graphic designing tools such as Adobe Photoshop, Adobe Illustrator, and Coral Draw tools to illustrate your brand in an ideal way.</p>
                  <h5>CORPORATE LOGO & IDENTITY DESIGNING SERVICES:</h5>
                  <p>A Logo is the important component of any small and corporate businesses. It tells the story about your business products and services to your audience from both online and offline. Our creative designer’s team will deliver professional design outputs to your corporate business to stand out from the crowd.</p>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <h6>Some of our logo designing services are listed below,</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Graphic & Linear Logos
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Hybrid of Illustrate logos
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Text & font logos
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Letter mark logo designing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Symbol mark logo designing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Combination mark logo designing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Emblem Logo designing
                    </li>
                  </ul>
                  <p>Our professional logo designing services will help to create a good impression about your business. Our classy and eye catcher look design brings the potential leads to your business.</p>
                 <h5>WHY OUR LOGO DESIGNING SERVICES?</h5>
                 <p>Our logo designing services will help to your business organizations to achieve your goal. Make the best impression about your products and services can only achieve by using our professional designing methodologies. With professional logo designing services, you can get an emotional response from your audiences. It directly connects your business products and services and audience together by advertising and marketing your materials.</p>
                 <h6>The main benefits of our logo designing methodologies includes,</h6>
                 <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Professional logo design to eye-catching designs
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Explore ideas in a creative way
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Make better business and competitor analysis
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Represent business goals in simple design
                    </li>
                  </ul>
                  <p>Tech IT Center provides modern and pixel perfect logo designing in a superior way using the latest and standard designing methodologies. Our graphic designers having years of experience to depict your ideas into visualization. By applying various graphic designing methodologies, we can bring your dream into real time. Our stunning logo designing services help for many leading businesses in the competitive marketing industry. Our customers are 100% satisfied with our guaranteed, logo designing services. We also deliver trustworthy banner designing, newsletter designing with our corporate identity design services to engage your audiences and build your business standing out from your competitors. Tech IT Center provides customized logo designing services to attract your buyers and bring potential leads through your websites and other online mediums such as social media pages and promotional pages, etc. Hence, feel free to contact our team and share your ideas with us. We can help you to improve your business with our professional logo designing services.</p>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search />
                <ShopCategory serviceCat={serviceCat} />
                {/* <PopularPost /> */}
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ShopPage;
