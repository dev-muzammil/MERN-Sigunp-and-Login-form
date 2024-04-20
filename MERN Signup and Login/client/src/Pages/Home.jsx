import React from "react";

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="grid-two-cols">
            <div className="hero-content">
              <h1>Hey! This website is based on MERN Stack.</h1>
              <p>
                This website contains Login and Signup functionality and here
                you can fill forms and your data will be saved on
                database. 
              </p>
              <div className="hero-btns">
                <button className="btn">Contact Now</button>
                <button className="btn-secondary">Learn More</button>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/hero.gif" alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
