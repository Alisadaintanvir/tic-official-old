import { Component, Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import courseApi from "../api/courseApi";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Loader from "../component/section/Loader";
import GroupSelect from "../component/sidebar/group-select";
import Rating from "../component/sidebar/rating";
import SkillSelect from "../component/sidebar/skill-select";
import { API } from "../config";

const courseList = [
  {
    imgUrl: "assets/images/course/01.jpg",
    imgAlt: "course rajibraj91 rajibraj",
    price: "$30",
    cate: "Adobe XD",
    reviewCount: "03 reviews",
    title: "Fundamentals of Adobe XD Theory Learn New",
    totalLeson: "18x Lesson",
    schdule: "Online Class",
    authorImgUrl: "assets/images/course/author/01.jpg",
    authorImgAlt: "course author rajibraj91 rajibraj",
    authorName: "William Smith",
    btnText: "Read More",
  },
];

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [visible, setIsvisible] = useState(6);
  const { getAllCourse } = courseApi();

  useEffect(() => {
    getAllCourse().then((data) => {
      setCourses(data);
      setIsloading(true);
    });
  }, []);

  const loadMoreCourse = (e) => {
    setIsvisible((prevValue) => prevValue + 3);
  };

  return (
    <Fragment>
      <Header />
      <PageHeader title={"Archives: Courses"} curPage={"Course Page"} />
      <GroupSelect />
      {!isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="course-section padding-tb section-bg">
          <div className="container">
            <div className="section-wrapper">
              <div className="course-showing-part">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="course-showing-part-left">
                    <p>Showing 1-6 of 10 results</p>
                  </div>
                  <div className="course-showing-part-right d-flex flex-wrap align-items-center">
                    <span>Sort by :</span>
                    <div className="select-item">
                      <SkillSelect select={"all"} />
                      <div className="select-icon">
                        <i className="icofont-rounded-down"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
                {courses.slice(0, visible).map((val, i) => (
                  <div className="col" key={i}>
                    <div className="course-item">
                      <div className="course-inner">
                        <div className="course-thumb">
                          <Link to={`/course-single/${val.slug}`}>
                            <img
                              src={`${API}/course/thumbnail/${val._id}`}
                              alt="courseImage"
                            />
                          </Link>
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
                          <Link to={`/course-single/${val.slug}`}>
                            <h4>{val.coursetitle}</h4>
                          </Link>
                          <div className="course-details">
                            <div className="couse-count">
                              <i className="icofont-video-alt"></i>{" "}
                              {val.courselession}
                            </div>
                            <div className="couse-topic">
                              <i className="icofont-signal"></i>{" "}
                              {val.coursetime}
                            </div>
                          </div>
                          <div className="course-footer">
                            <div className="course-author">
                              <img
                                src="/assets/images/course/author/03.jpg"
                                alt={`${val.authorImgAlt}`}
                              />
                              <Link to="/team-single" className="ca-name">
                                {val.instructor}
                              </Link>
                            </div>
                            <div className="course-btn">
                              <Link
                                to="/course-single"
                                className="lab-btn-text"
                              >
                                Read More{" "}
                                <i className="icofont-external-link"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={loadMoreCourse}
                  className="lab-btn  mt-5 mx-auto"
                  style={{ color: "white" }}
                >
                  Load More
                </button>
              </div>

              {/* <Pagination /> */}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </Fragment>
  );
};

export default CoursePage;
