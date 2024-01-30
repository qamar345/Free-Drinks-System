import React from "react";
import { UserNav } from "../components/UserNav";
import { UserFooter } from "../components/UserFooter";

export const UserHome = () => {
  return (
    <>
      <UserNav />
      <br />
      <section style={{ marginTop: "10%" }}>
        <div className="container">
          <div className="container-fluid text-center">
            <h1 className="hero-text">Get Your Free Drinks</h1>
            <br />
            <span>
              Join our membership and enjoy complimentary drinks at local
              restaurants
            </span>
            <br />
            <br />
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 signup-sec">
              <button className="btn btn-primary border-0 rounded-0 signup-btn">
                Sign Up Now
              </button>
            </div>
            <br />
            <br />
            <div className="col-sm-6 more-learn">
              <a href="/" className="learn-more">
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <section>
        <div className="container">
          <div className="container-fluid">
            <div className="pricing">
              <span>PRICING</span>
            </div>
            <br />
            <div className="text-center">
              <h1>Choose Your Membership Plan</h1>
              <br />
              <span>
                Join our membership program and enjoy free drinks at local
                restaurants
              </span>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-sm-4">
              <div className="card plans rounded-0 mt-3">
                <div className="card-body">
                  <span className="plan-level">FREE</span>
                  <br />
                  <br />
                  <span>
                    Enjoy a selection of free drinks at local restaurants
                  </span>
                  <br />
                  <br />
                  <span>
                    $ <span className="plan-price">0</span>
                  </span>
                  <br />
                  <br />
                  <span>
                    <li className="features">
                      {" "}
                      Access to a curated list of restaurants
                    </li>
                  </span>
                  <br />
                  <span>
                    <li className="features"> One free drink per visit</li>
                  </span>
                  <br />
                  <span>
                    <li className="features">
                      {" "}
                      No commitment or subscription fees
                    </li>
                  </span>
                  <br />
                  <br />
                  <div className="text-center">
                    <button className="btn btn-primary rounded-0 free-btn">
                      {" "}
                      Continue with Free{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 mt-3">
              <div className="card plans rounded-0">
                <div className="card-body">
                  <span className="plan-level">BASIC</span>
                  <br />
                  <br />
                  <span>Upgrade your experience with additional perks</span>
                  <br />
                  <br />
                  <span>
                    $ <span className="plan-price">9.99</span>/month
                  </span>
                  <br />
                  <br />
                  <span>
                    <li className="features"> All features of FREE plan</li>
                  </span>
                  <br />
                  <span>
                    <li className="features">
                      {" "}
                      Access to a wider range of restaurants
                    </li>
                  </span>
                  <br />
                  <span>
                    <li className="features"> Two free drinks per visit</li>
                  </span>

                  <br />
                  <span>
                    <li className="features">
                      {" "}
                      Exclusive discounts on food items
                    </li>
                  </span>

                  <br />
                  <span>
                    <li className="features">
                      {" "}
                      Priority booking and reservations
                    </li>
                  </span>
                  <br />
                  <br />
                  <div className="text-center">
                    <button className="btn btn-primary rounded-0 border-0 basic-btn">
                      {" "}
                      Try the Basic plan{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 mt-3">
              <div className="card plans rounded-0">
                <div className="card-body">
                  <span className="plan-level">PRO</span>
                  <br />
                  <br />
                  <span>Unlock the ultimate membership benefits</span>
                  <br />
                  <br />
                  <span>
                    $ <span className="plan-price">19.99</span>/month
                  </span>
                  <br />
                  <br />
                  <span>
                    <li className="features"> All features of BASIC plan</li>
                  </span>
                  <br />
                  <span>
                    <li className="features">
                      {" "}
                      Access to all participating restaurants
                    </li>
                  </span>
                  <br />
                  <span>
                    <li className="features"> Three free drinks per visit</li>
                  </span>

                  <br />
                  <span>
                    <li className="features">
                      {" "}
                      VIP treatment and recommendations
                    </li>
                  </span>

                  <br />
                  <span>
                    <li className="features">
                      {" "}
                      Complimentary appetizers with drink
                    </li>
                  </span>
                  <br />
                  <br />
                  <div className="text-center">
                    <button className="btn btn-primary rounded-0 border-0 basic-btn">
                      {" "}
                      Try the PRO plan{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="text-center" style={{ marginTop: "15%" }}>
            <h1>Unlimited Free Drinks at Local Restaurants</h1>
            <br />
            <span>
              Experience the joy of sipping on your favorite beverages without
              spending a dime. With our membership, you can enjoy unlimited free
              drinks at a variety of local restaurants in your area. Whether
              you're a coffee lover, a cocktail enthusiast, or a fan of
              refreshing smoothies, we have something for everyone.
            </span>
            <br />
            <br />
            <button className="btn btn-primary learn-btn border-0 rounded-0">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section style={{ backgroundColor: "#e6ebe0" }}>
        <br />
        <div className="container">
          <div className="container-fluid">
            <div className="pricing">
              <span>FAQ</span>
            </div>
            <br />
            <div className="text-center">
              <h1>Common Questions</h1>
              <br />
              <span>
                Here are some of the most common questions that we get.
              </span>
            </div>
            <br />
            <br />
            <div>
              <span>
                <strong>How does the membership website work?</strong>
                <br />
                <br />
                <p>
                  The membership website allows users to purchase subscriptions
                  for free drinks at local restaurants. Once a subscription is
                  purchased,
                  <br /> members can redeem their free drinks at participating
                  restaurants by showing their membership card or providing
                  their unique membership code.
                </p>
              </span>
              <br />
              <span>
                <strong>What types of subscriptions are available?</strong>
                <br />
                <br />
                <p>
                  We offer different subscription options based on the number of
                  free drinks included. Members can choose from monthly,
                  quarterly, or annual subscriptions, each with varying benefits
                  and discounts.
                </p>
              </span>
              <br />
              <span>
                <strong>Can I use my subscription at any restaurant?</strong>
                <br />
                <br />
                <p>
                  Yes, our membership program is valid at all participating
                  restaurants. We have a wide network of partner restaurants
                  where members can enjoy their free drinks.
                </p>
              </span>
              <br />
              <span>
                <strong>How do I redeem my free drinks?</strong>
                <br />
                <br />
                <p>
                  To redeem your free drinks, simply visit a participating
                  restaurant and present your membership card or provide your
                  unique membership code. The restaurant staff will verify your
                  membership and serve you the complimentary drinks.
                </p>
              </span>
              <br />
              <span>
                <strong>
                  What happens if a restaurant doesn't accept my membership?
                </strong>
                <br />
                <br />
                <p>
                  In the rare case that a restaurant denies accepting your
                  membership, please contact our customer support team
                  immediately. We will investigate the issue and ensure that you
                  receive the benefits you are entitled to.
                </p>
              </span>
              <br />
            </div>
          </div>
        </div>
      </section>
      <br />
      <UserFooter />
    </>
  );
};
