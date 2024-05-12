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
      <PageHeader title={"Custom Application"} curPage={"custom application"} />
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
                    <h5>CUSTOM APPLICATION</h5>
                  </div>
                  <p>
                    Every businessman when they own their business, they would
                    like to give good product and service, and maintain the good
                    relationship with the customers to up bring its stability
                    and current offers to market. Whatever the product sale,
                    valuable product or branded, the important one for business
                    is customer interaction with your brand or services. Now a
                    day customers’ expectations are not only limited to get
                    better products and services, they also need a face to face
                    business in which they want to receive exactly what they
                    demand and in quick time.
                  </p>
                  <h5>CUSTOM APPLICATION DEVELOPMENT SERVICES:</h5>
                  <p>
                    Tech IT Center provides cutting edge custom application
                    development services to your various industrial and
                    commercial business services. Our custom application
                    development services helpful for both web and mobile
                    solutions. In the leading techno world, providing commercial
                    web applications, customizing existing applications and
                    creating new applications for your competitive business. Our
                    customized web and mobile applications will help to meet
                    your demanding business needs.
                  </p>

                  <h6>Our focus area of custom development services are,</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Custom
                      Software application development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Web
                      application development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> E-commerce
                      web and application development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Mobile
                      application development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Content
                      management system
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>CRM
                      Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Third party
                      API Integration
                    </li>
                  </ul>
                  <h5>CUSTOM SOFTWARE DEVELOPMENT SERVICES:</h5>
                  <p>
                    Expertise and skilled team at Tech IT Center deliver
                    tailor-made solutions for your business and organizational
                    needs with our professional custom software development
                    services. Our streamline and top notch quality custom
                    software development will help to improve your business into
                    their next level.
                  </p>

                  <h6>WEB APPLICATION DEVELOPMENT SERVICES:</h6>
                  <p>
                    Tech IT Center delivers full-fledged mobile application
                    development services such as Android development, iPhone
                    development, iPod and iPad development etc. we provide
                    cutting edge solutions which are compatible for both present
                    and future operating system.
                  </p>
                  <h5>E-COMMERCE WEB APPLICATION DEVELOPMENT:</h5>
                  <p>
                    We provide fully fledged and customized applications or open
                    source development services. We can guide our customers to
                    dollop their business and in a professional manner.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <div
                    className={`shop-product-wrap row justify-content-center ${
                      GridList ? "grid" : "list"
                    }`}
                  ></div>
                  <p>
                    By using the latest technologies, we can efficiently build
                    tailor-made solutions to your professional company and
                    business websites. We are adopting with the following tools
                    to implement open source applications are Word press,
                    Joomla, Drupal, Magento, Basic PHP, Advanced PHP, Cake PHP,
                    Zen cart, Dolphin, DooPHP, Moodle, Ruby, Codeigniter.
                  </p>
                  <h6>CONTENT MANAGEMENT SYSTEM:</h6>
                  <p>
                  Our content management system and open source development services are asp.net development, PHP development, Yii development, WordPress development, Ruby on rail development, Joomla and Drupal developments, responsive HTML5 and CSS3 website developments, Ajax, python and Xcart development services based on your requirements.
                  </p>
                  <h5>FEATURES OF OUR CUSTOM APPLICATION DEVELOPMENT SERVICES:</h5>
                  <p>
                  This is a type of strategy which is customized by an organization to manage and administrate its users and customers in an efficient manner for achieving the highest level in business. CRM features are
                  </p>
                  <p>Customer likes and dislikes- If a company provides new product or service, they cannot assume their actual needs so it is important to consider and interview the customer needs if we fulfill the customer likes and dislikes then our organization can maintain long term deal.</p>
                  <p>Customers reaction- An organization’s success is totally depending on understanding the customer reaction. There should not be any misunderstanding between customer and organization.</p>
                   <p>Customer satisfaction- In today’s competitive business marketplace, customer satisfaction is an important performance exponent and basic differentiator of business strategies. Hence, more customer satisfaction is equal to more business bonding with the customer, this leads to taking your business high level.</p> 
                 <p>Customer loyalty- It is the tendency of the customer to remain in business with the particular supplier and buy the products regularly. This is usually when a customer is very much satisfied with the supplier and re-visits the organization for the business deal this is because when a customer is satisfied with your product, and then it occurs, re-buying the products is important. To continue the customer loyalty, the most important aspect of an organization is focused on customer satisfaction.</p>
                 <p>Customer service- In an organization’s customer service is an important process of delivering information and services regarding all the products and brands. Customer satisfaction depends on the quality of service provided to him by the supplier. If the quality and trend of service go beyond customer’s expectation, the organization is supposed to have a good business with customers.</p>
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
