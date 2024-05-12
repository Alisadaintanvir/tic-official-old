import { useEffect } from "react";
import { Component, Fragment, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import GoogleMap from "../component/sidebar/googlemap";
import { API } from "../config";


const ContactPage = () => {
	const [gallary, setGallary] = useState([])
	useEffect(()=>{
		fetch(`${API}/gallary`)
		.then(res=>res.json())
		.then(data=>setGallary(data))
	},[])
	const style={
		width: "500px",
		cursor: 'pointer',
		objectFit: 'cover',
		 width: '100%',
		maxHeight: '100%',
		height: "700px",
		padding: { top: 20, bottom: 40, left: 100, right: 100 },
	}
    return ( 
        <Fragment>
            <Header />
            <PageHeader title={'Our Activity Summary'} curPage={'gallary'} />
				<div className="container py-5">
					<div className="heading text-center">
						<h2>Photo Gallary</h2>
						<p>Our activity</p>
					</div>
					<div className="row py-5">
						<Gallery>
							<div className="gallary" style={style}>
							{
								gallary.map((gal, i)=>(
									<Item original={`${gal.imgUrl}`} className="ms-2 my-2" thumbnail={`${gal.imgUrl}`} width="1600" height="1600" >
								{({ ref, open }) => (
								<img ref={ref} onClick={open} src={`${gal.imgUrl}`} alt={`${gal.imgAlt}`} />
							)}
							</Item>
								))
							}
							{/* <Item original="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg" className="ms-2" 
							thumbnail="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg" width="1600" height="1600" >
								{({ ref, open }) => (
								<img ref={ref} onClick={open} src="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg" />
							)}
							</Item>
							<Item original="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"
							thumbnail="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg" width="1600" height="1600">
								{({ ref, open }) => (
								<img ref={ref} onClick={open} src="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg" />
							)}
							</Item>
						
							<Item original="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg"
							thumbnail="https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg" width="1600" height="1600">
								{({ ref, open }) => (
								<img ref={ref} onClick={open} src="https://farm4.staticflickr.com/3894/15008518202_c265dfa55f_h.jpg" />
							)}
							</Item> */}
							</div>
						</Gallery>
					</div>
				</div>
            <Footer />
        </Fragment>
    );
}



export default ContactPage;