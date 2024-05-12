
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../config";

const title = "Most Popular Post";

const postList = [
    {
        imgUrl: 'assets/images/blog/01.jpg',
        imgAlt: 'rajibraj91',
        title: 'Poor People’s Campaign Our Resources',
        date: 'Jun 05,2022',
    },
    {
        imgUrl: 'assets/images/blog/02.jpg',
        imgAlt: 'rajibraj91',
        title: 'Poor People’s Campaign Our Resources',
        date: 'Jun 05,2022',
    },
    {
        imgUrl: 'assets/images/blog/03.jpg',
        imgAlt: 'rajibraj91',
        title: 'Poor People’s Campaign Our Resources',
        date: 'Jun 05,2022',
    },
    {
        imgUrl: 'assets/images/blog/04.jpg',
        imgAlt: 'rajibraj91',
        title: 'Poor People’s Campaign Our Resources',
        date: 'Jun 05,2022',
    },
]

const PopularPostNews = () => {
        
const [blogs, setBlogs] = useState([])
const [isLoading, setIsLoading] = useState(null);
useEffect(()=>{
    fetch(`${API}/news`)
    .then(res=>res.json())
    .then(data=>{
        setBlogs(data);
        setIsLoading(data); 
    })
},[])
    
    return (
        <div className="widget widget-post">
            <div className="widget-header">
                <h5 className="title">{title}</h5>
            </div>
            <ul className="widget-wrapper">
                {blogs.map((val, i) => (
                    <li className="d-flex flex-wrap justify-content-between" key={i}>
                        <div className="post-thumb">
                            <Link to="/blog-single"><img src={`${val.newsfeatureimg}`} /></Link>
                        </div>
                        <div className="post-content">
                            <Link to="/news-single/:slug"><h6>{val.newstitle}</h6></Link>
                            <p>{val.date}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default PopularPostNews;