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
      <PageHeader title={"Website Redesign"} curPage={"Redesign"} />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <div>
                    <h5>WEBSITE REDESIGN</h5>
                  </div>
                  <p>
                  Website Redesigning is the process of applying changes to your old or outdated websites and make it look stunning in front of your competitor’s websites to hike your sales. According to the search engine algorithm updates, Responsive websites are the important source when you want to ramp up your business sales through online. Tech IT Center is the world class website designing and development services providing company serves various businesses and organizational needs across the globe. In these technological industries, the new things are updated on every day. Hence, if you would like to redesign your website by expert’s hands, don’t get worried. Please contact web designing and web development team at Tech IT Center.
                  </p>
                  <p>
                  We are modern and creative website designing and website redesigning services providing company offering fully fledged and cutting edge solutions to your business requirements. Our excellent team of website redesigning professionals can analyze your old websites and apply new web technology tools and programming languages to build stunning look and eye catcher websites.
                  </p>
                  <h5>PROFESSIONAL WEBSITE REDESIGNING SERVICES:</h5>
                  <p>Our website redesigning is the most wanted services from our client’s side. A fast loading and fully optimized responsive websites will get both user and search engine attraction together. Flexible website layouts for multiple devices such as desktops, laptops, smartphones and tablet devices. If you want to increase your conversion rates, click through rates and reduce the bounce rates. Please end up your search with us. We will take care of your old website into the next level.</p>
                  <p><strong>Redesign your website... Increase Conversion Rates… Reduce Bounce Rates... Boost Your Sales</strong></p>
                  <h6>When do you need to redesign your websites?</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> When your website traffic and search engines rank are very low when compared to your competitor’s website
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>When its out-dated and it does not work properly with multiple devices or screen sizes
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> When the website loading speed is too slow
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>When you changed your brand identity and slogan
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>When you are looking to update fresh or new contents
                    </li>
                  </ul>
                  <h5>BUILD YOUR BRAND WITH EYE CATCHIER DESIGNS:</h5>
                  <p>The users would like to search your website when it’s placed within two pages on search engines as well as the eye catchiest and fast loading website pages are also the main reason to get your customer’s attraction. Once the bad impression created, then your website may lose the traffic and search engine rankings. At this time, don’t get worried; please contact Tech IT Center website redesigning team. We are a professional and unique website redesigning services and E-commerce web development service provider. With our web designing services, web development services, E-commerce web development and web maintenance services and website redesigning services to improve your website look and feel and helps to convert your website visitors into your potential customers.</p>
                  <p>We are using multiple web designing languages such as HTML5, CSS3, JavaScript and JQuery languages to build the dynamic look and static websites to your business requirements.</p>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <h6>
                  Some of our web designing services are followed by,
                  </h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Website Redesigning services
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Responsive web designing services
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> E-commerce web development services
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Mobile application development services
                      </li>
                      <li>
                      <i class="icofont-rounded-double-right"></i> Responsive HTML5 and CSS3 website development
                      </li>
                      <li>
                      <i class="icofont-rounded-double-right"></i> Drupal web development
                      </li>
                      <li>
                      <i class="icofont-rounded-double-right"></i>Joomla web development
                      </li>
                      <li>
                      <i class="icofont-rounded-double-right"></i>WordPress web development
                      </li>
                      <li>
                      <i class="icofont-rounded-double-right"></i> Content management system
                      </li>
                      <li>
                      <i class="icofont-rounded-double-right"></i> Open source web development
                      </li>
                      <li>
                      <i class="icofont-rounded-double-right"></i> PSD to HTML Responsive website conversion
                      </li>
                  </ul>
                  <h5>BEST WEB DESIGN COMPANY IN INDIA, WEB DESIGN SERVICES, WEB DEVELOPMENT COMPANY:</h5>
                  <p>
                  Whether you are doing any kind of business such as small or medium or huge level business, having a website is the most important and essential part. Do professional website designing and promote your websites in various search engines and place your business at the top. Building a web based layouts and designs to expose your business is the best part of implementing web based applications. Tech IT Center is the competitive and professional web development service provider, offering world class services to improve your online presence and delivers affordable outcomes at fast turnaround time.
                  </p>
                  <h5>PROFESSIONAL WEB DEVELOPMENT SERVICES:</h5>
                  <p>
                  As a team of web designing from Tech IT Center understands all types of web development applications and requirements from your side and delivers world class, fast, professional, language supports, the device supported, browser compatibility websites for your business at affordable prices.
                  </p>
                  <h5>MOBILE RESPONSIVE WEB DESIGNING:</h5>
                  <p>Designing a mobile supported website for your business will improve your online presences. There are many companies are competing their selves to make best business development among the competitive marketing industry. We are offering HTML5 and CSS3 Web Layouts Designing services to improve your online presence.</p>
                  <p>Increasing smart phone’s popularity, many peoples are likes to surf their requirements through mobile phone itself. Tech IT Center has a team of design professionals, they will easily understand your business and designing needs and delivers world class web designing and web development services to your business at professional rates.</p>
                  <p>Whether you want to develop any kinds of website enhancements when redesigning services, our professional designing team will assist you to satisfy your business requirements with our web designing methodologies. Hence, feel free to contact our team and outsource your website needs. We will help to bring up your business into their next level with our creativity and designing skills.</p>
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
