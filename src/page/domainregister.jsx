import { useEffect } from "react";
import { Component, Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
import serviceaApi from "../api/serviceaApi";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Qouate from "../component/section/qouate";
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
      <PageHeader title={"Social Media Marketing"} curPage={"SMM"} />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <div>
                    <h5>DOMAIN REGISTER</h5>
                  </div>
                  <p>
                  Tech IT Center offers genuine domain name registration services to your real-time website with our domain services. We are one of the top most web service providers offering extraordinary domain services to our customers across the globe. In the last few years, we achieved many things with our professional domain name registration services. We specialize in various types of domain services such as registering a domain name, email server, DNS services, easy installation, web hosting and web maintenance services.
                  </p>
                  <p>
                  We are one of the leading graphic designing, web designing, digital marketing and domain name service provider, helping various industries to make their website visible to multiple online mediums in a secure manner and boost their website presence in front of their potential customers across the world
                  </p>
                  <h5>DOMAIN REGISTRATION SERVICES:</h5>
                  <p>Registering the domain name is the essential part of any business website, whether it is small or huge. Do you would like to get a unique name to your website with the extension of your own domain names can achieve by using domain name registration services? Registering a genuine name for your personal and business website will help to make their name more efficient and memorable to your online visitors and your potential patron’s across the globe.</p>
                <h6>We offer following additional services with our domain name registration services are,</h6>
                <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Register a new domain
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Transfer an existing domain
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Domain renewals
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Improving domain performance
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Implementing sub domains
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Domain privacy
                    </li>
                  </ul>
                  <h5>REGISTERING A NEW DOMAIN NAME:</h5>
                  <p>Registering a new domain name to your website will provide unique recognition to your brand names. We offer multiple extensions with your newly register domain names based on your country, products, and services.</p>
                  <h6>Some of our popular web extensions are followed by,</h6>
                <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> .com - especially made for global level business services
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> .co.in- India based commercial and non-commercial websites
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> .net – available for internet related networks
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> org – business and non-profit organizations
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> .info - available to every business according to the exchange of information’s
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> .biz – made for online business enterprises and ecommerce business website
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> .com.au – Australian business
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> .net.au – Australian technology based services
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> .org.au – organization under Australian organization
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> .asn.au – Non-commercial organization in Australia
                    </li>

                    <li>
                      <i class="icofont-rounded-double-right"></i> .id.au – available for individual needs
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <h5>TRANSFER AN EXISTING DOMAIN SERVICES:</h5>
                  <p>
                  Transferring an existing domain is the process of transferring the domain from the new web hosting address into existing web hosting DNS server. This process will help to make a better user experience to your websites.
                  </p>
                  <h5>We provide following things to transfer an existing domain names are,</h5>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Transferring a domain name listing creation
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Transferring website content
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Transferring point existing domain
                    </li>
                  </ul>
                  <h5>DOMAIN RENEWALS SERVICES:</h5>
                  <p>Tech IT Center also provides domain renewal services to renovate your expired domains lifetime. According to the payment you made while registering your featured domain, you have to renew once the date has been expired. We provide automatic renewal services to our trustworthy customers to continue enjoying our domain services at reasonable prices.</p>
                  <h5>IMPROVING DOMAIN PERFORMANCE:</h5>
                  <p>By improving domain performance of your website, we will help to reduce website loading speed and hiking the uptime on your website while someone visiting your website. Tech IT Center provides many opportunities with our domain name services to improve better user experiences.</p>
                  <h5>IMPLEMENTING SUB DOMAINS:</h5>
                  <p>Tech IT Center offering sub domain extension services to your main website to transfer an equal amount of traffic to our additional web pages individually. You can implement your sub domain with the extension of your own domain name to improve both user and search engine experiences.</p>
                  <h5>DOMAIN PRIVACY:</h5>
                  <p>Our domain services experts at Tech IT Center will help to protect your entire websites from our domain privacy services. Our domain privacy services will help to protect your sites contents from unwanted malicious and hacker’s websites. We provide complete security to your domains once you get DNS Services with us.</p>
                  <h6>WHY Tech IT Center PROVIDES DOMAIN SERVICES?</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Multi-purpose services providing company
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Make better identification of your brand in a cost effective way
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> 100% accuracy and guaranteed services
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Get extra benefits for premium packages
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>24 hours customer support
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Privacy guaranteed services
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Better user experience
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Transferring website content
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> 99.999% customer satisfied services
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  24X7 hours working company
                    </li>
                  </ul>
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
          <Qouate></Qouate>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ShopPage;
