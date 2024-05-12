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


const portfolio = [
    {
      name: "Ecommerce Boi Bajar",
      image:"/assets/images/portfolio/1.jpg",
      category: ["all", "frontend", "ux-ui", "backend"],
    },
    {
      name: "School Manamnet",
      image:"/assets/images/portfolio/2.jpg",
      category: ["all", "mobile", "ux-ui"],
    },
    {
      name: "Wordpress",
      image:"/assets/images/portfolio/3.jpg",
      category: ["all", "frontend"],
    },
    {
      name: "Logo ",
      image:"/assets/images/portfolio/4.jpg",
      category: ["all", "frontend", "ux-ui"],
    },
    {
      name: "Something more",
      image:"/assets/images/portfolio/7.jpg",
      category: ["all", "others"],
    },
  ];

const ShopPage = () => {
    const {slug} = useParams();
    console.log(slug);
    const [GridList, setGridList] = useState(true);
    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState([]);
    const [portfoliofilter, setPortfolio] = useState([]);
    const [portfoliocat, setPortfolocat] = useState([])
  useEffect(() => {
    setProjects(portfolio);
  }, []);
useEffect(()=>{
    fetch(`${API}/portfolio/filter/?protfoliocat=${slug}`)
    .then(res=>res.json())
    .then(data=>setPortfolio(data))
},[slug])

useEffect(()=>{
fetch(`${API}/portfolio/category`)
.then(res=>res.json())
.then(data=>setPortfolocat(data.getportCat))
},[])

  const handleFilter = e =>{
    console.log('test')
  } 
   
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Our Shop Pages'} curPage={'Shop'} />
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                    {
                     portfoliocat.map((cat, i)=>(
                        <div className="col-md-1 border border-warning d-flex justify-content-center align-items-center mb-3">
                            <Link to={`/portfolio/filter/${cat._id}`} active={filter === "all"} className="">
                                {cat.portfoliocat}</Link>
                        </div>
                     ))
                    }
                        <div className="col-lg-12 col-12">
                            
                            <article>
                                <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`} >
                                    {portfoliofilter.map((val, i) => (
                                    
                                       <>
                                        <div className="col-lg-4 col-md-4 col-12" key={i}>
                                            <div className="product-item">
                                                <div className="product-thumb">
                                                    <div className="pro-thumb">
                                                    <Link to=""><img src={`${val.projectimage}`} height="700"/></Link>
                                                    
                                                        {/* <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /> */}
                                                    </div>
                                                    <div className="product-action-link">
                                                        <a href={val.ulr} target="_blank"><i className="icofont-eye"></i></a>
                                                        <a href="#"><i className="icofont-cart-alt"></i></a>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <h5><Link to="">{val.projectname}</Link></h5>
                                                </div>
                                            </div>
                                            <div className="product-list-item">
                                                <div className="product-thumb">
                                                    <div className="pro-thumb">
                                                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                    </div>
                                                    <div className="product-action-link">
                                                        <a href="#"><i className="icofont-eye"></i>demo</a>
                                                        <a href="#"><i className="icofont-heart"></i></a>
                                                        <a href="#"><i className="icofont-cart-alt"></i></a>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <h5><Link to="/shop-single">{val.projectname}</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                       </> 
                                    
                                    ))}
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
 
export default ShopPage;