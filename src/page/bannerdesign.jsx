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
      <PageHeader title={"Banner Design"} curPage={"banenr design"} />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <h5>BANNER DESIGN SERVICES</h5>
                  <p>
                    In today’s digital world, online advertisements are becoming
                    more popular day by day. People used to surf the internet to
                    buy the products and services they are looking for.
                    According to the newest marketing trends and growth,
                    business owners should realize how the online advertisements
                    such as banners and other creative ads and logo designs must
                    require for your business whether it is small or huge.
                  </p>
                  <p>
                  Tech IT Center provided custom banner designing services for your commercial and non-commercial business requirements. Banner designing will make your advertisements more effective. Our banner design services help to display the advertisements in your banner and generate more leads. Dedicated and meaningful banners will help to showcase your products and services in an efficient way. The First impression is the crucial part of every online business.
                  </p>
                  <p>
                  Once your business products and services get attracted by your audiences, then you don’t need to worry about your sales. Because, a perfect and the eye catcher banner designs will turn your visitors into your potential audiences. Experienced and professional graphic designing and our designing team at Tech IT Center will help to demonstrate your business ads by using eye-catching designs.
                  </p>
                  <h5>HIGH END BANNER DESIGN SERVICES:</h5>
                  <p>
                  Our banner design services will convey your business message to your audiences. The symbol and themes used in your banner ads will create a good opinion on your products and services. When buying something from any of website portals, the first things they are noticing that, the website banners and logos which is placed on your online portals.
                  </p>
                  <h6>
                  We specialize in different types of banner designing services are,
                  </h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Static banner design
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Animated banner design
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> E-commerce banners
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Seasonal banners
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Product promotional banners
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Weekly banners
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Flash banner designing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Static banner designing for advertisements
                    </li>
                    
                  </ul>
                  <p>
                  We are unique and the modulus banner designing company helps to design professional banner ads to market your business products. Our digital flash banner design and ad banner design is the most popular services in the Graphic design industry.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <h6>Some of our logo designing services are listed below,</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Graphic &
                      Linear Logos
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Hybrid of
                      Illustrate logos
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Text & font
                      logos
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Letter mark
                      logo designing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Symbol mark
                      logo designing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Combination
                      mark logo designing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Emblem Logo
                      designing
                    </li>
                  </ul>
                  <p>
                    Our professional logo designing services will help to create
                    a good impression about your business. Our classy and eye
                    catcher look design brings the potential leads to your
                    business.
                  </p>
                  <h5>WHY OUR LOGO DESIGNING SERVICES?</h5>
                  <p>
                    Our logo designing services will help to your business
                    organizations to achieve your goal. Make the best impression
                    about your products and services can only achieve by using
                    our professional designing methodologies. With professional
                    logo designing services, you can get an emotional response
                    from your audiences. It directly connects your business
                    products and services and audience together by advertising
                    and marketing your materials.
                  </p>
                  <h6>
                    The main benefits of our logo designing methodologies
                    includes,
                  </h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Professional
                      logo design to eye-catching designs
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Explore ideas
                      in a creative way
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Make better
                      business and competitor analysis
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Represent
                      business goals in simple design
                    </li>
                  </ul>
                  <p>
                    Tech IT Center provides modern and pixel perfect logo
                    designing in a superior way using the latest and standard
                    designing methodologies. Our graphic designers having years
                    of experience to depict your ideas into visualization. By
                    applying various graphic designing methodologies, we can
                    bring your dream into real time. Our stunning logo designing
                    services help for many leading businesses in the competitive
                    marketing industry. Our customers are 100% satisfied with
                    our guaranteed, logo designing services. We also deliver
                    trustworthy banner designing, newsletter designing with our
                    corporate identity design services to engage your audiences
                    and build your business standing out from your competitors.
                    Tech IT Center provides customized logo designing services
                    to attract your buyers and bring potential leads through
                    your websites and other online mediums such as social media
                    pages and promotional pages, etc. Hence, feel free to
                    contact our team and share your ideas with us. We can help
                    you to improve your business with our professional logo
                    designing services.
                  </p>
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
