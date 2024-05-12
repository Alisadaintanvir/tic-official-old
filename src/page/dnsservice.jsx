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
      <PageHeader title={"DNS Services"} curPage={"DNS"} />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <div>
                    <h5>DNS SERVICES</h5>
                  </div>
                  <p>
                  Tech IT Center provides flexible and quality DNS services to make your business easier. DNS stands for Domain Name Server. Would you like to manage your domains in a secure way? Then, it's simple, contact our team. We are professional web services, digital marketing, and web hosting services providers offer, you can secure DNS Services to your small and large enterprises to maintain and manage their database records, website domains, and other business functionalities.
                  </p>
                  <p>
                  With our DNS Services, we offer domain name registration and managing your domains in an efficient way. Our DNS services help our customers from multiple industries to maintain their streamlined business processes. Our main focus of domain name services is
                  </p>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Domain registration
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> SSL certificates
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Privacy protection services
                    </li>
                    </ul>
                    <p>Our DNS Services also having additional features such as Anycast DNS, Alias records, Full API integration and access, Multi-layered DDos defense, POOL records, Unlimited records for a single zone, priority support, vanity name servers and PLA etc. whether your enterprise is small or huge, we will help to maintain your business databases and record in a secure way with full spam protection.</p>
                  <h5>DOMAIN NAME SERVER (DNS) SERVICES PROVIDER:</h5>
                  <p>DNS Server called both name server and web server. It helps to store your business information’s such as domain name registration information’s and records and maintain it in the collective DNS databases. According to your needs, there are two types of servers are helping to store your data´s are followed by,</p>
                <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Primary DNS Server
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Secondary DNS Server
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <h5>PRIMARY DNS SERVER:</h5>
                  <p>
                  The Primary DNS server reads the data´s from web server or web hosting accounts of the particular registrar. This server helps to transfer the information’s from the primary server into a secondary server.
                  </p>
                  <h5>SECONDARY DNS SERVER:</h5>
                  <p>Secondary DNS Server receives the data´s from the primary DNS server. The purpose of secondary DNS server requests a collective or set of information’s from the initial or primary domain name server.</p>
                  <h5>DNS HOSTING SERVICES:</h5>
                  <p>Tech IT Center offers premium domain hosting services and domain name registration services according to multiple packages. Our DNS Hosting services are dedicated servers, shared hosting, VPS hosting, Reseller hosting, email hosting, etc. We offer following facilities with our DNS Hosting services are,</p>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Host monitoring and failover
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Dynamic DNS Support
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Primary and secondary DNS Services
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Domain name registration
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>URL Forwarding
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Email Forwarding
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Factor authentication
                    </li>
                  </ul>
                  <p>We are using flexible and fastest web servers to access your website in an efficient way. With our dedicated DNS servers, even if your sites will load too fast, even it’s having complex scripts. We promise that our web hosting services will help to provide complete solutions for your business security.</p>
                  <p>Looking for premium DNS services with extended features within your budget level. Don’t worry, please feel free to contact Tech IT Center.</p>
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
