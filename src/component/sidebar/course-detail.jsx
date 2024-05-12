
import { Link, useParams } from "react-router-dom";

const price = "89";
const excenge = "Limited time offer";
const paymentTitle = "Secure Payment:";
const shareTitle = "Share This Course:";
const btnText = "Enrolled Now";


const csdcList = [
    {
        iconName: 'icofont-ui-alarm',
        leftText: 'Course level',
        rightText: 'Beginner',
    },
    {
        iconName: 'icofont-book-alt',
        leftText: 'Course Duration',
        rightText: '10 week',
    },
    {
        iconName: 'icofont-signal',
        leftText: 'Online Class',
        rightText: '08',
    },
    {
        iconName: 'icofont-video-alt',
        leftText: 'Lessions',
        rightText: '18x',
    },
    {
        iconName: 'icofont-abacus-alt',
        leftText: 'Quizzes',
        rightText: '0',
    },
    {
        iconName: 'icofont-hour-glass',
        leftText: 'Pass parcentages',
        rightText: '80',
    },
    {
        iconName: 'icofont-certificate',
        leftText: 'Certificate',
        rightText: 'Yes',
    },
    {
        iconName: 'icofont-globe',
        leftText: 'Language',
        rightText: 'English',
    },
]

const socialList = [
    {
        siteLink: '#',
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        siteLink: '#',
        iconName: 'icofont-vimeo',
        className: 'vimeo',
    },
    {
        siteLink: '#',
        iconName: 'icofont-rss',
        className: 'rss',
    },
]

const CourseSideDetail = ({courseDetails}) => {
    const {offlinePrice, courselevel, instructor, coursetime, courselession, onlinePrice} = courseDetails;
    return (
        <div className="course-side-detail">
            <div className="csd-title">
                <div className="csdt-left">
                    <h4 className="mb-0"><sup>৳</sup>{offlinePrice}</h4>
                </div>
                <div className="csdt-right">
                    <p className="mb-0"><i className="icofont-clock-time"></i>{excenge}</p>
                </div>
            </div>
            <div className="csd-content">
                <div className="csdc-lists">
                    <ul className="lab-ul">
                    <li>
                        <div className="csdc-left"><i className="icofont-ui-alarm"></i>Course level</div>
                        <div className="csdc-right">{courselevel}</div>
                     </li>
                     <li>
                        <div className="csdc-left"><i className="icofont-book-alt"></i>Course Duration</div>
                        <div className="csdc-right">{coursetime}</div>
                     </li>
                     <li>
                        <div className="csdc-left"><i className="icofont-signal"></i>Class</div>
                        <div className="csdc-right">{courselession}</div>
                     </li>
                     <li>
                        <div className="csdc-left"><i className="icofont-video-alt"></i>Type</div>
                        <div className="csdc-right">Offline-Online</div>
                     </li>
                     
                     <li>
                        <div className="csdc-left"><i className="icofont-certificate"></i>Cirtificate</div>
                        <div className="csdc-right">Yes</div>
                     </li>
                     <li>
                        <div className="csdc-left"><i className="icofont-globe"></i>Language</div>
                        <div className="csdc-right">Bangla</div>
                     </li>
                     <li>
                        <div className="csdc-left"><i className="icofont-abacus-alt"></i>Quize</div>
                        <div className="csdc-right">Yes</div>
                     </li>
                     <li>
                        <div className="csdc-left"><i className="icofont-abacus-alt"></i>Assignmet Per Class</div>
                        <div className="csdc-right">Yes</div>
                     </li>
                        {/* {csdcList.map((val, i) => (
                            <li key={i}>
                                <div className="csdc-left"><i className={val.iconName}></i>{val.leftText}</div>
                                <div className="csdc-right">{val.rightText}</div>
                            </li>
                        ))} */}
                    </ul>
                </div>
                <div className="sidebar-payment">
                    <div className="sp-title">
                        <h6>{paymentTitle}</h6>
                    </div>
                    <div className="sp-thumb">
                        <img src="/assets/images/pyment/01.jpg" alt="Tech IT Center" />
                    </div>
                </div>
                <div className="sidebar-social">
                    <div className="ss-title">
                        <h6>{shareTitle}</h6>
                    </div>
                    <div className="ss-content">
                        <ul className="lab-ul">
                            {socialList.map((val, i) => (
                                <li key={i}><a href={val.siteLink} className={val.className}><i className={val.iconName}></i></a></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="course-enroll">
                    <Link to="/addmission" className="lab-btn"><span>{btnText}</span></Link>
                </div>
            </div>
        </div>
    );
}
 
export default CourseSideDetail;