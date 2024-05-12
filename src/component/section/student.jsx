
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../config";
import Rating from "../sidebar/rating";


const subTitle = "Loved by 200,000+ students";
const title = "Students Community Feedback";


const studentList = [
    {
        imgUrl: 'assets/images/feedback/student/01.jpg',
        imgAlt: 'student rajibraj91 rajibraj',
        name: 'Oliver Beddows',
        degi: 'UX designer',
        desc: 'Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze',
    },
    {
        imgUrl: 'assets/images/feedback/student/02.jpg',
        imgAlt: 'student rajibraj91 rajibraj',
        name: 'Madley Pondor',
        degi: 'UX designer',
        desc: 'Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze',
    },
]


const Student = () => {
    const [stories, setStory] = useState([])
    useEffect(()=>{
        fetch(`${API}/sstory/`)
        .then(res=>res.json())
        .then(data=>setStory(data))
    }, [])

    return (
        <div className="student-feedbak-section padding-tb shape-img">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row justify-content-center row-cols-lg-2 row-cols-1">
                        <div className="col">
                            <div className="sf-left">
                                <div className="sfl-thumb">
                                    <img src="assets/images/feedback/01.jpg" alt="student feedback" />
                                    <a href="https://www.youtube.com/watch?v=CevGjeuSGoQ&feature=youtu.be" className="video-button popup" target="_blank"><i className="icofont-ui-play"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            {stories.map((val, i) => (
                                <div className="stu-feed-item" key={i}>
                                    <div className="stu-feed-inner">
                                        <div className="stu-feed-top">
                                            <div className="sft-left">
                                                <div className="sftl-thumb">
                                                    <img src={`${API}/sstroy/thumbnail/${val._id}`} width="40" />
                                                </div>
                                                <div className="sftl-content">
                                                    <Link to="/team-single"><h6>{val.sname}</h6></Link>
                                                    <span>{val.sdesignation}</span>
                                                </div>
                                            </div>
                                            <div className="sft-right">
                                                <Rating />
                                            </div>
                                        </div>
                                        <div className="stu-feed-bottom">
                                            <p>{val.sdescription}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Student;