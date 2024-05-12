import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import AchievementTwo from "../component/section/achievement-2";
import Blog from "../component/section/blog";
import Instructor from "../component/section/instructor";
import Skill from "../component/section/skill";
import Student from "../component/section/student";




const subTitle = "About Our Tech IT Center";
const title = "Good Qualification Services And Better Skills";
const desc = "Tech IT Center provides professional, quality qualifications and better skills in digital marketing, graphic design, and web development. Our experienced team of experts provides tailored solutions to help our clients meet their business objectives.";

const year = "5+";
const expareance = "Years Of Experiences";



const aboutList = [
    {
        imgUrl: 'assets/images/about/icon/01.jpg',
        imgAlt: 'about Tech IT Center Mission',
        title: 'Our Mission',
        desc: "Our vision is to build an IT Based Human Resource to make Bangladesh Digital through solving unemployment Problem. Bangladesh will occupy the first place in freelancing sector in near future.",
    },
    {
        imgUrl: 'assets/images/about/icon/02.jpg',
        imgAlt: 'about About Tech IT Center Vission',
        title: 'Our Vission',
        desc: "The mission of Tech IT Center is to provide IT Services and Quality training on Information technology through Proper guidance and counseling, collaboration with live marketplace in order to prove self dependent and contribute in Information Technology to top tier domestic and international customers.",
    },
    {
        imgUrl: 'assets/images/about/icon/03.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Training',
        desc: 'Tech IT Center provide variety of skills related to information technology, such as web design, graphics design, digital marketing and apps development. IT training can help individuals stay up-to-date with the latest trends and technologies in the IT field.',
    },
]


const AboutPage = () => {
    return ( 
        <Fragment>
            <Header />
            <PageHeader title={'About Our Tech IT Center'} curPage={'About'} />
            <div className="about-section style-3 padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                        <div className="col">
                            <div className="about-left">
                                <div className="about-thumb">
                                    <img src="assets/images/about/01.jpg" alt="about" />
                                </div>
                                <div className="abs-thumb">
                                    <img src="assets/images/about/02.jpg" alt="about" />
                                </div>
                                <div className="about-left-content">
                                    <h3>{year}</h3>
                                    <p>{expareance}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-right">
                                <div className="section-header">
                                    <span className="subtitle">{subTitle}</span>
                                    <h2 className="title">{title}</h2>
                                    <p>{desc}</p>
                                </div>
                                <div className="section-wrapper">
                                    <ul className="lab-ul">
                                        {aboutList.map((val, i) => (
                                            <li key={i}>
                                                <div className="sr-left">
                                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                </div>
                                                <div className="sr-right">
                                                    <h5>{val.title}</h5>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Student /> */}
            {/* <Instructor /> */}
            <Skill />
            <AchievementTwo />
            <Blog />
            <Footer />
        </Fragment>
    );
}

export default AboutPage;
 