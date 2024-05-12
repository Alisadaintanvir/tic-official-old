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
      <PageHeader title={"PHP Web Development"} curPage={"php"} />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <div>
                    <h5>PHP APPLICATION</h5>
                  </div>
                  <p>
                  Tech IT Center is the leading web development company expertise in developing secure, fully flexible, scalable and rich user interface PHP application development services to your requirements. PHP application development will help to enhance high-quality web based and real time web applications to your personal and business requirements. We proud to say that our professional team of designers and developers can understand your needs and delivers top notch quality solutions. Our multiple purposes of PHP development will help for multiple platforms and servers.
                  </p>
                 <h6>Types of our PHP Web Development Services are,</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>  PHP application development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Custom web application development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> WordPress development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Corporate web development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> PHP/MySQL Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  PHP based CMS development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Joomla Web development
                      engine
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Website theme customization and integration
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> software applications development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> open source Web CMS Development
                    </li>
                  </ul>
                  <h5>PHP APPLICATION DEVELOPMENT SERVICES:</h5>
                  <p>
                  Tech IT Center is the certified web development and designing services providing company experts in offering to outsource and outsource PHP web development and PHP application development services to our customers across the globe. Our skilled professionals will understand your business ideas and work to bring them in real time.
                  </p>
                   <h6>Our experienced and excellent professionals can support your business in different ways with our PHP application development services are,</h6>
                   <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Integration of real time web based application development services
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Delivering cutting edge solutions for your E-commerce applications such as online shopping and other web portals
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Custom application development will help to design integrated web-enabled applications and tools
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Efficiently to enhance customer relationship management and content management system
                    </li>
                  </ul>
                  <h5>WHAT BLOG WEBSITES OR CONTENT MANAGEMENT SYSTEM WEB DESIGNING DOES FOR SEO?</h5>
                  <p>Enterprise content management application specially built to manage the larger organization and educational management system to maintain their own databases within their enterprise level.</p>
                  <p>It allows them to control their websites by updating events, information’s and upcoming programs about their websites.</p>

                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Blog web designing allows customizing your SEO On page factors quickly
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Drop down menu navigation construct by using CSS without any Java Query. This will help to improve your website loading speed.
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> URL structure will be generating automatically according to your post titles. This look like both user-friendly and search engine friendly
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Blog sites support rel=canonical tag format
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  It allows no frames
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  You can generate customized Sitemaps to your website URL’s
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Possible for 301 redirections and not for 302 redirections. This may helpful for your future URL change operations, etc.
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Breadcrumb navigations are allowed
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> It will supports Microdata format
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> No flash and animations are required in CMS web development
                    </li>
                    
                  </ul>
                  <h5>
                  HTML WEBSITE DESIGN VS. BLOG WEB DESIGN/CMS WEB DEVELOPMENT:
                  </h5>
                  <p>
                  HTML web design allows creating web pages. The combination of HTML, CSS, and JavaScript applications allows converting your website pages into creative web representations. The Content management system is fully responsive. If you want to convert your website more responsive, then a content management system is the best way to achieve it.
                  </p>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Compare with HTML websites, it takes minimal time to enhance
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Flexible designs compatible for all screen sizes
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Compatible for mobile, laptop, tablet, desktop
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Search engine friendly, to make better navigation
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Easy of social media integration
                    </li>
                  </ul>
                  <h5>
                  ADVANTAGES OF BLOG WEBSITE DESIGNING SERVICES:
                  </h5>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> You can able to update your website regularly
                     </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Free plugins are available to control your websites
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Content spell checking and SEO integration are very easy to set up in blog websites
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> CMS or Blog website designing are important for small level and wholesale business owners to showcase their business services and products within a minute
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Easily optimize contents and blogs within your website itself
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> You can directly capture your audience emails and quickly respond them using newsletters directly to Blog websites.
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
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ShopPage;
