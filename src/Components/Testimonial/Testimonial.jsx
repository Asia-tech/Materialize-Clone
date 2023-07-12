import React from "react";
import "./testimonial.css";
import Title from "./../common/title/Title";
import user1 from "../../Assets/user1.webp";
import user2 from "../../Assets/user2.webp";
import user3 from "../../Assets/user3.webp";
import user4 from "../../Assets/user4.webp";
import user5 from "../../Assets/user5.webp";

const Testimonial = () => {
  return (
    <>
      <section className="row testmonial-sec margin-top">
        <Title title="Trusted By " span="Data Teams" />
        <div className="mtop testimonial-container mx-auto">
          {/*----1st card----*/}
          <div className="card testimonial-card">
            <figure>
              <figcaption>
                <div className="avator">
                  <div className="img-outline-border">
                    <img src={user1} alt="Emily Hawkins" />
                  </div>
                </div>
                <div className="avator-text">
                  <p className="semibold-text">Emily Hawkins</p>
                  <p className="text-intro">Data Infrastructure Lead, Drizly</p>
                </div>
              </figcaption>
              <blockquote>
                <p>
                  We can write <strong>real-time SQL,</strong> exactly the same
                  way as we already are in Snowflake with batch.
                </p>
              </blockquote>
              <div className="link">
                <a
                  href="https://materialize.com/blog/next-generation/"
                  className="hover-link"
                >
                  Materialize Architecture Explained
                  <span>&nbsp;→</span>
                </a>
              </div>
            </figure>
          </div>
          {/*----2nd card----*/}
          <div className="card testimonial-card">
            <figure>
              <figcaption>
                <div className="avator">
                  <div className="img-outline-border">
                    <img src={user2} alt="Ryan Gaus" />
                  </div>
                </div>
                <div className="avator-text">
                  <p className="semibold-text">Ryan Gaus</p>
                  <p className="text-intro">
                    Staff Engineer and Tech Lead, Density
                  </p>
                </div>
              </figcaption>
              <blockquote>
                <p>
                  Materialize has saved us I-don't-know-how-many untold quarters
                  of trying to build our own thing.
                </p>
              </blockquote>
              <div className="link">
                <a
                  href="https://materialize.com/customer-stories/density/"
                  className="hover-link"
                >
                  Materialize Architecture Explained
                  <span>&nbsp;→</span>
                </a>
              </div>
            </figure>
          </div>
          {/*----3rd card----*/}
          <div className="card testimonial-card">
            <figure>
              <figcaption>
                <div className="avator">
                  <div className="img-outline-border">
                    <img src={user3} alt="Jean-Francois Perreton" />
                  </div>
                </div>
                <div className="avator-text">
                  <p className="semibold-text">Jean-Francois Perreton</p>
                  <p className="text-intro">
                    Head of Algo Quant, Kepler Chevreaux
                  </p>
                </div>
              </figcaption>
              <blockquote>
                <p>
                  Materialize&nbsp;
                  <strong>
                    directly integrates with our third-party applications, BI
                    tools,
                  </strong>
                  &nbsp; you name it. It's really SQL.
                </p>
              </blockquote>
              <div className="link">
                <a
                  href="https://materialize.com/customer-stories/kepler-cheuvreux/"
                  className="hover-link"
                >
                  See how Kepler uses Materialize
                  <span>&nbsp;→</span>
                </a>
              </div>
            </figure>
          </div>
          {/*----4th card----*/}
          <div className="card testimonial-card">
            <figure>
              <figcaption>
                <div className="avator">
                  <div className="img-outline-border">
                    <img src={user4} alt="Tyler Richie" />
                  </div>
                </div>
                <div className="avator-text">
                  <p className="semibold-text">Tyler Richie</p>
                  <p className="text-intro">Cofounder and CTO, Sproutfi</p>
                </div>
              </figcaption>
              <blockquote>
                <p>
                  With Materialize we don't have to worry about avoiding &nbsp;
                  <strong>complex joins with streaming data</strong>; we can
                  just do them very easily.
                </p>
              </blockquote>
              <div className="link">
                <a
                  href="https://materialize.com/customer-stories/sproutfi/"
                  className="hover-link"
                >
                  See how Sproutfi uses Materialize
                  <span>&nbsp;→</span>
                </a>
              </div>
            </figure>
          </div>
          {/*----5th card----*/}
          <div className="card testimonial-card">
            <figure>
              <figcaption>
                <div className="avator">
                  <div className="img-outline-border">
                    <img src={user5} alt="Johan Stuyts" />
                  </div>
                </div>
                <div className="avator-text">
                  <p className="semibold-text">John Stuyts</p>
                  <p className="text-intro">Data Architect, Maqqie</p>
                </div>
              </figcaption>
              <blockquote>
                <p>
                  Materialize is &nbsp;
                  <strong>correct, and not just eventually consistent.</strong>;
                  The alternatives simply don’t support consistency, and you end
                  up wasting a lot of time trouble shooting.
                </p>
              </blockquote>
              <div className="link">
                <a
                  href="https://materialize.com/customer-stories/maqqie/"
                  className="hover-link"
                >
                  See how Maqqie uses Materialize
                  <span>&nbsp;→</span>
                </a>
              </div>
            </figure>
          </div>
        </div>
        <div className="btn-sec testi-sec">
          <div className="button-wrapper test-wrapper">
            <a href="/" className="btn ctn-btn testi-btn">
              <span>show more...</span>
            </a>
            <div className="button-bg"></div>
          </div>
        </div>
      </section>
      <div className="mtop"></div>
    </>
  );
};

export default Testimonial;
