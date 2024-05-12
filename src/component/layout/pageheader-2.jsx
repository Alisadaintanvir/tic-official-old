
import { API } from "../../config";
import Rating from "../sidebar/rating";

const title = "Advanced Adobe Photoshop For Everyone";
const desc = "The most impressive is collection of share me online college courses";
const author = "Rajib Raj";
const reviewCount = "03 reviews";
const videoLink = "https://www.youtube.com/watch?v=CevGjeuSGoQ";


const categoryList = [
    {
        link: '#',
        text: 'Adobe XD',
        className: 'course-cate',
    },
    {
        link: '#',
        text: '30% Off',
        className: 'course-offer',
    },
]


const PageHeaderTwo = ({courseDetails}) => {
    const {coursetitle, coursecat} = courseDetails
    return (
        <div className="pageheader-section style-2">
            <div className="container">
                <div className="row justify-content-center justify-content-lg-between align-items-center flex-row-reverse">
                    <div className="col-lg-7 col-12">
                        <div className="pageheader-thumb">
                        <img src={`${API}/course/thumbnail/${courseDetails._id}`} className="w-100"/>
                        {/* <img src="" alt="rajibraj91" className="w-100" /> */}
                            <a href={videoLink} className="video-button popup" target="_blank"><i className="icofont-ui-play"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-12">
                        <div className="pageheader-content">
                            <div className="course-category">
                                <a href="" className="course-cate"></a>
                            </div>
                            <h2 className="phs-title">{courseDetails.coursetitle}</h2>
                            <p className="phs-desc">{courseDetails.cmetadescription?.slice(0, 80)}</p>
                            <div className="phs-thumb">
                                <img src="/assets/images/pageheader/01.png" alt="rajibraj91" />
                                <span>{courseDetails.instructor}</span>
                                <div className="course-reiew">
                                    <Rating />
                                    {/* <span className="ratting-count">{reviewCount}</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PageHeaderTwo;