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

    const {slug} = useParams();
    console.log(slug);
    const [GridList, setGridList] = useState(true);
    const [services, setService] = useState([]);
    const {getService} = serviceaApi();
    const {serviceCategory} = serviceaApi();
    const {serviceCat, setServiceCat} = useState([])
    

    useEffect(()=>{
        getService().then(data=>{
            const services = data;
            console.log(services)
            const categoryItems = services.filter(item => item.servicecategory.slug === slug);
            setService(categoryItems)
        })
    },[slug])

    useEffect(()=>{
        serviceCategory().then(data=>setServiceCat(data))
    },[])
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Our Shop Pages"} curPage={"Shop"} />
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
                    <h5>E-COMMERCE DESIGN</h5>
                  </div>
                  <p className="text-justify">
                    In the fastest growing leading marketing industry,
                    E-commerce businesses are growing day by day. SAM WEB
                    SOLUTION is the leading and cutting edge web design services
                    providing company specialized in E-commerce web designing
                    and web development services. Our flexible E-commerce web
                    design services help for both small business and large
                    enterprise. We are unique and creative E-commerce web
                    designing services helps to develop your E-commerce websites
                    to maintain your online stores and bring new leads from
                    their websites.
                  </p>
                  <p>
                    We have the team of designing experts applies various
                    designing methodologies to build customized websites with a
                    unique look and feel. We are using advanced designing
                    methodologies to build multiple devices supported websites
                    to boost sales. Many E-commerce businesses, small and large
                    level organizations and enterprises are getting benefits
                    from our web designing and E-commerce web development
                    services.
                  </p>
                  <h5>E-COMMERCE WEB DESIGNING SERVICES:</h5>
                  <p>
                    Tech IT Center is the specialized E-commerce web designing
                    service provider helps to design intuitive, fast-loading,
                    user-friendly and search engine friendly websites using
                    various designing methodologies. Our team of the web
                    designing professionals can able to design, E-commerce
                    websites for both commercial and non-commercial business
                    purposes. The specialty of using our eCommerce web designing
                    and eCommerce web development is to get potential customers
                    across the globe.
                  </p>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>PHP Web
                      Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Responsive
                      website design
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> ASP .Net
                      Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>ROR (Ruby On
                      Rails) Web Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Magento Web
                      Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Joomla Web
                      Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Drupal Web
                      Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>
                      WordPress Web Development
                    </li>
                  </ul>
                  <p>
                    Our designer team is not only specialized in E-commerce web
                    designing and web development services. We also experts in
                    mobile application development, game development, PHP
                    development etc. we are offering payment gateway
                    integration, shopping cart development, maintenance and
                    support services.
                  </p>
                  <h5> WHY OUR E-COMMERCE WEB DESIGNING SERVICES?</h5>
                  <p>
                    Our user-friendly and search engine friendly eCommerce web
                    design will make the buying process through online easier.
                    It will provide the way to eCommerce website owners to
                    increase their website traffic, sales and potential visitors
                    and customers, higher conversation rates and higher bit
                    return on investment (ROI).
                  </p>
                  <p>Would you like to build your online portals using latest technologies, please contact our web designing team? We have worked with many websites across the globe. Most of the design done by our team responds multiple devices such as Desktops, laptops, smartphones, and tablets, etc. we can able to create stunning websites with perfect blog and social media integration.</p>
                  
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                 
                <h5>WE ARE SPECIALIZED IN FOLLOWING WEB DESIGNING AND DEVELOPMENT SERVICES,</h5>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Web designing services for start-up business
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> E-commerce web development services
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Website redesigning services
                    </li>
                   
                  </ul>
                  <h5>BENEFITS OF USING OUR E-COMMERCE WEB DESIGNING SERVICES:</h5>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Flexible layouts and easy to navigate
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Custom designed and development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Efficiently manage content and products, etc.
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Better optimization for all the screen sizes
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Both user and search engine friendliness
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Built with numerous features to make an effective user interface
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Better usability and no need of programming languages
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> 100% fully responsive themes
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> High performance and error free results
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> 100% customer support
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Fast delivery within scheduled time period
                    </li>
                  </ul>
                  <h5>OUR WEB DEVELOPMENT SERVICES INCLUDED FOLLOWING STRATEGIES ARE FOLLOWED BY,</h5>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Design and develop structure based web applications
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Web UI Design
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Responsive HTML5 and CSS3 websites designing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Content management system
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Both user and search engine friendliness
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Joomla, WordPress and Drupal websites
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Newsletter template design
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  PSD to HTML conversion
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  CMS web designing services
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Website maintenance services
                    </li>
                  </ul>
                  <h5>WHAT WEB DESIGNING SERVICES DO FOR YOUR BUSINESS?</h5>
                  <p>Web Designing Services is the process of creating and depicting web applications according to your business environments. Mainly, it focuses on targeting your audiences from different industries. There are different kinds of web development strategies are improving your business are followed by</p>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>HTML5 Responsive web designing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>E-commerce web maintenance
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Mobile responsive website designing
                    </li>
                    
                  </ul>
                  <p>If you want to get professional web-based applications by contact with our Tech IT Center. We also experts in dynamic web application and designing services to engage your audiences. Hence, get a clear idea from our designer team before you promote your business in online.</p>
                  <p>Looking to improve your online business, get professional E-commerce web designing services from us. Our team of E-commerce web design team will capture your ideas and working hard to bring them into reality. For more details please mail your needs to us. We will get you back within few hours.</p>
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
