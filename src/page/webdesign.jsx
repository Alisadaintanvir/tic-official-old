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
    const {slug} = useParams();
    console.log(slug);
    const [GridList, setGridList] = useState(true);
    const [services, setService] = useState([]);
    const {getService} = serviceaApi();
    const {serviceCategory} = serviceaApi();
    const {serviceCat, setServiceCat} = useState([])
    

    useEffect(()=>{
        getService().then(data=>{
            const services = data;
            console.log(services)
            const categoryItems = services.filter(item => item.servicecategory.slug === slug);
            setService(categoryItems)
        })
    },[slug])

    useEffect(()=>{
        serviceCategory().then(data=>setServiceCat(data))
    },[])
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Our Shop Pages'} curPage={'Shop'} />
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-12">
                            <article>
                                <div className="content-sections">
                                    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`} >
                                     <h5>HTML5 & CSS DESIGN</h5>
                                    </div>
                                    <p className="text-justify">mprove online reputation of your business with great websites. Professional web designing professionals at Tech IT Center delivers cutting edge solutions to your web design needs. We can design custom websites that are fully appealing, creative, aesthetic and fully customized for multiple devices such as smartphones, laptops, desktops, and tablets. A responsive website will create effective communication between your business and your audiences. Our web designers understanding your ideas and bring them into realistic with our web designing services.</p>
                                    <p>Our designers are having up to date knowledge about Adobe Photoshop, Illustrator, Dream weaver, HTML, XHTML and CSS to enhance your websites with good finishing. Our passion is creating a simple and effective website which makes the best impression about your brand name. We offer following types of web designing services are.</p>
                                    <ul className="lab-ul">
                                        <li><i class="icofont-rounded-double-right"></i>Custom website design</li>
                                        <li><i class="icofont-rounded-double-right"></i>Responsive website design</li>
                                        <li><i class="icofont-rounded-double-right"></i>HTML5 and CSS3 website design</li>
                                        <li><i class="icofont-rounded-double-right"></i>Static website design</li>
                                        <li><i class="icofont-rounded-double-right"></i>Dynamic website design</li>
                                        <li><i class="icofont-rounded-double-right"></i>Custom website design</li>
                                    </ul>
                                    <h5> CUSTOM WEBSITE DESIGN SERVICES</h5>
                                    <p>Build the strong foundation of your business with responsive web design and custom web development services. Uniquely designed website will always help to build a better reputation of your brand. It should be good looking and easy to read by both human visitors and search engines. Improving smartphone users, website owners like to build multiple devices supported websites to showcase their business.</p>
                                    <h5>RESPONSIVE WEB DESIGNING SERVICES:</h5>
                                    <p>Our responsive web designing services helps to indicate the website layout adapt for all kinds of viewing environments. By using fluid layouts, media queries and fluid images to create flexible web layouts. Our professionals are using following types of client side scripting languages such as</p>
                                    <ul className="lab-ul">
                                        <li><i class="icofont-rounded-double-right"></i>HTML5 and CSS3</li>
                                        <li><i class="icofont-rounded-double-right"></i>Flash</li>
                                        <li><i class="icofont-rounded-double-right"></i>Java Script</li>
                                        <li><i class="icofont-rounded-double-right"></i>JQuery</li>
                                        <li><i class="icofont-rounded-double-right"></i>Microsoft Silverlight</li>
                                        <li><i class="icofont-rounded-double-right"></i>AJAX</li>
                                    </ul>
                                    <p>We are using different types of server-side scripting languages to develop your website portal are PHP, Java, e.g. Java EE or WebObjects, Lotus Domino, Node.js, Perl, Python, NET, Ruby, Ruby on Rails, WebDNA, Websphere, ASP, ActiveVFP, CSP, Server-Side ANSI C, ColdFusion, CGI.</p>
                                    <h5>PROFESSIONAL WEBSITE DESIGNING SERVICES:</h5>
                                    <p>The Web site is the application which is used to keep your business and personal information’s, images and videos.</p>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <article>
                                <div className="content-sections">
                                    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`} >
                                    </div>
                                    <p className="text-justify">Web Designing and Web development professionals at Tech IT Center will work for our targeted customers to build the long-term customer relationship with our quality website development services.</p>
                                    <h5>RESPONSIVE WEB DESIGNING TRENDS IN 2015:</h5>
                                    <p>Responsive web designing is the professional approach to making a device supported websites to interact with many users and make better user experiences. Increasing smartphone usage, many peoples are using their mobile phones to do all internet surfing. Hence, desktop usage came under among the last three years. Hence, all the website owners are eagerly turning their actual websites into responsive websites using various responsive web designing concepts.</p>
                                    <h5>WHAT RESPONSIVE WEB DESIGN SERVICE DOES FOR YOUR BUSINESS?:</h5>
                                    <p>Responsive web design is the web based application development process which is used to build your business web pages to showcase your requirements, services, and products of your business. The main concept of designing a responsive website is compatible for all the devices. Whether you are using the internet in the laptop, desktop, PC’s and tablets, the website port size will be resized according to your device's width and height.</p>
                                    <p>This will improve user experiences and make your business is very simple and effective to your targeted audiences. Understanding the right kinds of needs and delivers suitable quality web development services are quite an important process to reach your targeted motto.</p>
                                    <h6>We offer types of web designing services are followed by:</h6>
                                    <ul className="lab-ul">
                                        <li><i class="icofont-rounded-double-right"></i> Static web designing</li>
                                        <li><i class="icofont-rounded-double-right"></i>Dynamic web designing</li>
                                        <li><i class="icofont-rounded-double-right"></i>E-commerce web designing</li>
                                        <li><i class="icofont-rounded-double-right"></i>E-commerce web maintenance</li>
                                        <li><i class="icofont-rounded-double-right"></i>CMS web designing and CMS web development</li>
                                        <li><i class="icofont-rounded-double-right"></i>HTML5 and CSS3 responsive web designing services</li>
                                    </ul>
                                    <h5>E-COMMERCE WEBSITE DESIGN SERVICES:</h5>
                                    <p>We are also specialized to provide dynamic E-commerce web designing services to your multi-purpose business needs. Ready to engage your audiences with high conversion rates and lower bounce rates, just end up your search with our web designing agency. Our skilled professionals will work with different web languages to build mobile supported websites according to your requirements.</p>
                                    <h6>We are also specialized in the following areas are,</h6>
                                    <ul className="lab-ul">
                                        <li><i class="icofont-rounded-double-right"></i> Static web designing</li>
                                        <li><i class="icofont-rounded-double-right"></i>Dynamic web designing</li>
                                        <li><i class="icofont-rounded-double-right"></i>E-commerce web designing</li>
                                        <li><i class="icofont-rounded-double-right"></i>E-commerce web maintenance</li>
                                        <li><i class="icofont-rounded-double-right"></i>CMS web designing and CMS web development</li>
                                        <li><i class="icofont-rounded-double-right"></i>HTML5 and CSS3 responsive web designing services</li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search />
                                <ShopCategory serviceCat = {serviceCat}/>
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
}
 
export default ShopPage;