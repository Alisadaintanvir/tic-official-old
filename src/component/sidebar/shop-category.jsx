import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import serviceaApi from "../../api/serviceaApi";



const title = "All Categories";


const ShopCategory = () => {
    const [scategories, setsCategories] = useState([]);
    const {serviceCategory} = serviceaApi();
    useEffect(()=>{
        serviceCategory().then(data=>setsCategories(data.catgory))
    },[])

    return (
        <div className="widget shop-widget">
            <div className="widget-header">
                <h5>{title}</h5>
            </div>
            <div className="widget-wrapper">
                {/* <ul className="shop-menu lab-ul">
                    {
                        scategories.map(cat=>(
                        <li className="menu-item-has-children">
                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">{cat.servicecat}</a>
                               <ul className="shop-submenu lab-ul dropdown-menu">
                                <li></li>
                               <li>{cat.children.map(tes=>(
                                                <Link to={`/service/${tes.slug}`}>{tes.servicecat}</Link>))}</li>
                                   </ul>
                                 </li>
                        ))
                    }
                    
                    
                   
                </ul> */}
                <ul className="shop-menu lab-ul">
                    <li className="menu-item-has-children">
                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Domain</a>
                        <ul className="shop-submenu lab-ul dropdown-menu">
                            <li><a href="https://hostnate.com/cart.php?a=add&domain=register">Domain Search</a></li>
                            <li><Link to="">.BD Domain</Link></li>
                            <li><Link to="/service/email-server">Email Server</Link></li>
                            <li><Link to="/service/dns-service">DNS Service</Link></li>
                            <li><Link to="/service/installation-service">Installation Service</Link></li>
                            <li><Link to="/service/website-maintance">Website Maintenance</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Hosting</a>
                        <ul className="shop-submenu lab-ul dropdown-menu">
                        <li><a href="https://hostnate.com/shared-hosting" target="_blank"> Shared Hosting</a></li>
                            <li><a href="https://hostnate.com/premium-hosting" target="_blank">Premium Hosting</a></li>
                            <li><a href="https://hostnate.com/reseller-host" target="_blank">Reseller Hosting</a></li>
                            <li><a href="https://hostnate.com/wordpress-hosting" target="_blank">Wordpress Hosting</a></li>
                             <li><a href="https://hostnate.com/vps-hosting" target="_blank">VPS Hosting</a></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Digital Marketing</a>
                        <ul className="shop-submenu lab-ul dropdown-menu">
                        <li><Link to="/service/seo"> Search Engine Optimize(SEO)</Link></li>
                                               <li><Link to="/service/social-media">Social Media Marketing (SMM)</Link></li>
                                               <li><Link to="">Digital Advertising</Link></li>
                                               <li><Link to="">Email Marketing</Link></li>
                                               <li><Link to="/service/local-seo-service">Local Seo Service</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Web Development</a>
                        <ul className="shop-submenu lab-ul dropdown-menu">
                        <li><Link to="/service/php-application">PHP Web Application</Link></li>
                                               <li><Link to="/service/mobile-application">Mobile Web Application</Link></li>
                                               <li><Link to="/service/ecommerce-application">Ecommerce Web Application</Link></li>
                                               <li><Link to="/service/custom-application">Custom Web Application</Link></li>
                                               <li><Link to="/service/erp-application">ERP Web Application</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Web Design</a>
                        <ul className="shop-submenu lab-ul dropdown-menu">
                        <li><Link to="/service/webdesign">HTML CSS Design</Link></li>
                                               <li><Link to="/service/psdtohmtl">Ecommerce Web Design</Link></li>
                                               <li><Link to="/service/ecommerce-design">PSD TO HTML Conversions</Link></li>
                                               <li><Link to="/service/website-redesign">Website Redesign</Link></li>
                                               <li><Link to="/service/blog-webdevelopment">Blog Website Design</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Woocommerce Solutions</a>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Software Development</a>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Apps Development</a>
                    </li>
                    <li className="menu-item-has-children">
                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,10">Graphics Design</a>
                        <ul className="shop-submenu lab-ul dropdown-menu">
                        <li><Link to="/service/logo-design">Logo Design</Link></li>
                                               <li><Link to="/service/banner-design">Banner Design</Link></li>
                                               <li><Link to="">Background Removal</Link></li>
                                               <li><Link to="">UI-UX Design</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default ShopCategory;