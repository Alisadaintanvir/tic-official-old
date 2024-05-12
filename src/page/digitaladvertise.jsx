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
                    <h5>Digital Advertising</h5>
                  </div>
                  <p>
                  Digital advertising is the process of using various online platforms to promote your product or services. It allows you to reach the right audience for your product or services, track your performance and optimize campaigns for maximum ROI. It can be used to increase website traffic, boost sales and generate leads for your business. Through digital advertising, you can customize your campaigns to target specific audiences and test different strategies. You can also monitor the performance of each campaign and optimize your traffic to make sure you are reaching the right audience and getting maximum return on your investment.
                  </p>
                 <h6>Advantages of Digital Marketing</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Global Reach
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Local Reach
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Lower Cost
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Easy to Learn
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Effective Targeting
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Multiple Strategies
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Multiple Content Types
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Increased Engagement
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Analytics and Optimization
                    </li>
                  </ul>
                  <p>
                  we offer digital advertising services to help you reach your desired audience, track the performance of your campaigns, and test and optimize for maximum results. Our services include a comprehensive traffic campaign to attract the right people to your website and content, as well as detailed analytics to track and measure your performance. We also provide testing and optimization services to ensure that your campaigns are running smoothly and that your ads are targeting the right people. With our services, you can be sure that your digital advertising campaigns are working hard to reach your desired goals.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <h5>Why We Are Different:</h5>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>We are result oriented expert team
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Our Experts Works as the own that project
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> We Interface You with the customer on the go
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Integrated model and collective mehtodology
                    </li>
                  </ul>
                
                  <h5>
                  Grow Your Business
                  </h5>
                  <p>Marketing has changed! Days are gone! Today SMEs and SMB entities are dominating the market. Because they don’t need to spend a lot of money on traditional marketing such as television commercials, print ads, billboards, etc. This is the age of online marketing that drastically reduces the need for a large marketing team. </p>
                  <p>Whether your business is focused on an eCommerce business, a real estate company, a manufacturing company, or a service company, we can help you reach the right customers through our inbound digital marketing strategies.</p>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Web Marketing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Digital Presence
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Display Advertising
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Social Media
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
