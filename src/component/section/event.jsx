import { useEffect, useState } from "react";
import eventsApi from "../../api/eventsApi";
import { API } from "../../config";


const subTitle = "Don’t Miss the Day";
const title = "Upcomming Events";
const desc = "Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn";


const eventListOne = [
    {
        imgUrl: 'assets/images/event/01.jpg',
        imgAlt: 'event rajibraj91 rajibraj',
        Date: '13',
        MonthYear: 'Nav 2021',
        title: 'The Way of Higher Education & Its Difficulties',
        Time: '08:30 am',
        Place: ' National Auditorium, Dhaka',
    },
]

const eventListTwo = [
    {
        Date: '13',
        MonthYear: 'Nav 2021',
        title: 'Convocation and Celebration 2021',
        Time: '08:30 am',
        Place: ' National Auditorium, Dhaka',
    },
    {
        Date: '15',
        MonthYear: 'Nav 2021',
        title: 'Convocation and Celebration 2021',
        Time: '08:30 am',
        Place: ' National Auditorium, Dhaka',
    },
    {
        Date: '18',
        MonthYear: 'Nav 2021',
        title: 'Convocation and Celebration 2021',
        Time: '08:30 am',
        Place: ' National Auditorium, Dhaka',
    },
    {
        Date: '25',
        MonthYear: 'Nav 2021',
        title: 'Convocation and Celebration 2021',
        Time: '08:30 am',
        Place: ' National Auditorium, Dhaka',
    },
]



const Event = () => {
    const [events, setEvents] = useState([]);
    const [visible, setIsvisible] = useState(1)
    const [isLoading, setisLoading] = useState(false);
    const {getEvent} = eventsApi();

    useEffect(()=>{
        getEvent().then(data=>setEvents(data))
    },[])

    return (
        <div className="event-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                    <p className="desc">{desc}</p>
                </div>
                <div className="section-wrapper">
                    <div className="row row-cols-lg-2 row-cols-1 g-4">
                        {events.slice(0, visible).map((val, i) => (
                            <div className="col" key={i}>
                                <div className="event-left">
                                    <div className="event-item">
                                        <div className="event-inner">
                                            <div className="event-thumb">
                                            <img src={`${API}/event/thumbnail/${val._id}`} className='img-fluid'  />
                                            </div>
                                            <div className="event-content">
                                                <div className="event-date-info">
                                                    <div className="edi-box">
                                                        <h4>{val.eventdate.slice(0,2 )}</h4>
                                                        <p>{val.eventdate.slice(2, 12)}</p>
                                                    </div>
                                                </div>
                                                <div className="event-content-info">
                                                    <a href="#"><h3>{val.eventTitle}</h3></a>
                                                    <ul className="lab-ul">
                                                        <li><i className="icofont-clock-time"></i> {val.eventtime}</li>
                                                        <li><i className="icofont-google-map"></i>{val.eventlocation}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col">
                            <div className="event-right">
                                {events.map((val, i) => (
                                    <div className="event-item" key={i}>
                                        <div className="event-inner">
                                            <div className="event-content">
                                                <div className="event-date-info">
                                                    <div className="edi-box">
                                                        <h4>{val.eventdate.slice(0,2 )}</h4>
                                                        <p>{val.eventdate.slice(2, 12)}</p>
                                                    </div>
                                                </div>
                                                <div className="event-content-info">
                                                    <a href="#"><h5>{val.eventTitle}</h5></a>
                                                    <ul className="lab-ul">
                                                        <li><i className="icofont-clock-time"></i> {val.eventtime}</li>
                                                        <li><i className="icofont-google-map"></i> {val.eventlocation}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Event;