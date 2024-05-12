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
      <PageHeader title={"Installation Services"} curPage={"Installation"} />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <div>
                    <h5>WEBSITE MAINTENANCE</h5>
                  </div>
                  <p>
                  Tech IT Center proudly offers fast, proactive, knowledgeable and friendly website maintenance services to your business websites. Updating and maintaining your real-time website will help to boost your potential visitors and estimated traffic. The proper website maintenance services encourage your business by bringing unique and new visitors to visit your website on a regular basis. Website maintenance is the process of adding fresh contents, edit existing content, updating news, events, and biography, etc. Updating up to date changes in each web page will bring potential leads to your business.
                  </p>
                  <h6>Tech IT Center specialized in following web maintenance services are:</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Web hosting
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Domain name renewal
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Multiple Email accounts
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Updating website contents
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Help Desk
                    </li>

                    <li>
                      <i class="icofont-rounded-double-right"></i> Website Review
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Website Analysis
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Search engine optimization (SEO)
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Social Media Optimization (SMO)
                    </li>
                    </ul>
                    <h5>HIGHLY ACCURATE WEB MAINTENANCE SERVICES:</h5>
                    <p>We offer highly genuine and tailor made solutions to your websites with our website maintenance services. We have worked with multiple numbers of web development projects and gathered collective knowledge from each and every process. Rather than designing new applications for your existing web applications, maintaining an existing site with updating them using latest technologies will make a good opinion about your business.</p>
                    <p> <strong>Web Hosting Services –</strong> Host your website using secure a dedicated server to make your website presence in search engines and social media websites.</p>
                    <p><strong>Domain Name Renewal – </strong> Domain name renewal services help to renew your website unique identity (address) or domain name to extend their validity.</p>
                    <p><strong>Multiple Email Accounts –</strong> Maintaining a multiple email account for your enterprises with the extension of your business domains using secure DNS services.</p>
                    <p><strong>Updating Website Contents –</strong> Write 100% unique contents to your business and promoting into your website and other social media profiles will boost your website ranking and traffic.</p>
                    <p><strong>Help Desk –</strong> Find out the negative factors which are affecting your site performance and fixing it using advanced technologies.</p>
                    <p><strong>Website Review –</strong> Promote your website into different review websites and create a good impression to your website to attract more online viewers and customers.</p>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <p>
                 <strong> Website Analysis –</strong> The in-depth analysis of your website will help to find out the most efficient way to improve both user and search engine friendly websites to hike sales.
                  </p>
                  <p><strong>Search Engine Optimization (SEO) – </strong> SEO is the process of optimizing your web pages in search engines to improve their ranking in organic search results.</p>
                  <p><strong>Social Media optimization (SMO)-</strong> Optimizing your website in social media websites and promote your brand over social media websites will help to boost your social media presence and bring more audiences from targeted locations.</p>
                  <h5>WHY WEBSITE MAINTENANCE SERVICES CRUCIAL FOR YOUR BUSINESS?:</h5>
                  <p>In the fast growing internet world, maintaining a website and bring business leads from your website is a complex task to achieve. The strong online presence of your website will attract your targeted customers. No matter, what is your business about? The proper maintenance of your website turns your visitors into your leads.</p>
                  <p>Designing and Developing a website does not a matter. Maintaining them regularly and updating contents according to search engine algorithms or following guidelines are the very essential role for every successful online and offline business. A Website maintenance services also included designing a quality website, website quality check, website monitoring, updating fresh contents, adding website links, Image editing, product updates, news updates and website back up.</p>
                  <h5>FLEXIBLE WAYS FOR PROPER WEBSITE MAINTENANCE:</h5>
                  <p>Tech IT Center provides multiple ways to maintain your website in flexible and efficient ways. Fixing technical issues appear on your website helps to develop your business online presences. It also includes fixes HTML improvements and working on server side scripting languages such as JQuery, JavaScript, and ASP.NET etc.</p>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Checking the web designing errors, broken links and dead links to make your website user experiences.
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Updating unique and fresh contents to make your website contents searchable
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Monitoring website with proper images, links, and SEO optimized content to make it accessible by your potential visitors
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Adding inbound links from high page rank websites to pointing your website
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Design creative banners, GIF and flash animations to attract more human visitors by promoting your banner ads
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Updating business news and products etc.
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Promote your brand page and products information’s through shared social media networks
                    </li>
                  </ul>
                 <p>Looking for professional website maintenance services at low costs. Contact Tech IT Center and get exclusive offers with our team of web maintenance experts.</p>
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
