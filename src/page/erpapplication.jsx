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
      <PageHeader title={"ERP Application"} curPage={"ERP"} />
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
                    <h5>ERP APPLICATION</h5>
                  </div>
                  <p>
                  Tech IT Center provides best class ERP (Enterprise Resource Planning) Application Development services to your competent business organizations and marketing business resources. We are a unique and standalone software and web application development service provider deliver custom ERP application development with our custom software development services to your business needs. On the growth of current IT industry and technology, our professionals can build multi-purpose software applications to reduce risks in front of your competitor industry.
                  </p>
              
                  <h6>Our focus area of software development services are,</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> ERP Application Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> CRM Application Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> GIS Application Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Mobile Application Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Applications Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>System Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Web Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Embedded Systems Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Test automation and Scientific Development
                    </li>
                  </ul>
                  <h5>ERP APPLICATION DEVELOPMENT SERVICES:</h5>
                  <p>
                  ERP is the software applications which are integrated for large organizations and industries to maintain their records and departmental functionalities into one reliable and highly accurate information system. The collection of business related data´s and information’s are stored in a single ERP application system. This ERP enables a user to maintain their business information’s in a secure manner. Our various types of Software development models or methodologies are Waterfall model, V model, Incremental model, RAD model, Agile model, Iterative model, Spiral model.
                  </p>
                    <p>Our ERP application development service serves for many industries such as Educational institutes, banking, Financial and accounting, Hospital, Hotels, E-commerce business, manufacturing, Engineering, Automobile, Factories, and construction/Real estate etc. By using advanced software development methodologies, our professional team of software developers and programmers will build custom ERP application software with hassle free outputs.</p>
                  <h6>CUSTOM ERP DEVELOPMENT SERVICES:</h6>
                  <p>
                  Tech IT Center has experienced and professional team of ERP software development professionals who can easily understand your business needs/requirements and efficiently build custom ERP applications to analyze, plan, design and execute their business information’s in a reliable and secure way. By using current technologies and ERP programs, our team can build extreme ERP solutions to your complex business requirements.
                  </p>
                  <h5>ERP AND CRM APPLICATION DEVELOPMENT:</h5>
                  <p>
                  Tech IT Center having a specialized team of software development professionals, can design CRM and ERP modules to manage your custom related information’s, databases, etc.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <p>
                  Our team can able to decide marketing software tools, Email management, etc. With our ERP Application development services, we also provide human resource management, Financial/accounting services, supply chain management, project management, E-mail management, etc
                  </p>
                  <p>By using our depth planning, analyzing and developing knowledge, we can work on your applications and design massive software application platforms with hassle free. Whether your enterprise size will be small or huge, our financial development software application will help to manage and monitor your enterprise business information’s in a secure manner.</p>
                  <p>Our Web Developers are well experienced in following programming languages such as Java, PHP, C#, SQL, Python, Ruby, C++ etc. By using the solid understanding of client-sides scripting languages such as HTML5 and CSS3 and the server side scripting languages such as.NET, PHP, NodeJS, Ruby, Java, J2EE, XML, SQL, JSON. Our specialty is designing multi-purpose Java applications to build applications for your commercial and enterprise requirements.</p>
                  <p>We also specialized in the following areas such as customized ERP solutions, Customized CRM application development, Custom mobile application development and custom web application development services. Our well-planned methodologies and analyzing will deliver extraordinary outcomes to your requirements.</p>
                  <h6>CUSTOMER RELATIONSHIP MANAGEMENT SERVICES:</h6>
                  <p>
                  CRM is an acronym called customer relationship management service. CRM is an upright concept or strategy to solidify relations with customers and at the same time reducing costs and enhancing productivity and profitability in business. This CRM system is the concentrated collection of all data sources under management and provides current and real time vision of customer information. A CRM system is vast and significant, it is implemented for small business, medium sized also large enterprise, they keep their work as the main goal to assist the customers efficiently.
                  </p>
                  <p>A CRM system provides a well-defined platform for all business units to interact with their clients and fulfill all their needs and demands very effectively and to build long term relationship. CRM will manage customer relationship which includes attracting the customer, analyzing the customer and satisfying the customer.</p>
                  <h6>Our focus area of web development services are:</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> PHP application development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Mobile application development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Ecommerce application development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Custom application development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Mobile application development
                    </li>
                  </ul>
                  <p>Looking for professional ERP application development services and CRM application development services to your commercial and non-commercial business requirements. Contact our team as soon as possible. We can able to satisfy any types of your needs at reasonable prices.</p>
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
