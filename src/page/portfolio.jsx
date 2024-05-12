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
    const [GridList, setGridList] = useState(true);
    const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
   
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Our Portfolio Pages'} curPage={'Portfolio'} />
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="portfolio__labels">
                            <a href="#" active={filter === "all"} onClick={() => setFilter("all")}>
                                All
                            </a>
                            <a href="#" active={filter === "frontend"} onClick={() => setFilter("frontend")}> Frontend
                            </a>
                            <a href="#" active={filter === "mobile"} onClick={() => setFilter("mobile")}>
                                Mobile
                            </a>
                            <a href="#" active={filter === "ux-ui"} onClick={() => setFilter("ux-ui")}>
                                UX/UI
                            </a>
                            <a href="#" active={filter === "others"} onClick={() => setFilter("others")}> Others
                            </a>
                            <a href="#" active={filter === "backend"} onClick={() => setFilter("backend")}> Backend
                            </a>
                            <a href="#" active={filter === "logo"} onClick={() => setFilter("logo")}> Logo Design
                            </a>
                            </div>
                        <div className="col-lg-12 col-12">
                            
                            <article>
                                <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`} >
                                    {projects.map((val, i) => (
                                        val.filtered === true ?
                                       <>
                                        <div className="col-lg-4 col-md-4 col-12" key={i}>
                                            <div className="product-item">
                                                <div className="product-thumb">
                                                    <div className="pro-thumb">
                                                    <Link to=""><img src={val.image} height="700"/></Link>
                                                        {/* <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} /> */}
                                                    </div>
                                                    <div className="product-action-link">
                                                        <a href="#"><i className="icofont-eye"></i></a>
                                                        <a href="#"><i class="icofont-web"></i></a>
                                                    </div>
                                                </div>
                                                <div className="product-content">
                                                    <h5><Link to="">{val.name}</Link></h5>
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
                                                    <h5><Link to="/shop-single">{val.title}</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                       </> 
                                       : ""
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