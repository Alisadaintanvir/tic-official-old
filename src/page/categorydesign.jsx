import { useEffect } from "react";
import { Component, Fragment, useState } from "react";
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
            <PageHeader title={'Category'} curPage={'Category'} />
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-12">
                            <div class="card" style={{width: "22rem"}}>
                            <img src="http://apicdn247.quizbangla.com/application/images/home/bangladesh.png" class="card-img-top" alt="" height={100}/>
                            <div class="card-body">
                                <h3 class="card-text text-center" style={{fontSize: "25px"}}>Ditgial Markeitng</h3>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                        <div class="card" style={{width: "22rem"}}>
                            <img src="http://apicdn247.quizbangla.com/application/images/home/bangladesh.png" class="card-img-top" alt="" height={100}/>
                            <div class="card-body">
                                <h3 class="card-text text-center" style={{fontSize: "25px"}}>Ditgial Markeitng</h3>
                            </div>
                            </div>
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