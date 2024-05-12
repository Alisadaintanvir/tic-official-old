import { useRef } from "react";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import courseApi from "../api/courseApi";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import { API } from "../config";



const title = "Addmission Now";
const socialTitle = "Register With Social Media";
const btnText = "Get Started Now";


let socialList = [
    {
        link: '#',
        iconName: 'icofont-facebook',
        className: 'facebook',
    },
    {
        link: '#',
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        link: '#',
        iconName: 'icofont-linkedin',
        className: 'linkedin',
    },
    {
        link: '#',
        iconName: 'icofont-instagram',
        className: 'instagram',
    },
    {
        link: '#',
        iconName: 'icofont-pinterest',
        className: 'pinterest',
    },
]


const AddmissionPage = () => {
    const [courses, setCourses] = useState([])
    const [isLoading, setIsloading] = useState(false);
    const {getAllCourse} = courseApi();
    const [sucess, setSucess] = useState(false)
    const [error, setError] = useState(false)
    useEffect(()=>{
        getAllCourse().then(data=>setCourses(data))
    },[])

    const nameRef = useRef();
    const emailRef= useRef();
    const phoneRef = useRef();
    const courseRef = useRef();
    const addressRef = useRef();
    const tranNumberRef = useRef();
    const transitioncodeRef = useRef();

    const handleEnroll = e =>{
        const fullname = nameRef.current.value;
        const email= emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const coursename = courseRef.current.value;
        const transactionnumber = tranNumberRef.current.value;
        const transactioncode = transitioncodeRef.current.value;

        const addmissionInfo = {
            fullname, address, email, phone, coursename, transactionnumber, transactioncode
        }
         fetch(`${API}/enroll/course`,{
                method:"POST",
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(addmissionInfo)
            })
                .then(res=>res.json())
                .then(data=>{
                    if(data.errors){
                    setError(true)
                    } else{
                    setError(false)
                    setSucess(true)
                    toast.success("Addmission Success! Wait for Confirmation")
                    e.target.reset();
                    }
        })
        e.preventDefault();
        console.log(addmissionInfo)
        
    }

    const successMessage = ()=>{
        if(error){
           return(
             <p className="" style={{color:"red"}}>Somethig is Wrong! Please Try Again</p>
           )
        }
    }
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Addmission Now'} curPage={'Addmission Now'} />
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <ToastContainer />
                        {successMessage()}
                        <form className="account-form" onSubmit={handleEnroll}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="User Name*"
                                    ref = {nameRef}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    ref={emailRef}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Phone*"
                                    ref={phoneRef}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <select className="form-select" ref={courseRef} aria-label="Default select example">
                                <option selected>Select Course*</option>
                                {
                                    courses.map((course, i)=>(
                                        <option value={course._id} key={i}>{course.coursetitle}</option>
                                    ))
                                }
                                </select>
                            </div>
                            
                                <div className="form-group">
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Full Adress"
                                    ref = {addressRef}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    name=""
                                    ref = {tranNumberRef}
                                    placeholder="Bksh, Nagad, etc Number (If Payment by this Method)"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="password"
                                    ref={transitioncodeRef}
                                    placeholder= "Transition Code (Optional)"
                                />
                            </div>
                            <div className="form-group">
                                <button className="lab-btn"><span>{btnText}</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <div className="row">
                            <h6 className="subtitle">যে সকল নাম্বারে আমরা টাকা গ্রহণ করি। (পার্সোনাল)</h6>
                                <div className="col-md-4">
                                    <div className="account">
                                         <img src="/assets/images/shop/bkash-bn-pink.jpg" className="" style={{borderRadius: "10px"}} alt="" />
                                         <p>01712841777</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="account">
                                         <img src="/assets/images/shop/Nagad.png" className="" style={{borderRadius: "10px"}} alt="" />
                                         <p>01712841777</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="account">
                                         <img src="/assets/images/shop/roket.png" className="" style={{borderRadius: "10px"}} alt="" />
                                         <p>017128417771</p>
                                    </div>
                                </div>
                            </div>
                            {/* <span className="d-block cate pt-10">Are you a member? <Link to="/login">Login</Link></span>
                            <span className="or"><span>or</span></span>
                            <h5 className="subtitle">{socialTitle}</h5> */}
                            {/* <ul className="lab-ul social-icons justify-content-center">
                                {socialList.map((val, i) => (
                                    <li key={i}>
                                        <a href={val.link} className={val.className}><i className={val.iconName}></i></a>
                                    </li>
                                ))}
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
 
export default AddmissionPage;