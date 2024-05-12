


const subTitle = "Symbol of Learning & Earing";
const title = <h3 className="title"><span className="d-lg-block">Build Skills</span>With Experts Any  <span className="d-lg-block">Time, Anywhere</span></h3>;
const desc = "Free online courses from the world’s Leading experts. join 16K+ Learners today.";


const catagoryList = [
    {
        name: 'Digital Marketting',
        link: '#',
    },
    {
        name: 'Web Development',
        link: '#',
    },
    {
        name: 'Graphics Design',
        link: '#',
    },
]


const shapeList = [
    {
        name: '6K Students Happy',
        link: '#',
        className: 'ccl-shape shape-1',
    },
    {
        name: '45+ Total Courses',
        link: '#',
        className: 'ccl-shape shape-2',
    },
    {
        name: '92% Successful Students',
        link: '#',
        className: 'ccl-shape shape-3',
    },
    {
        name: '16K+ Learners',
        link: '#',
        className: 'ccl-shape shape-4',
    },
    {
        name: '1000+ Client',
        link: '#',
        className: 'ccl-shape shape-5',
    },
]

const Banner = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xxl-5 col-xl-6 col-lg-10">
                            <div className="banner-content">
                                <h6 className="subtitle text-uppercase fw-medium">{subTitle}</h6>
                                {title}
                                <p className="desc">{desc}</p>
                                <form action="/">
                                    <div className="banner-icon">
                                        <i className="icofont-search"></i>
                                    </div>
                                    <input type="text" placeholder="Keywords of your course" />
                                    <button type="submit">Search Course</button>
                                </form>
                                <div className="banner-catagory d-flex flex-wrap">
                                    <p>Popular : </p>
                                    <ul className="lab-ul d-flex flex-wrap">
                                        {catagoryList.map((val, i) => (
                                            <li key={i}><a href={val.link}>{val.name}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-6">
                            <div className="banner-thumb">
                                <img src="assets/images/banner/19197587.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-shapes"></div>
            <div className="cbs-content-list d-none">
                <ul className="lab-ul">
                    {shapeList.map((val, i) => (
                        <li className={val.className} key={i}><a href={val.link}>{val.name}</a></li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
 
export default Banner;