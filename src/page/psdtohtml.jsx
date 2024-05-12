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
      <PageHeader title={"PSD TO HTML Pages"} curPage={"psd to html"} />
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
                    <h5>PSD TO HTML CONVERSION</h5>
                  </div>
                  <p>
                    Converting image files into the dynamic website is not an
                    easy thing. It requires passion to understand the designing
                    elements and apply coding to convert your design files into
                    real time website. Tech IT Center having an experienced
                    and excellent team of web designing and graphic designing
                    team. They can individually design and develop PSD website
                    layouts and convert them into a hand coded websites using
                    various designing methodologies.
                  </p>
                  <p>
                    <q>
                      <strong>
                        Convert Your Designs. Create Dynamic Look by
                        professional coded
                      </strong>
                    </q>
                  </p>
                  <p>
                  Our designers and developers using multiple programming languages such as HTML5, CSS3, JQuery, JavaScript and XHTML languages to create an interactive web design for your business. We proud to say that our PSD to HTML conversion services will help to satisfy our customers’ expectations.
                  </p>
                  <h6>Some of our webs designing services are listed below</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Email template designing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Responsive HTML website designing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> PSD to XHTML conversion
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>PSD to HTML
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>PSD to Bootstrap
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Sketch to HTML
                    </li>
                  </ul>
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
                  <h5>PSD TO BOOTSTRAP CONVERSION SERVICES::</h5>
                  <p>
                  Our excellent team of the web designing team can easily convert your PSD design templates into responsive bootstrap websites using our responsive web designing methodologies. We are also specialized work on front end development tools to build responsive websites and other web applications at easiest way. The flexible layouts, images, and other applications will help to build seamless and responsive themes to showcase your business products and services in an eye catcher look and feel.
                  </p>
                  
                  <h6>
                  WHY OUR PSD TO HTML CONVERSION SERVICES?
                  </h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>According to your business requirement, our creative design team can develop PSD or HTML web templates separately.
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>We can accept designs from PSD formats and other formats such as JPEG, BMP, AI, GIF, and PDF, etc.
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Our team of designing professionals can slice your image files and combined them together logically like column, header, footer, body, content, etc.
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>We apply HTML5 and CSS3 coding when we want to design perfect look layouts which are compatible for all the browsers and screen sizes.
                    </li>
                   
                  </ul>
                  <p>
                  Do you want to convert your perfect and creative look PSD templates into coded and dynamic websites? Please contact our team of designing professionals; we can work for your image files to develop real-time websites to improve your potential customers among the online marketing industry. We will take care of all your designing and development requirements.
                  </p>
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
