import { useEffect } from "react";
import { Component, Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
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


const showResult = "Showing 01 - 12 of 139 Results";


const ShopPage = () => {
    const [GridList, setGridList] = useState(true);
    const [services, setService] = useState([]);
    const {getService} = serviceaApi();
    const {serviceCategory} = serviceaApi();
    const {serviceCat, setServiceCat} = useState([])
    

    useEffect(()=>{
        getService().then(data=>setService(data))
    },[])

    useEffect(()=>{
        serviceCategory().then(data=>setServiceCat(data))
    },[])
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Our Shop Pages'} curPage={'Shop'} />
            dsaf dsfad dsafd dsaf<div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>{showResult}</p>
                                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`} >
                                        <a className="grid" onClick={() => setGridList(!GridList)}><i className="icofont-ghost"></i></a>
                                        <a className="list" onClick={() => setGridList(!GridList)}><i className="icofont-listine-dots"></i></a>
                                    </div>
                                </div>
                                <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`} >
                                    {services.map((val, i) => (
                                        <div className="col-lg-6 col-md-6 col-12" key={i}>
                                            <div className="product-item">
                                                <div className="product-thumb">
                                                    <div className="pro-thumb">
                                                    <Link to={`/shop-single/${val.slug}`}><img src={`${val.imgurl}`} height="700"/></Link>
                                                        {/* <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /> */}
                                                    </div>
                                                    <div className="product-action-link">
                                                        <a href="#"><i className="icofont-eye"></i></a>
                                                        <a href="#"><i className="icofont-heart"></i></a>
                                                        <a href="#"><i className="icofont-cart-alt"></i></a>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <h5><Link to="">{val.servicetitle}</Link></h5>
                                                    <p className="productRating"><Rating /></p>
                                                    <h6><del style={{color:"#e7e3ea"}}><span style={{color:"#d5c9e0"}} className="me-2">৳{val.orginalPrice} </span></del>৳{val.discountPrice}</h6>
                                                    <Link to="" target="_blank" className="lab-btn me-2"><span>Details</span></Link>
                                                    <a href="" target="" class="lab-btn"><span className="">To get Order chat</span></a>
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
                                <Pagination />
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