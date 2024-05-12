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
                    <h5>INSTALLATION SERVICES</h5>
                  </div>
                  <p>
                  Tech IT Center also offers easy installation services to adding your DNS server into the existing windows server, Linux server, etc. Our team of professionals can experts in both installation services and configuration services. We are running one of the genuine and highly accurate, fast, powerful DNS installation services at reasonable prices. Our DNS installation services help for both small scale and large scale industries such as Enterprises, government agencies, E-commerce industries, etc. our only focus is to provide custom built and highly authoritative DNS services to improve your business enterprises in a secure manner.
                  </p>
                  <p>
                  Once you set up a DNS server, you should enable additional features to make your job easier and accurate. Our professional experts can help to install and configure a DNS server in your own domain server. DNS installation services boost the security of your existing and present server by making a proper configuration and settings. Whether your enterprises are built with the bulk amount of records, we can securely maintain those records in a superior way and improve user experiences. Our only motto is, according to our patron’s needs, we will provide complete solutions to their DNS server and DNS installation to both windows and Linux server.
                  </p>
                  <h5>INSTALLING DNS SERVER:</h5>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Start from your server manager panel by clicking Server Manager
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Then you can add roles under Role Summary tab
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Before you begin panel will appear, you can click Next
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> In roles list, click DNS server and then click next
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Carefully Read the information’s appears in the page
                    </li>

                    <li>
                      <i class="icofont-rounded-double-right"></i> Move to the next page
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Select confirm installation options
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Verify DNS server role
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Click Install button
                    </li>
                    </ul>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <p>
                  We, expertise and experienced professionals at Tech IT Center recommends configuring your DNS Server using your own static IP addresses. We recommend DNS servers have to use the configured DHCP IP addresses and DNS client to use their previous IP addresses while installing your windows or Linux web servers.
                  </p>
                  <p>Installing DNS Server and configuring server includes depth understanding of active directory domains and their integration, understanding, analyzing, and usage of forwarders, Planning DNS zones and servers.</p>
                  <h5>FEATURES OF DNS INSTALLATION SERVICES:</h5>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Understanding the current server directory features
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Understanding and using forwarders
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Planning DNS zones and servers clearly
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Installing a DNS Server
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Configuring a new DNS Server
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Configuring new DNS servers to forwarders etc.
                    </li>
                  </ul>
                  <h5>WHY Tech IT Center PROVIDES DNS INSTALLATION SERVICES?</h5>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Multi-purpose services providing company
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Make better identification of your brand in a cost effective way
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> 100% accuracy and guaranteed services
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> 24 hours customer support
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Get extra benefits for premium packages
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Privacy guaranteed services
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Better user experience
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> 99.999% customer satisfied services
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>24X7 hours working company
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
          <Qouate></Qouate>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ShopPage;
