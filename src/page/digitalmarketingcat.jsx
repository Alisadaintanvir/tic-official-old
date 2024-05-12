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


let ProductList = [
    {
        imgUrl: 'https://w0.peakpx.com/wallpaper/717/889/HD-wallpaper-app-development-development-tech-app-mobile.jpg',
        imgAlt: 'Product Thumb',
        title: 'Search Engine Optimize(SEO)',
        slug:'seo'
    },
    {
        imgUrl: 'https://w0.peakpx.com/wallpaper/717/889/HD-wallpaper-app-development-development-tech-app-mobile.jpg',
        imgAlt: 'Product Thumb',
        title: 'Social Media Marketing (SMM)',
        slug:'social-media'
    },
    {
        imgUrl: 'https://w0.peakpx.com/wallpaper/717/889/HD-wallpaper-app-development-development-tech-app-mobile.jpg',
        imgAlt: 'Product Thumb',
        title: 'Digital Advertising',
        slug:'digital-advertise'
    },
    {
        imgUrl: 'https://w0.peakpx.com/wallpaper/717/889/HD-wallpaper-app-development-development-tech-app-mobile.jpg',
        imgAlt: 'Product Thumb',
        title: 'Email Marketing',
        slug:''
    },
    {
        imgUrl: 'https://w0.peakpx.com/wallpaper/717/889/HD-wallpaper-app-development-development-tech-app-mobile.jpg',
        imgAlt: 'Product Thumb',
        title: 'Local Seo Service',
        slug:'local-seo-service'
    },
    
]


const ShopPage = () => {
    const {slug} = useParams();
    console.log(slug);
    const [GridList, setGridList] = useState(true);
    const [services, setService] = useState([]);
    const {getService} = serviceaApi();
    const {serviceCategory} = serviceaApi();
    const {serviceCat, setServiceCat} = useState([])
    const [servicecategory, setServiceCategory] = useState([])
    

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

    useEffect(()=>{
        serviceCategory().then(data=>{
            const category = data;
            setServiceCategory(category.catgory);
        })
    },[])
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Our Service Pages'} curPage={'Service'} />
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`} >
                                    {ProductList.map((val, i) => (
                                        <div className="col-lg-6 col-md-6 col-12" key={i}>
                                            <div className="product-item">
                                                <div className="product-thumb">
                                                    <div className="pro-thumb">
                                                    {/* <Link to={`/shop-single/${val.slug}`}><img src={`${val.imgurl}`} height="700"/></Link> */}
                                                        <img src={`${val.imgUrl}`}/>
                                                    </div>
                                                    <div className="product-action-link">
                                                        <Link to={`/service/${val.slug}`}><i className="icofont-eye"></i></Link>
                                                        <a href="#"><i className="icofont-heart"></i></a>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <h5><Link to={`/service/${val.slug}`}>{val.title}</Link></h5>
                                                    {/* <p className="productRating"><Rating /></p>
                                                    <h6><del style={{color:"#e7e3ea"}}><span style={{color:"#d5c9e0"}} className="me-2">৳{val.orginalPrice} </span></del>৳{val.discountPrice}</h6>
                                                    <a href={val.livedemolink} target="_blank" className="lab-btn me-2"><span>Demo Link</span></a>
                                                    <a href="" target="" class="lab-btn"><span className="">To get Order chat</span></a> */}
                                                </div>
                                            </div>
                                            <div className="product-list-item">
                                                <div className="product-thumb">
                                                    <div className="pro-thumb">
                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                    </div>
                                                    <div className="product-action-link">
                                                        <a href="#"><i className="icofont-eye"></i></a>
                                                        <a href="#"><i className="icofont-heart"></i></a>
                                                        <a href="#"><i className="icofont-cart-alt"></i></a>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <h5><Link to="/shop-single">{val.title}</Link></h5>
                                                    <p className="productRating"><Rating /></p>
                                                    
                                                    <h6>{val.price}</h6>
                                                    <p>{val.desc}</p>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* <Pagination /> */}
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search />
                                <ShopCategory serviceCat = {serviceCat}/>
                                {/* <PopularPost /> */}
                                {/* <Tags /> */}
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