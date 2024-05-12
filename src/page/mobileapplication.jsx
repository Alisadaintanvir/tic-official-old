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
      <PageHeader title={"Mobile Application Development"} curPage={"mobile"} />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <div>
                    <h5>MOBILE APPLICATION</h5>
                  </div>
                  <p>
                    The present generation, using mobile phones becomes trendy,
                    likely and friendly. Peoples treat their mobile phone as
                    their best friends, this is because they like to spend their
                    time with mobiles (games, surfing the net, hearing a song,
                    watching videos, and what not) including children and
                    adults. Mobile phones connect the all over the world with
                    family, friends, and relatives, used at the time of
                    emergency and makes entertaining, especially make others
                    entertain in the single touch. The innovation of mobile
                    phone became compact; shape and size of the mobiles are
                    favored to, the people become smaller and smaller as well as
                    bigger.
                  </p>
                  <p>
                    Mobile phones perform multi-utility running over with media
                    players, GPS navigation, camera, broadband and more.
                    Furthermore, with end users becoming increasingly preferred,
                    they need mobile applications with flexibility and
                    reliability.
                  </p>
                  <p>
                    Using smartphones became popular, peoples like to own
                    smartphones. In this case, most leading smartphones are
                    iPhones and apple industry, they also prefer android
                    application, this makes the industry grow more and more.
                  </p>
                  <p>
                    Garden with full of blossom flowers makes the people delight
                    likewise design of our apps makes the users delight and
                    excite. However the outlook of mobile is smart, attractive
                    and elegant, the users search for awesome apps on
                    smartphones or simple phones, whatever, we’re the best at
                    inventing great mobile application design and mobile
                    application development. Tech IT Center generates the new
                    mobile application development services for any device and
                    fulfills your requirements. After testing and analyzing the
                    status of your app, we handover it to you.
                  </p>
                  <h6>
                    Tech IT Center specialized in following mobile application
                    development services are,
                  </h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> IPhone
                      Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Android
                      Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> IOS
                      Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> IPad
                      Application Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Custom Iphone
                      Application Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Enterprise
                      iphone and Ipad/Ipod apps development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Iphone social
                      media applications development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Enterprise
                      mobile solutions
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Tablet
                      Application Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> IPod
                      Application Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Blackberry
                      Application Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> HTML5 Mobile
                      Application Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Custom Mobile
                      Application Development
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> J2ME
                      Application Development
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <h5>WHY HAVE OUR MOBILE APPLICATION DEVELOPMENT SERVICES?</h5>
                  <p>
                    Looking for professional mobile application Development
                    Company? We have the multi-talented and enthusiastic team to
                    create your good and devices supported mobile applications,
                    they give importance to the expectations of the client, work
                    and give the best results. Now we are there to reduce your
                    business tension and make your business profitable.
                  </p>
                  <p>
                  We develop your new app any platform, such as Ios, android, and windows, etc.., we work with our clients to determine how the mobility will advance their key business goals. Tech IT Center specializes in end to end mobile app development. May you are next client for us; our work is heartfelt and quality. For your app to succeed, need smart business, talented mobile app development team. You’re lucky that you have visited the right place to bring your business top. We are amazing and inventing more and more power pack mobile apps and we are outstanding.
                  </p>
                      
                  <h5>
                  IPHONE AND IPAD APPLICATION DEVELOPMENT:
                  </h5>
                  <p>
                  Our experienced and skilled professionals of mobile application development can able to build custom mobile technologies to improve your brand awareness among the competitive marketing industry.
                  </p>
                  <h5>BLACKBERRY/J2ME APPLICATION DEVELOPMENT:</h5>
                  <p>Our seamless and reliable J2ME mobile application development services will help to improve your business among leading marketing/retail industry. Our team can work closely with your needs and delivers an extreme level and hassle-free products without any bugs.</p>
                 <h5>ANDROID MOBILE APPLICATION DEVELOPMENT:</h5>
                 <p>With the invent of advanced technologies, our professional team of developers can deliver cutting edge solutions to your Android applications which are supported for current and future operating system.</p>
                <h5>HTML5 MOBILE APPLICATION DEVELOPMENT:</h5>
                <p>Our mobile app developer can provide tailor made solutions to your mobile brand. Our iPad and iPod apps will help to engage your future audiences.</p>
                <h6>BENEFITS OF OUR MOBILE APPLICATION DEVELOPMENT SERVICES:</h6>
                <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Our expert developers will build mobile applications using proven methodologies and advanced techniques
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Seamless communication management to build strong customer relationship management
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Skilled professionals can develop high-performance product
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Our cost-effective services helps to deliver hassle free outputs
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Cutting edge solutions for your mobile operating system
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Our mobile application development will help to satisfy your custom requirements and build the trustworthy business.
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
