import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import Loader from "../component/section/Loader"
import PageHeader from "../component/layout/pageheader";
import Pagination from "../component/sidebar/pagination";
import { API } from "../config";


const BlogPage = () => {
    
const [news, setBNews] = useState([])
const [isLoading, setIsLoading] = useState(null);
useEffect(()=>{
    fetch(`${API}/news`)
    .then(res=>res.json())
    .then(data=>{
        setBNews(data);
        setIsLoading(data); 
    })
},[])
    return ( 
        <Fragment>
            <Header />
            <PageHeader title={'Our News Posts'} curPage={'Blog'} />
                {
                    !isLoading ? <Loader></Loader> : <div className="blog-section padding-tb section-bg">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
                                {news.map((val, i) => (
                                    <div className="col" key={i}>
                                        <div className="post-item">
                                            <div className="post-inner">
                                                <div className="post-thumb">
                                                    <Link to={`/news-single/${val.slug}`}><img src={`${val.newsfeatureimg}`} /></Link>
                                                </div>
                                                <div className="post-content">
                                                    <Link to={`/news-single/${val.slug}`}><h4>{val.newstitle}</h4></Link>
                                                    <div className="meta-post">
                                                        {/* <ul className="lab-ul">
                                                            {val.metaList.map((val, i) => (
                                                                <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                            ))}
                                                        </ul> */}
                                                    </div>
                                                    <p>{val.newsdescription.slice(0, 80)}..</p>
                                                </div>
                                                <div className="post-footer">
                                                    <div className="pf-left">
                                                        <Link to={`/news-single/${val.slug}`} className="lab-btn-text">Read More <i className="icofont-external-link"></i></Link>
                                                    </div>
                                                    <div className="pf-right">
                                                        <i className="icofont-comment"></i>
                                                        {/* <span className="comment-count">{val.commentCount}</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </div>
                }
            <Footer />
        </Fragment>
    );
}

export default BlogPage;