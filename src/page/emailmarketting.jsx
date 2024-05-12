import { useEffect } from "react";
import { Component, Fragment, useState } from "react";
import { Link, useParams } from "react-router-dom";
import serviceaApi from "../api/serviceaApi";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import Pagination from "../component/sidebar/pagination";
import PopularPost from "../component/sidebar/popular-post";
import Rating from "../component/sidebar/rating";
import Search from "../component/sidebar/search";
import ShopCategory from "../component/sidebar/shop-category";
import Tags from "../component/sidebar/tags";
import { API } from "../config";

const ShopPage = () => {
  const { slug } = useParams();
  console.log(slug);
  const [GridList, setGridList] = useState(true);
  const [services, setService] = useState([]);
  const { getService } = serviceaApi();
  const { serviceCategory } = serviceaApi();
  const { serviceCat, setServiceCat } = useState([]);

  useEffect(() => {
    getService().then((data) => {
      const services = data;
      console.log(services);
      const categoryItems = services.filter(
        (item) => item.servicecategory.slug === slug
      );
      setService(categoryItems);
    });
  }, [slug]);

  useEffect(() => {
    serviceCategory().then((data) => setServiceCat(data));
  }, []);
  return (
    <Fragment>
      <Header />
      <PageHeader title={"Email Marketing"} curPage={"Email"} />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <div>
                    <h5>What is Email Marketing? </h5>
                  </div>
                  <p>
                  Email marketing is a form of marketing that can make the customers on your email list aware of new products, discounts, and other services. It can also be a softer sell to educate your audience on the value of your brand or keep them engaged between purchases. It can also be anything in between.
                  </p>
                 <h6>There are many email marketing services available to businesses and organizations. Some of the popular ones include:</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i> Mailchimp
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Constant Contact
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Campaign Monitor
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> GetResponse
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> HubSpot
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>  Benchmark Email
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> SendGrid
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Emma
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Ontraport
                    </li>
                  </ul>
                  <p>
                  Each service has its own features and pricing plans, so it's important to do research and find the one that best fits your needs and budget.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <article>
                <div className="content-sections">
                  <h5>Email marketing strategy:</h5>
                   <p>Still, people receive more and more email all the time, and it can be challenging to stand out in full inboxes. That’s why Mailchimp gives you the tools you need to shine (plus, we’ve got a lot of tried and true tips on sending outstanding emails) and develop effective email marketing campaigns. Check out our email marketing statistics by industry for more on why email marketing works.</p>
                
                  <h5>
                  How do I get an email list?
                  </h5>
                  <p>You’ll see the highest ROI when you build and maintain an engaged subscriber list, made up of people who want to receive your messages (and who opted in on purpose). Although building a clean list can take more work at the outset of your email marketing strategy, Mailchimp lists have built-in tools to help you along the way. </p>
                  <p>WThere are lots of ways to find people who’ll look forward to getting your emails, but we’ve rounded up a few that work best.</p>
                  <h6>To build an email list:</h6>
                  <ul className="lab-ul">
                    <li>
                      <i class="icofont-rounded-double-right"></i>Create a signup form on your website. When people come to your website for the first time and like what they see, they’ll want a way to stay in-the-know about your brand. Create a form for newsletter signups and install a pop-up to collect customer data from your visitors.
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i>Use a good old-fashioned signup sheet. Whether it’s at your brick and mortar store, or an event that you’re hosting or attending, when you’re surrounded by people who are into what you do, provide a place for them to sign up and learn more.
                    </li>
                    <li>
                      <i class="icofont-rounded-double-right"></i> Drive sign ups through social media. If you don’t have a substantial email list (or you’d just like to see it grow), but you’ve got an engaged social media following, tap into that resource. Share your signup form on your social channels.
                    </li>
                  </ul>
                  <h5>Can I buy an email list?</h5>
                  <p>Purchased lists are ineffective, and they impact everyone else who uses Mailchimp, too. If you send emails to a list of people whose contact info you bought, many of the emails will get identified as spam and you'll also get high unsubscribe rates. Some email spam filters will flag an email campaign if anyone with the same IP has sent spam in the past. When you use Mailchimp, your email is delivered through our servers, so if one person sends spam, it could prevent other users’ emails from reaching inboxes. But by forbidding Mailchimp users from using purchased lists, we increase deliverability for everyone.</p>
                  <p>  <h5>Measuring your success:</h5>
                  <p>After publishing your pop-up form and Facebook ad, monitor your reports to keep track of your progress and learn exactly how many new people join your email list. Once you have a baseline, consider adjusting your messaging, timing, improving user experience and other variables to see how your conversion rate is affected.</p></p>
                </div>

              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search />
                <ShopCategory serviceCat={serviceCat} />
                {/* <PopularPost /> */}
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default ShopPage;
