import React from 'react';

const Qouate = () => {
    const qoute = {
        background:"#DCE1E4",
        padding:"20px"
    }
    return (
        <>
           <div className="qoute mt-5 text-center" style={qoute}>
              <h3>Have queries? Our team are always ready to help you.</h3>
              <h4 className='' style={{color:"green"}}>Tell us about your requirements. Start your project today!</h4>
              <a href="#" class="lab-btn"><span>Contact Us</span></a>
            </div> 
        </>
    );
};

export default Qouate;