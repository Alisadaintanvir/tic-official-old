
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryApi from "../../api/categoryApi";

const subTitle = "Why Choose Us";
const title = "Get Everything for Learning";


const featureList = [
    {
        imgUrl: 'assets/images/feature/01.png',
        imgAlt: 'feature rajibraj91 rajibraj',
        title: 'Book & Library',
        titleSpan: 'Facelities',
        btnText: 'View More',
    },
    {
        imgUrl: 'assets/images/feature/02.png',
        imgAlt: 'feature rajibraj91 rajibraj',
        title: 'Online & Offline',
        titleSpan: 'Courses',
        btnText: 'View More',
    },
    {
        imgUrl: 'assets/images/feature/03.png',
        imgAlt: 'feature rajibraj91 rajibraj',
        title: 'Certification After',
        titleSpan: 'Course Complete',
        btnText: 'View More',
    },
    {
        imgUrl: 'assets/images/feature/04.png',
        imgAlt: 'feature rajibraj91 rajibraj',
        title: 'Professional and',
        titleSpan: 'Ingenious Instructor',
        btnText: 'View More',
    },
    {
        imgUrl: 'assets/images/feature/05.png',
        imgAlt: 'feature rajibraj91 rajibraj',
        title: 'Air Condition Class',
        titleSpan: 'Room',
        btnText: 'View More',
    },
    {
        imgUrl: 'assets/images/feature/06.png',
        imgAlt: 'feature rajibraj91 rajibraj',
        title: 'Best Industry',
        titleSpan: 'Leader',
        btnText: 'View More',
    },
]


const Feature = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {getCategori} = categoryApi();

    useEffect(()=>{
        getCategori().then(data=>setCategories(data))
    },[])

    return (
        <div className="feature-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 justify-content-center">
                        {categories.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="feature-item">
                                    <div className="feature-inner">
                                        <div className="feature-thumb">
                                            <img src={'assets/images/feature/02.png'} alt={`${val.imgAlt}`} />
                                        </div>
                                        <div className="feature-content">
                                            <Link to={`/course/${val.slug}`}><h5>{val.title} <span>{val.titleSpan}</span></h5></Link>
                                            <Link to="/course" className="lab-btn-text">All Course <span></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Feature;