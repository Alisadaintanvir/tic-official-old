
import {BrowserRouter, Routes, Route } from "react-router-dom";
import 'swiper/css';


import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import AboutPage from "./page/about";
import AddmissionPage from "./page/addmission";
import BlogPage from "./page/blog";
import BlogPageTwo from "./page/blog-2";
import BlogPageThree from "./page/blog-3";
import BlogSingle from "./page/blog-single";
import CartPage from "./page/cart-page";
import ContactPage from "./page/contact";
import CoursePage from "./page/course";
import CourseSingle from "./page/course-single";
import CourseByCategory from "./page/coursebycategory";
import ForgetPass from "./page/forgetpass";
import Home from "./page/home";
import HomeTwo from "./page/home-2";
import HomeThree from "./page/home-3";
import HomeFour from "./page/home-4";
import HomeFive from "./page/home-5";
import HomeSix from "./page/home-6";
import HomeSeven from "./page/home-7";
import InstructorPage from "./page/instructor";
import LoginPage from "./page/login";
import SearchNone from "./page/search-none";
import SearchPage from "./page/search-page";
import ShopPage from "./page/shop";
import ShopDetails from "./page/shop-single";
import SignupPage from "./page/signup";
import TeamPage from "./page/team";
import TeamSingle from "./page/team-single";
import SchoolCollege from "./page/schoolcollege";
import NewsPortal from "./page/newspackage";
import HealthPackage from "./page/healthpackage";
import NgoPakage from "./page/ngopackage";
import Ecommerce from "./page/ecommercepackage";
import WooCommerce from "./page/woocmercepackage";
import TechnologyPackage from "./page/technologypackage";
import ReatStatePack from "./page/realstatepackage"
import TourTravelPack from "./page/tourpackage"
import CorporatePacakge from "./page/corporatepack"
import Portfolio from "./page/portfolio"
import PersonalPack from "./page/personalpack"
import ServiceByCat from "./page/servicecat"
import FAQ from "./page/faq"
import CategoryPage from "./page/categorydesign"
import Portfoliotwo from "./page/portfloiotow"
import PortfolioFilter from "./page/portfoliofilter"
import Gallary from "./page/gallery"
import StudentHelp from "./page/studenthelp"
import StudentSupprot from "./page/studentsupport"
import StudentFeedback from "./page/studentfeedback"
import NewsPage from "./page/news"
import WebDesign from "./page/webdesign"
import EcommerceWebDes from "./page/ecommercewebdes"
import PsdToHtml from "./page/psdtohtml"
import WebsiteRedesign from "./page/websiteredisgn"
import BlogWebDeve from "./page/blogdevelopment"
import PhpWebDev from "./page/phpapplication"
import MobileApp from "./page/mobileapplication"
import EcommereceApp from "./page/ecommerce-application"
import CustomApplicaiton from "./page/customapplication"
import ERPApplication from "./page/erpapplication"
import LogoDesign from "./page/logodesign"
import SeoPage from "./page/seo"
import SocialMedia from "./page/socialmedia"
import LocalSeo from "./page/localseoservice"
import DomainRegister from "./page/domainregister"
import EmailServer from "./page/emailserver"
import DnsService from "./page/dnsservice"
import InstallationService from "./page/installationservice"
import Maintenance from "./page/webiste-maintaince"
import BannerDesign from "./page/bannerdesign"
import DigitalAdvertise from "./page/digitaladvertise"
import WebDesignCat from "./page/webdesigncat"
import DigitalMarketing from "./page/digitalmarketingcat"
import WebDevelopmentCat from "./page/webdevelopment"
import GraphicsDesign from "./page/graphicsdesign"
import DomainService from "./page/domaincat"
import NewsSingle from "./page/news-ingle"
import { TOSPage } from "./page/tos";

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="index-2" element={<HomeTwo />} />
				<Route path="index-3" element={<HomeThree />} />
				<Route path="index-4" element={<HomeFour />} />
				<Route path="index-5" element={<HomeFive />} />
				<Route path="index-6" element={<HomeSix />} />
				<Route path="index-7" element={<HomeSeven />} />
				<Route path="course/:slug" element={<CourseByCategory/>} />
				<Route path="course" element={<CoursePage />} />
				<Route path="course-single/:slug" element={<CourseSingle />} />
				<Route path="blog" element={<BlogPage />} />
				<Route path="news-single/:slug" element={<NewsSingle />} />
				<Route path="news" element={<NewsPage />} />
				<Route path="blog-2" element={<BlogPageTwo />} />
				<Route path="blog-3" element={<BlogPageThree />} />
				<Route path="blog-single/:slug" element={<BlogSingle />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="team" element={<TeamPage />} />
				<Route path="team-single" element={<TeamSingle />} />
				<Route path="instructor" element={<InstructorPage />} />
				<Route path="shop" element={<ShopPage />} />
				<Route path="/service/:slug" element={<ServiceByCat />} />
				<Route path="shop-single/:slug" element={<ShopDetails />} />
				<Route path="cart-page" element={<CartPage />} />
				<Route path="search-page" element={<SearchPage />} />
				<Route path="search-none" element={<SearchNone />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="signup" element={<SignupPage />} />
				<Route path="addmission" element={<AddmissionPage/>}/>
				<Route path="health-packages" element={<HealthPackage/>}/>
				<Route path="ngo-pacakge" element={<NgoPakage/>}/>
				<Route path="school-college-package" element={<SchoolCollege/>}/>
				<Route path="news-portal-packages" element={<NewsPortal/>}/>
				<Route path="ecommerce-packages" element={<Ecommerce/>}/>
				<Route path="woocomerce-packages" element={<WooCommerce/>}/>
				<Route path="technology-packages" element={<TechnologyPackage/>}/>
				<Route path="realstate-packages" element={<ReatStatePack/>}/>
				<Route path="tour-travel-packages" element={<TourTravelPack/>}/>
				<Route path="corporate-packages" element={<CorporatePacakge/>}/>
				<Route path="personal-packages" element={<PersonalPack/>}/>
				<Route path="category/:slug" element={<ServiceByCat/>}/>
				<Route path="faq" element={<FAQ/>}/>
				<Route path="faq" element={<FAQ/>}/>
				<Route path="portfolio" element={<Portfolio/>}/>
				<Route path="/portfolio/filter/:slug" element={<PortfolioFilter/>}/>
				<Route path="portfolio2" element={<Portfoliotwo/>}/>
				<Route path="forgetpass" element={<ForgetPass />} />
				<Route path="gallary" element={<Gallary/>}/>
				<Route path="student" element={<StudentHelp/>}/>
				<Route path="service/webdesign" element = {<WebDesign/>}/>
				<Route path="service/web-development" element = {<WebDevelopmentCat/>}/>
				<Route path="service/digital-marketing" element = {<DigitalMarketing/>}/>
				<Route path="service/graphics-design" element = {<GraphicsDesign/>}/>
				<Route path="service/web-design" element = {<WebDesignCat/>}/>
				<Route path="service/domain-service" element = {<DomainService/>}/>
				<Route path="service/psdtohmtl" element = {<PsdToHtml/>}/>
				<Route path="service/ecommerce-design" element = {<EcommerceWebDes/>}/>
				<Route path="service/website-redesign" element = {<WebsiteRedesign/>}/>
				<Route path="service/blog-webdevelopment" element = {<BlogWebDeve/>}/>
				<Route path="service/php-application" element = {<PhpWebDev/>}/>
				<Route path="service/mobile-application" element = {<MobileApp/>}/>
				<Route path="service/ecommerce-application" element = {<EcommereceApp/>}/>
				<Route path="service/custom-application" element = {<CustomApplicaiton/>}/>
				<Route path="service/erp-application" element = {<ERPApplication/>}/>
				<Route path="service/logo-design" element = {<LogoDesign/>}/>
				<Route path="service/banner-design" element = {<BannerDesign/>}></Route>
				<Route path="student-support" element={<StudentSupprot/>}/>
				<Route path="student-feedback" element={<StudentFeedback/>}/>
				<Route path="service/seo" element={<SeoPage/>}/>
				<Route path="service/social-media" element={<SocialMedia/>}/>
				<Route path="service/local-seo-service" element={<LocalSeo/>}/>
				<Route path="service/domainer-register" element = {<DomainRegister/>}/>
				<Route path="service/email-server" element = {<EmailServer/>}/>
				<Route path="service/dns-service" element={<DnsService/>}/>
				<Route path="service/digital-advertise" element={<DigitalAdvertise/>}/>
				<Route path="service/website-maintance" element={<Maintenance/>}/>
				<Route path="service/installation-service" element={<InstallationService/>}></Route>
				<Route path="term-and-condition" element={<TOSPage/>}></Route>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
