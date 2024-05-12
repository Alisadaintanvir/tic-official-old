import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import categoryApi from "../../api/categoryApi";
import serviceaApi from "../../api/serviceaApi";

const phoneNumber = "+88 01722-952895";
const address = "AH.Tower (5th Floor), Alokar More, Ghoramara, Boalia, Rajshahi";


let socialList = [
    {
        iconName: 'icofont-facebook-messenger',
        siteLink: 'https://www.facebook.com/techitcenterbd',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: 'https://www.instagram.com/techitcenterbd/',
    },
    {
        iconName: 'icofont-youtube-play',
        siteLink: 'https://www.youtube.com/@ticlimited',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: 'https://www.linkedin.com/company/techitcenter/',
    },
]

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
	const [socialToggle, setSocialToggle] = useState(false);
	const [headerFiexd, setHeaderFiexd] = useState(false);
    

	window.addEventListener("scroll", () => {
		if (window.scrollY > 200) {
			setHeaderFiexd(true);
		} else {
			setHeaderFiexd(false);
		}
	});

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [scategories, setsCategories] = useState([]);
    const {getCategori} = categoryApi();
    const {serviceCategory} = serviceaApi();

    useEffect(()=>{
        getCategori().then(data=>setCategories(data))
    },[])
    useEffect(()=>{
        serviceCategory().then(data=>setsCategories(data.catgory))
    },[])

    return (
        <header className={`header-section ${headerFiexd ? "header-fixed fadeInUp" : ""}`}>
            <div className={`header-top ${socialToggle ? "open" : ""}`}>
                <div className="container">
                    <div className="header-top-area">
                        <ul className="lab-ul left">
                            <li><i className="icofont-ui-call"></i> <span>{phoneNumber}</span></li>
                            <li><i className="icofont-location-pin"></i> {address}</li>
                        </ul>
                        <ul className="lab-ul social-icons d-flex align-items-center">
                            <li><p>Find us on : </p></li>
                            {socialList.map((val, i) => (
                                <li key={i}><a href={val.siteLink}><i className={val.iconName}></i></a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper" style={{padding:"0"}}>
                        <div className="logo">
                            <Link to="/"><img src="/assets/images/logo/01.png" alt="logo" /></Link>
                        </div>
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Home</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/">Home One</NavLink></li>
                                            <li><NavLink to="/index-2">Home Two</NavLink></li>
                                            <li><NavLink to="/index-3">Home Three</NavLink></li>
                                            <li><NavLink to="/index-4">Home Four</NavLink></li>
                                            <li><NavLink to="/index-5">Home Five</NavLink></li>
                                            <li><NavLink to="/index-6">Home Six</NavLink></li>
                                            <li><NavLink to="/index-7">Home Seven</NavLink></li>
                                        </ul>
                                    </li> */}
                                    <li><NavLink to="/">Home</NavLink></li>
                                     {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Course</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/index-2">Home Two</NavLink></li> 
                                        </ul>
                                    </li> */}

                                    <li className="menu-item-has-children">
                                        <Link to="/course" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Courses</Link>
                                        <ul className="lab-ul dropdown-menu">

                                            <li><NavLink to="/course">All Course</NavLink></li>
                                            {
                                                categories.map((c, i)=>(
                                                    <li><Link to={`/course/${c.slug}`}>{c.title}</Link></li>
                                                ))
                                            }
                                            
        
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link to="" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Service</Link>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/service/domain-service">Domain</NavLink>
                                            <ul className="lab-ul dropdown-menu">
                                               <li><a href="https://hostnate.com/cart.php?a=add&domain=register" target="_blank"> Domain Search</a></li>
                                               <li><Link to="">.BD Domain</Link></li>
                                               <li><Link to="/service/email-server">Email Server</Link></li>
                                               <li><Link to="/service/dns-service">DNS Service</Link></li>
                                               <li><Link to="/service/installation-service">Installation Service</Link></li>
                                               <li><Link to="/service/website-maintance">Website Maintenance</Link></li>
                                            </ul>        
                                            </li>
                                            <li><a href="https://hostnate.com/" target="_blank">Hosting</a>
                                            <ul className="lab-ul dropdown-menu">
                                               <li><a href="https://hostnate.com/shared-hosting" target="_blank"> Shared Hosting</a></li>
                                               <li><a href="https://hostnate.com/premium-hosting" target="_blank">Premium Hosting</a></li>
                                               <li><a href="https://hostnate.com/reseller-host" target="_blank">Reseller Hosting</a></li>
                                               <li><a href="https://hostnate.com/wordpress-hosting" target="_blank">Wordpress Hosting</a></li>
                                               <li><a href="https://hostnate.com/vps-hosting" target="_blank">VPS Hosting</a></li>
                                            </ul>        
                                            </li>
                                            <li><NavLink to="/service/digital-marketing">Digital Marketing</NavLink>
                                            <ul className="lab-ul dropdown-menu">
                                               <li><Link to="/service/seo"> Search Engine Optimize(SEO)</Link></li>
                                               <li><Link to="/service/social-media">Social Media Marketing (SMM)</Link></li>
                                               <li><Link to="">Digital Advertising</Link></li>
                                               <li><Link to="">Email Marketing</Link></li>
                                               <li><Link to="/service/local-seo-service">Local Seo Service</Link></li>
                                            </ul>        
                                            </li>
                                            <li><NavLink to="/service/web-development">Web Development</NavLink>
                                            <ul className="lab-ul dropdown-menu">
                                               <li><Link to="/service/php-application">PHP Web Application</Link></li>
                                               <li><Link to="/service/mobile-application">Mobile Web Application</Link></li>
                                               <li><Link to="/service/ecommerce-application">Ecommerce Web Application</Link></li>
                                               <li><Link to="/service/custom-application">Custom Web Application</Link></li>
                                               <li><Link to="/service/erp-application">ERP Web Application</Link></li>
                                            </ul>        
                                            </li>
                                            <li><NavLink to="/service/web-design">Web Design</NavLink>
                                            <ul className="lab-ul dropdown-menu">
                                               <li><Link to="/service/webdesign">HTML CSS Design</Link></li>
                                               <li><Link to="/service/psdtohmtl">Ecommerce Web Design</Link></li>
                                               <li><Link to="/service/ecommerce-design">PSD TO HTML Conversions</Link></li>
                                               <li><Link to="/service/website-redesign">Website Redesign</Link></li>
                                               <li><Link to="/service/blog-webdevelopment">Blog Website Design</Link></li>
                                            </ul>        
                                            </li>
                                            <li><NavLink to="/category/wocmmerce-solutions">Woocommerce Solutions</NavLink>
                                            </li>
                                            <li><NavLink to="/category/software-development">Software Development</NavLink>
                                            </li>
                                            <li><NavLink to="/category/apps-develoment">Apps Development</NavLink>
                                            </li>
                                            <li><NavLink to="/service/graphics-design">Graphics Design</NavLink>
                                            <ul className="lab-ul dropdown-menu">
                                               <li><Link to="/service/logo-design">Logo Design</Link></li>
                                               <li><Link to="/service/banner-design">Banner Design</Link></li>
                                               <li><Link to="">Background Removal</Link></li>
                                               <li><Link to="">UI-UX Design</Link></li>
                                            </ul>        
                                            </li>
                                            {/* {
                                                scategories.map((c, i)=>(
                                                    <>
                                                    <li><Link to={`/categorypage/${c.slug}`}>{c.servicecat}</Link>
                                                        <ul className="lab-ul dropdown-menu">
                                                        {c.children.map(subc=>(
                                                             <li><Link to={`/service/${subc.slug}`}>{subc.servicecat}</Link></li>
                                                                ))}

                                                        </ul>
                                                    </li>
                                                    
                                                    </>
                                                    
                                                   
                                                ))
                                            } */}
                                            {/* <li><Link to="">Website Development</Link></li>
                                            <li><Link to="">Website Redesign</Link></li>
                                            <li><Link to="">Ecommerce Development</Link></li>
                                            <li><Link to="">Woocommerce Solutions</Link></li>
                                            <li><Link to="">Apps Development</Link></li>
                                            <li><Link to="">Digital Marketing</Link></li>
                                            <li><Link to="">Software Development</Link></li>
                                            <li><Link to="">Logo Design</Link></li>
                                            <li><Link to="">Data Entry</Link></li>
                                            <li><Link to="https://hostnate.com/">Domain</Link></li>
                                            <li><Link to="https://hostnate.com/">Hosting</Link></li> */}

                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <Link to="/shop" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Package</Link>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><Link to="/ecommerce-packages">Ecommerce Packages</Link></li>
                                            <li><Link to="/woocomerce-packages">Woocommerce Packages</Link></li>
                                            <li><Link to="/school-college-package">School/College Packages</Link></li>
                                            <li><Link to="/news-portal-packages">News Portal Packages</Link></li>
                                            <li><Link to="/ngo-pacakge">Nonprofit/Ngo Packages</Link></li>
                                            <li><Link to="/health-packages">Health Packages</Link></li>
                                            <li><Link to="/technology-packages">Technology Packages</Link></li>
                                            <li><Link to="/realstate-packages">Real Estate Package</Link></li>
                                            <li><Link to="/tour-travel-packages">Tour & Travel Package</Link></li>
                                            <li><Link to="/corporate-packages">Corporate Package</Link></li>
                                            <li><Link to="/personal-packages">Personal Website</Link></li>
                                        </ul>
                                    </li>
                                    {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Hosting</a>
                                        
                                        <ul className="lab-ul dropdown-menu">
                                            <li><a href="https://hostnate.com/shared-hosting" target="_blank">Shared Hosting</a></li>
                                            <li><a href="https://hostnate.com/premium-hosting" target="_blank">Premium Hosting</a></li>
                                            <li><a href="https://hostnate.com/reseller-host" target="_blank">Reseller Hosting</a></li>
                                            <li><a href="https://hostnate.com/wordpress-hosting" target="_blank">Wordpress Hosting</a></li>
                                            <li><a href="https://hostnate.com/vps-hosting" target="_blank">VPS Hosting</a></li>
                                            <li><a href="https://hostnate.com/#" target="_blank">Dedicated Server</a></li>
                                        </ul>
                                    </li> */}
                                    <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Student</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><Link to="/addmission">Student Admission</Link></li>
                                            <li><Link to="/student-feedback">Student Feedback</Link></li>
                                            <li><Link to="/student-support">Student Support </Link></li>
                                            <li><Link to="/student">Admission Help</Link></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Company</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><Link to="/blog">Blog</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                            <li><Link to="/about">About Us</Link></li>
                                            <li><Link to="/gallary">Gallary</Link></li>
                                            <li><Link to="/team">Team</Link></li>
                                            <li><Link to="/">Event</Link></li>
                                            <li><Link to="/news">News</Link></li>
                                            {/* <li><Link to="/faq">FAQ</Link></li> */}
                                        </ul>
                                    </li>
                                    <li><NavLink to="/portfolio2">Portfolio</NavLink></li>
                                    
                                </ul>
                            </div>
                            
                            <Link to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link>
                            <Link to="/signup" className="signup"><i className="icofont-users"></i> <span>SIGN UP</span> </Link>

                            <div className={`header-bar d-lg-none ${menuToggle ? "active" : "" }`} onClick={() => setMenuToggle(!menuToggle)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="ellepsis-bar d-lg-none" onClick={() => setSocialToggle(!socialToggle)}>
                                <i className="icofont-info-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;