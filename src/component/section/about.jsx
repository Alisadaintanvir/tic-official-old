


const subTitle = "About Tech IT Center";
const title = "Good Qualification Services And Better Skills";
const desc = "Tech IT Center provides professional, quality qualifications and better skills in digital marketing, graphic design, and web development. Our experienced team of experts provides tailored solutions to help our clients meet their business objectives.";



const aboutList = [
    {
        imgUrl: 'assets/images/about/icon/01.jpg',
        imgAlt: 'about icon Tech IT Center',
        title: 'Skilled Instructors',
        desc: 'Our experienced instructors provide hands-on instruction and guidance to help the student reach their goals.',
    },
    {
        imgUrl: 'assets/images/about/icon/02.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Get Certificate',
        desc: 'Tech IT Center offers an online course that provides a Certificate of Completion',
    },
    {
        imgUrl: 'assets/images/about/icon/03.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Online Classes',
        desc: 'Tech IT Center offers online classes to help students learn and gain knowledge in a convenient and flexible way.',
    },
]


const About = () => {
    return (
        <div className="about-section">
            <div className="container">
                <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-end flex-row-reverse">
                    <div className="col">
                        <div className="about-right padding-tb">
                            <div className="section-header">
                                <span className="subtitle">{subTitle}</span>
                                <h2 className="title">{title}</h2>
                                <p className="text-justify" style={{textAlign: "justify"}}>{desc}</p>
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
                    <div className="col">
                        <div className="about-left">
                            <div className="about-thumb">
                                <img src="assets/images/about/01.png" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;