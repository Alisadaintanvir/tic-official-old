import { Component, Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import courseApi from "../api/courseApi";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Loader from "../component/section/Loader";
import GroupSelect from "../component/sidebar/group-select";
import Pagination from "../component/sidebar/pagination";
import Rating from "../component/sidebar/rating";
import SkillSelect from "../component/sidebar/skill-select";
import { API } from "../config";



const courseList = [
    {
        imgUrl: 'assets/images/course/01.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Fundamentals of Adobe XD Theory Learn New',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/01.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'William Smith',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/02.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Certified Graphic Design with Free Project Course',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/02.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Lora Smith',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/03.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Theory Learn New Student And Fundamentals',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/03.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Robot Smith',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/04.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Computer Fundamentals Basic Startup Ultricies Vitae',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/04.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Zinat Zaara',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/05.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Boozy Halloween Drinks for the Grown Eleifend Kuismod',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/05.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Rajib Raj',
        btnText: 'Read More',
    },
    {
        imgUrl: 'assets/images/course/06.jpg',
        imgAlt: 'course rajibraj91 rajibraj',
        price: '$30',
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
        title: 'Student Want to Learn About Science And Arts',
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/06.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Angel Mili',
        btnText: 'Read More',
    },
]


const CourseByCategory = () => {
    const {slug} = useParams();
    const [courses, setCourses] = useState([])
    const [isLoading, setIsloading] = useState(false);
    const {getAllCourse} = courseApi();
    useEffect(()=>{
        getAllCourse().then(data=>{
            setIsloading(data)
            const allcourse = data;
            const categoryItems = allcourse.filter(item => item.coursecat.slug === slug);
            setCourses(categoryItems)
           
        })
    },[slug])

    
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Archives: Courses'} curPage={'Course Page'} />
            <GroupSelect />
           {
            !isLoading ? <Loader></Loader> :  <div className="course-section padding-tb section-bg">
            <div className="container">
                <div className="section-wrapper">
                    <div className="course-showing-part">
                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                            
                            <div className="course-showing-part-right d-flex flex-wrap align-items-center">
                                <span>Sort by :</span>
                                <div className="select-item">
                                    <SkillSelect select={'all'} />
                                    <div className="select-icon">
                                        <i className="icofont-rounded-down"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
                        {courses.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-thumb">
                                            
                                        <Link to={`/course-single/${val.slug}`}><img src={`${API}/course/thumbnail/${val._id}`}/></Link>
                                        </div>
                                        <div className="course-content">
                                            <div className="course-price">{val.offlinePrice}</div>
                                            <div className="course-category">
                                                <div className="course-cate">
                                                    <a href="#">{val.coursecat.title}</a>
                                                </div>
                                                <div className="course-reiew">
                                                    <Rating />
                                                    {/* <span className="ratting-count"> {val.reviewCount}</span> */}
                                                </div>
                                            </div>
                                            <Link to={`/course-single/${val.slug}`}><h4>{val.coursetitle}</h4></Link>
                                            <div className="course-details">
                                                <div className="couse-count"><i className="icofont-video-alt"></i> {val.courselession}</div>
                                                <div className="couse-topic"><i className="icofont-signal"></i> {val.coursetime}</div>
                                            </div>
                                            <div className="course-footer">
                                                <div className="course-author">
                                                    <img src='/assets/images/course/author/03.jpg' alt={`${val.authorImgAlt}`} />
                                                    <Link to="/team-single" className="ca-name">{val.instructor}</Link>
                                                </div>
                                                <div className="course-btn">
                                                    <Link to="/course-single" className="lab-btn-text">Read More <i className="icofont-external-link"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <Pagination /> */}
                </div>
            </div>
        </div>
           }
            <Footer />
        </Fragment>
    );
}
 
export default CourseByCategory;