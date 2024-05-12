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
                    <h5>LOCAL SEO SERVICES</h5>
                  </div>
                  <p>
                  Tech IT Center provides local SEO services to improve your business online presence. Local SEO helps to boost your brand awareness, traffic, and leads within your budget level. We have an excellent and experienced team of search engine optimization professionals; they have up-to-date knowledge about search engine algorithms and guidelines to build the effective online marketing strategy. SEO process will help to boost your business reputation in front of your competitors. Our team can optimize your web pages in search engines and drive more organic traffic to your focusing keywords.
                  </p>
                  <p>
                  Our team of SEO professionals also experts in both on a page and off page optimization together. We can bring successful leads by optimizing your website using professional search engine methodologies. Our team of professionals helps to optimize your web pages for various search directories to boost your ranking for your keywords. Improving smartphone popularity, nowadays people searching everything they want from their mobile internet itself. Hence, our expert performs mobile compatibility check to improving user and search engine experiences to hike your ranking.
                  </p>
                  <h5>LOCAL SEARCH ENGINE OPTIMIZATION SERVICES:</h5>
                  <p>Our Local search engine optimization services help to find your business in local search directories, maps and other online sources such as local directories, classifieds, business listing sites and yellow pages, etc. SEO professionals at the Tech IT Center promise that our services help with your website to get higher ranking in top search engines.</p>
                  <br></br>
                   <strong>Local SEO services to get more business:</strong>
                   <p>If your website optimized in local directories, then you no need to worry about customers. By applying effective marketing strategies and accurate business listings, our team of SEO professionals helps to place your website in all the professional web directories for suitable keywords. This technique helps to boost your business websites with greater rankings.</p>
                
                <h6>Our local SEO services are listed below,</h6>
                <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Website audit/analysis
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Google places optimization
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Content creation and Promoting Content
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Links Removal
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> High quality link building
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Review writing
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <p>
                  Local SEO helps to Connect with your audiences. Hence, business owners should add original information about your business. It builds the trust about your brand. Once your brand name getting popular in front of your audience, then you will get genuine leads for your products and services.
                  </p>
                  <p>Online marketing professionals at Tech IT Center, collects the correct information about your business. By using our content developing and keyword analysis knowledge, we will choose right keywords to focus on.</p>
                  <h5>Our local SEO services also focuses on the following things are,</h5>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Local business directories listing creation
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Optimization of maps on top search engines like Google, Yahoo, Bing, etc.
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Removing duplicate business listings
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Landing page designing and optimization
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Creative banner advertisement designing and promotion
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Analysing traffic estimation and improving traffic
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Maintaining weekly and monthly reports
                    </li>
                  </ul>
                  <h5>BUILD SUCCESSFUL BUSINESS STRATEGY WITH LOCAL SEO:</h5>
                  <p>Competitor analysis is the effective way to build successful SEO strategy. Whether your business size is small or huge, building a successful online marketing plan and analyzing your competitor’s strength and weakness is the important factor to reach your targeted motto. Our team of SEO professionals will help to boost your online presence in local directories.</p>
                  <p>Our local SEO services are Google business setting up, improving your visibility in local search engines, social media optimization, local blog development, content writing and content promotion, mobile optimization, XML creation and setting up, Google analytics and webmaster account setting up, bad link removal, improving the website authority.</p>
                  <p>Looking for professional local SEO or local search engine optimization services, please contact Tech IT Center and get exclusive offers from us at low budgets. We are always ready to satisfy your SEO, SMO, SEM, SMM, PPC, ORM service requirements to improve your online reputation.</p>
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
