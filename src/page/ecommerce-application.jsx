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
      <PageHeader title={"E-commere Applications"} curPage={"ecommerece"} />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <div>
                    <h5>E-commerce Application</h5>
                  </div>
                  <p>
                  Tech IT Center is the excellence E-commerce application development service providers to build customized web applications to build your E-commerce business. Usually, E-commerce web development used to help business who is dealing with their customers using online communication. Online business websites, shopping cart websites, online web and image galleries, banking sector websites, professional company websites will help to recognize and communicate with their targeted customers with their portals it.
                  </p>
                  <p>Nowadays eCommerce businesses are growing, according to the improvement of business strategy. People are started purchase their products and services within online websites, hence, every business owner changed their business promotion strategy.</p>
                 <h6>We are serving E-commerce application development services for various industries are followed by,</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Educational
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Small Business
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Large scale corporate industries
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Banking sectors
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Online business industry
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>   E-commerce business
                    </li>

                    <li>
                      <i class="icofont-rounded-double-right"></i> Media/advertisement industry
                    </li>
                  </ul>
                  <h5>E-COMMERCE APPLICATION DEVELOPMENT SERVICES::</h5>
                  <p>
                  Tech IT Center provides professional E-commerce application development services to deliver top notch results for your business. By using various open source E-commerce platforms, we can build the stronger customized web-enabled applications to engage your business among your competitive marketing industry. Our customized eCommerce templates designs and themes will capture your user attention retail industry.
                  </p>
                   <h6>Our customized E-commerce application development services are followed by,</h6>
                   <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Mobile E-commerce development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Custom cart development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Third party web enabled application integration
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Online store customization
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Online store development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Marketing personalization
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Marketing automation
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Multi-site management
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Payment gateway integration
                    </li>
                  </ul>
                  <h5>E-COMMERCE WEB DEVELOPMENT SERVICES:</h5>
                  <p>E-commerce web designing is the process of developing personal websites for business promotions. With this business owner can easily update their business brand, services, and product information’s to their customers among the world. Usually, content management system allows users to build their shopping and eCommerce websites to showcase their business information’s.</p>
                  <p>Tech IT Center is the professional web designing and web development services providing company working from Bangalore, India.</p>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <p>We have expertise and experienced, skilled web designing and development professionals who are adopting with latest software technology tools and develop a world class web based applications to improve their online success.</p>
                  <p>We also specialized in custom eCommerce application development services are content management system, enterprise application development, web-enabled legacy application development, CRM applications and software product development services.</p>
                  <h6>OUR KEY FOCUS AREA OF E-COMMERCE APPLICATION DEVELOPMENT SERVICES:</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>WordPress web development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Joomla web development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Drupal web development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Shopify
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  OpenCart
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Magento
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> X-Cart
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Cs-Cart
                    </li>
                  </ul>
                  <h5>
                  E-COMMERCE WEB DESIGN AND E-COMMERCE WEB DEVELOPMENT SERVICES:
                  </h5>
                  <p>
                  Our E-commerce web design and E-commerce web development services will help to customize your website with impressive designs with advanced programming languages and tools to build fully enabled custom websites to grow up your business. Our development team are also experts in Building other eCommerce applications such as,
                  </p>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Payment Gateway
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Order Management
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Configuring products and
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Checkout process
                    </li>
                  </ul>
                  <p>Our development team can also integrate your software applications such as Enterprise resource planning and customer relationship management services to build your business in a superior way. We can also develop custom software development services to your E-commerce business requirements.</p>
                  <h5>
                  BENEFITS OF E-COMMERCE APPLICATION DEVELOPMENT SERVICES:
                  </h5>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Building E-commerce web applications will help to hike your business leads
                     </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> E-commerce application will improve customer loyalty
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>100% customer support and satisfied solutions
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Gain better search engine visibility
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Get new loyal customers
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Mobile and multiple platforms optimized website
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Better social media integration
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Mature processes and platform expertise methodologies
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Hassle-free data integration and maintenance & support
                    </li>
                  </ul>
                  <p>Looking for professional E-commerce application Development Company to build custom web development services and software application development services to your business. Please contact our team and get better class services at low prices and fast turnaround time.</p>
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
