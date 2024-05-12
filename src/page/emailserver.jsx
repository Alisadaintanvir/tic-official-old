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
      <PageHeader title={"Email Server"} curPage={"Email Server"} />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <div>
                    <h5>EMAIL SERVER</h5>
                  </div>
                  <p>
                    Tech IT Center provides professional email server, Email
                    hosting services, and bulk email hosting services to our
                    customers across the globe. Our specialized email services
                    help to manage up to date information of your email services
                    and helping our clients to focus on their business without
                    any struggling. We are providing reliable, secure and
                    aesthetic email services to maintain your business process
                    to meet your marketing demands. We are armed with
                    specialized email servers with extreme security. If you
                    would like to own a domain name for your business, you will
                    get email services for your domain name extension with
                    professional and secure email server services.
                  </p>
                  <h5>SECURITY EMAIL SERVICES:</h5>
                  <p>
                    Keep maintaining your business email is a quite complex
                    task. But, when you get email server and email hosting
                    services from Tech IT Center, you no need to worry about that.
                    Our secure email hosting service helps to enhance your
                    multi-purpose email business. We offer additional services
                    such as premium spam production and save your hosted email
                    from virus protection and keep your emails stand out from
                    the unwanted advertisements etc.
                  </p>

                  <h5>RELIABLE EMAIL HOSTING SERVICES:</h5>
                  <p>
                    Email hosting services are also similar to internet hosting
                    services which help to operate by the email servers. This
                    technique helps to manage electronic message between your
                    own servers. Email hosting services are beneficial for both
                    small size enterprises and development companies to maintain
                    their custom email addresses with their own domain name.
                    This allows a user to manage a variety of email addresses
                    that pointing the same trailing addresses.
                  </p>
                  <p>
                    Our dedicated professionals at Tech IT Center provides a
                    variety of options to provide and maintain email hosting
                    services and bulk email services to improve your demanding
                    business needs. Some of the features involve in our reliable
                    email hosting services are,
                  </p>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Convenient
                      access
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Spam and
                      virus protection
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <h5>EXCHANGE SERVER:</h5>
                  <p>
                    Tech IT Center specialized in Microsoft hosted exchange server
                    to maintain your mail server without any intentions.
                  </p>
                  <h5>UPTIME GUARANTEE:</h5>
                  <p>
                    We, professional team at Tech IT Center provides uptime
                    guarantee email server services when you feel your existing
                    email is down. If you are using down time email server, it
                    may affect the productivity and business enhancements. We
                    promised that; provide uptime guarantee email hosting
                    services to your business requirements
                  </p>
                  <h6>HIGHER VOLUME SECURITY:</h6>
                  <p>
                    We provide complete security for our email hosting services.
                    Our fully managed anti-spam, anti-virus, SSL encryption
                    services. Our email services fully compatible with outlook
                    and outlook express etc. we provide integrated business
                    applications with our professional email hosting services.
                    Our email hosting services help manage all of your email
                    services, as well as we, are providing the following
                    functionalities are,
                  </p>

                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Auto
                      Responders
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Unlimited
                      forwarders
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Calendar
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Unlimited
                      alias
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Mailing lists
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> White lists
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Black lists
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Archiving
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Folder
                      managements
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Larger
                      attachments
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Contacts
                      management
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> IMAP/POP3
                      online storage etc.
                    </li>
                  </ul>
                  <p>
                    Get affordable email server and email hosting services at
                    reasonable prices? Please feel free to contact, our TIC
                    LIMITED team as soon as possible.
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
          <Qouate></Qouate>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ShopPage;
