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
      <PageHeader title={"Search Engie Optimization"} curPage={"SEO"} />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <div>
                    <h5>SEARCH ENGINE OPTIMIZATION</h5>
                  </div>
                  <p>
                  Looking for best class SEO services to improve your website ranking? Get professional Search Engine Optimization services to rank your business website in top search engines for the competitive keywords. SEO is the best technique to drive more traffic to your websites. The Tech IT Center is the leading outsourcing Search Engine Optimization (SEO) service provider delivers affordable and professional internet marketing services to your own business needs.
                  </p>
                  <p>
                  Get our devoted SEO services to get your positioning higher in top web crawlers like Google, hurray, Bing and so on. Simply drop a mail to our Tech IT Center group. We don't mind it, that’s how greater your business, our only focus is, as per the rivalries buckle down and bring the best quality results taking into account your business needs. We offer proficient link building and search engine marketing services utilizing free and paid alternatives, online network showcasing, for example, YouTube, Facebook, Twitter, and LinkedIn and so on.
                  </p>
                  <h6>We are working to improve the following SEO strategies to your business are followed by,</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Improving search engine visibility
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Increasing your keyword ranking
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Increase profitability
                    </li>
                    </ul>
                    <h6>SEARCH ENGINES LOOKING FOR FOLLOWING THINGS FOR YOU TO IMPROVE YOUR RANKING FACTORS ARE FOLLOWED BY,</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Trustworthy website and Domain Authority
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> 100% Unique Conten
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Website Performance (Loading speed, uptime etc.)
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  User experience and search engine experience
                    </li>
                  </ul>
                  <h5>SEARCH ENGINES ARE NOT ALWAYS LOOKING FOR:</h5>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Poor user and search engine experiences
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Building a low quality inbound links
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Buying links
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Keyword stuffing & Keyword rich contents
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  SEO black hat activities
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Doorway pages creation
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Article spinning
                    </li>
                  </ul>
                  <p>We are providing world class Search engine optimization services to hike your website ranking and delivers world-class outcomes, according to your personal as well as business requirements. Many companies are searching still now to find out the best SEO professionals who are following the search engines guidelines in current trends and delivers the best quality results to improve your search engine presence.</p>
                  <h5>ON PAGE OPTIMIZATION TECHNIQUES TO IMPROVE SEARCH ENGINE RANKING:</h5>
                  <p>
                    On page SEO is the biggest assets of ranking your website in top search engines. The dramatically improvements and changes are made within your web pages to improving their performance. Our team of SEO analysts will do effectively on page optimization methodologies to your website to increase their ranking in top search engines. If you fail to make any changes in your website, it may affect your performance like speed, uptime, keyword ranking, and traffic etc.
                  </p>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Title tag optimization
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Meta tags optimization
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Keyword planning
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Robots.txt
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Image tags like alt tags and title tags optimization
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Url canonization
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Apply proper 301 redirection
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Improving Page loading speed
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Internal link structure
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Body contents optimization
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Mobile compatibility check
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Browser compatibility check
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Uses of heading tags such as H1, H2 up to H6
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Keyword density check
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Setup Google analytics account
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Setting up Google webmaster account
                    </li>
                  </ul>
                 
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <h5>MOST POPULAR OFF PAGE TECHNIQUES TO IMPROVE WEBSITE RANKING:</h5>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Content writing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Content promotion to web 2.0 sites
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Article writing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Article submissions
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  PDF writing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> PDF submissions
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Classifieds submissions
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Video creations and postings
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Image banner designing, Image Postings
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> High PR social bookmarking submissions
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Search engine submissions
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Local business listings
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> High PR directory submissions
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Pay per click
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Copy Writing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Blogging
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Word press blog creation and postings etc.
                    </li>
                  </ul>
                  <h6>CONVERSION RATE OPTIMIZATION IN SEO:</h6>
                  <p>
                  Tech IT Center Provides conversion rate optimization to improve your SEO Efforts in an effective way. The Conversion rate optimization process will help to drive traffic for a specific service or product page to gain top ranking in search engines.
                  </p>
                  <h5>This technique will help to enhance your SEO efforts in various ways are,</h5>
                  <p>
                  The conversion optimized web pages must contain relevant keywords which users exactly searching through popular search engines.
                  </p>
                  <p>Replacing complex contents such as flash and animations will help to reduce the loading speed of your websites. This will help to improve better user experience, search engine rankings and higher conversion rates to your web pages alone</p>
                  <h5>DISPLAY ADVERTISING IN SEO:</h5>
                  <p>Tech IT Center offers display advertising services with our professional SEO Experts. This will help website owners to add business advertisements within their website blog to improve click through rate</p>
                  <h5>KEYWORD RESEARCH & ANALYSIS SERVICES:</h5>
                  <p>Finding the right keywords to your website will help to improve your website ranking and traffic. There are many keyword planners and keyword selection tools will help to focus on your targeted keywords etc.</p>
                  <h5>COMPETITOR ANALYSIS:</h5>
                  <p>Our SEO professionals using competitor analysis method for finding out positive and negative factors about your competitor business. It is the essential tool to understand your competitor’s strength and weakness using various methodologies and working hard to improve your websites to bring out expected results in front of your competitor’s marketing industry.</p>
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
