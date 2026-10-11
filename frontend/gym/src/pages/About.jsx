import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      {/* Main About Section */}
      <section className="about-hero">
        <div className="about-image-box">
          <img
            src="/images/about/about-main.jpg"
            alt="Our Gym"
            className="about-main-image"
          />
        </div>

        <div className="about-content">
          <span className="about-small-title">– ABOUT US</span>

          <h1>
            About Our <span>Gym</span>
          </h1>

          <p>
            Welcome to our gym! We provide modern equipment, professional
            trainers, and a friendly environment to help you achieve your
            fitness goals.
          </p>

          <div className="about-points">
            <div className="about-point">
              <span className="check-icon">✓</span>
              <div>
                <h3>Professional Trainers</h3>
                <p>
                  Our certified trainers help you train safely and effectively.
                </p>
              </div>
            </div>

            <div className="about-point">
              <span className="check-icon">✓</span>
              <div>
                <h3>Modern Equipment</h3>
                <p>
                  We use high-quality equipment for the best results.
                </p>
              </div>
            </div>

            <div className="about-point">
              <span className="check-icon">✓</span>
              <div>
                <h3>Personalized Workout Plans</h3>
                <p>
                  We create workout plans based on your goals.
                </p>
              </div>
            </div>
          </div>

          <Link to="/register" className="join-btn">
            Join Now
          </Link>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="about-bottom">
        {/* Facilities */}
        <div className="facilities-section">
          <div className="section-heading">
            <span></span>
            <h2>Our Facilities</h2>
            <span></span>
          </div>

          <div className="facility-grid">
            <div className="facility-card">
              <img
                src="/images/about/weight-training.jpg"
                alt="Weight Training"
              />
              <div className="facility-icon">🏋️</div>
              <h3>Weight Training</h3>
              <p>Build strength and improve your fitness.</p>
            </div>

            <div className="facility-card">
              <img
                src="/images/about/cardio.jpg"
                alt="Cardio"
              />
              <div className="facility-icon">🏃</div>
              <h3>Cardio</h3>
              <p>Improve endurance and stay healthy.</p>
            </div>

            <div className="facility-card">
              <img
                src="/images/about/yoga.jpg"
                alt="Yoga"
              />
              <div className="facility-icon">🧘</div>
              <h3>Yoga</h3>
              <p>Relax your mind and improve flexibility.</p>
            </div>

            <div className="facility-card">
              <img
                src="/images/about/crossfit.jpg"
                alt="CrossFit"
              />
              <div className="facility-icon">🏋️</div>
              <h3>CrossFit</h3>
              <p>High-intensity workouts for a stronger you.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-section">
          <div className="section-heading">
            <span></span>
            <h2>Why Choose Us?</h2>
            <span></span>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">👥</div>
              <strong>500+</strong>
              <p>Happy Members</p>
            </div>

            <div className="why-card">
              <div className="why-icon">👤</div>
              <strong>25+</strong>
              <p>Expert Trainers</p>
            </div>

            <div className="why-card">
              <div className="why-icon">🏆</div>
              <strong>10+</strong>
              <p>Years Experience</p>
            </div>

            <div className="why-card">
              <div className="why-icon">★</div>
              <strong>4.9/5</strong>
              <p>Member Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;