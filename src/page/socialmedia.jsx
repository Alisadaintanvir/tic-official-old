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
      <PageHeader title={"Social Media Marketing"} curPage={"SMM"} />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <div>
                    <h5>SOCIAL MEDIA MARKETING</h5>
                  </div>
                  <p>
                  Tech IT Center offers professional social media marketing services to our worldwide customers. For the last successful years, we are serving many businesses to engage their business in online mediums to improve their sales. The strong communication between online mediums will help to boost your business across your targeted customers. Our social media marketing services beneficial and favorable for both small and huge level business enterprises.
                  </p>
                  <p>
                  Do you want to make brand awareness and business management in an efficient way? Social media marketing is the best way to improve your business. Social media marketing professionals at Tech IT Center helps our customers with our proven activities such as search engine optimization, Email marketing, content marketing etc.
                  </p>
                  <h6>Tech IT Center is the professional social media marketing company also providing following services with our SMM services are,</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Bulk SMS Marketing
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Local Business Advertising
                    </li>
                  </ul>
                  <p><strong>Social Media Planning</strong> – It involves optimizing your websites in social media websites and building the brand page in social media pages to improve brand awareness among your potential customers.</p>
                  <p><strong>B2B Marketing</strong> -Building social media awareness to your business products and services over social networks and drive traffic to your each and every individual product you are focusing on.</p>
                  <p><strong>B2C Marketing</strong> -Building brand page on social media websites and promoting into your customers to build the direct customer relationship.</p>
                  <p><strong>Facebook Marketing</strong>– Facebook marketing helps you to reach your ideal customers to your business. Facebook ads and brand pages will help to focus on target audiences to your business.</p>
                  <p><strong> LinkedIn Marketing</strong>-The professional LinkedIn marketing will help to focus right people on bringing out quality leads to deliver successful outcomes.</p>
                  <p><strong>Twitter Marketing</strong> – Creating an effective content strategy will focus on your targeted customers will generate successful leads to your business.</p>
                  <h5>SOCIAL MEDIA MARKETING (SMM) SERVICES:</h5>
                  <p>Engaging your online customers can achieve by using social media marketing services. It is the essential way to improve your links, reputation, and direct traffic to your websites. Social media platforms will help to business owners to publish their up-to-date business products and service updates to their potential customers in a direct way.</p>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <h6>MOST POPULAR OFF PAGE TECHNIQUES TO IMPROVE WEBSITE RANKING:</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Focus on your target market
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Improving conversion rate
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Make better brand awareness
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Best customer relationship management
                    </li>
                  </ul>
                  <h5>BULK SMS MARKETING SERVICES:</h5>
                  <p>
                  Tech IT Center offers bulk SMS marketing services to our clients business in an efficient and effective marketing strategy. Whether you are doing small or medium level business, our bulk SMS marketing strategy will help to reach your business through mobile phones. Our Bulk SMS marketing services or bulk text messaging services to bring more benefit for your business sellers and customers.
                  </p>
                  <h5>LOCAL BUSINESS ADVERTISING SERVICES:</h5>
                  <p>
                  Local business advertising is the effective way to market your brand across your targeted audience from multiple regions. Tech IT Center experts in Facebook advertising services, search engine marketing services, Business ads provider across multiple social media networks, etc. The Online advertising such search engine optimization, PPC, and Email Marketing services also help to hike your return on investments.
                  </p>
                  <h5>EMAIL MARKETING SERVICES:</h5>
                  <p>Tech IT Center also provides Email marketing services to our customers across the globe. Our successful email marketing campaigns will help to bring more business leads to your business. We are having spam protected email marketing software to send bulk emails to your potential customers across the globe and make them purchase your products and services within a certain amount of time period.</p>
                  <p>Looking for professional social media marketing (SMM) services providing company, please feel free to contact Tech IT Center. We will help to enhance your business with our professional SMM services.</p>
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
