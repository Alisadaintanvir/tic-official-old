import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const title = "Register Now";
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

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isloggedIn, userIsLoggedIn] = useState(false);


    const handleSignUp = e =>{
        e.preventDefault();
        console.log(email, password);
         createUserWithEmailAndPassword(auth, email, password)
            .then(result=>{
                const signUpUser = result.user;
                console.log(signUpUser)
            })
            .catch(error=>{
                const errorCode = error.message;
                setError(errorCode);
            })
    } 

    const handelEmail = e =>{
        setEmail(e.target.value);
        return;
      }
      const handlePassword = e =>{
        setPassword(e.target.value);
        return;
      }
    return (
        <Fragment>
            <Header />
            <PageHeader title={'Register Now'} curPage={'Sign Up'} />
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form" onSubmit={handleSignUp}>
                            {/* <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="User Name"
                                />
                            </div> */}
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email" onBlur={handelEmail}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="password"
                                    placeholder="Password" onBlur={handlePassword}
                                />
                            </div>
                            {/* <div className="form-group">
                                <input
                                    type="text"
                                    name="password"
                                    placeholder="Confirm Password"
                                />
                            </div> */}
                            <div className="form-group">
                                <button className="lab-btn"><span>{btnText}</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <span className="d-block cate pt-10">Are you a member? <Link to="/login">Login</Link></span>
                            <span className="or"><span>or</span></span>
                            <h5 className="subtitle">{socialTitle}</h5>
                            <ul className="lab-ul social-icons justify-content-center">
                                {socialList.map((val, i) => (
                                    <li key={i}>
                                        <a href={val.link} className={val.className}><i className={val.iconName}></i></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}
 
export default SignupPage;