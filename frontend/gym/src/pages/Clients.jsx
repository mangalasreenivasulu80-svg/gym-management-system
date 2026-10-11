import { useNavigate } from "react-router-dom";
import "./Clients.css";

import {
  FaUsers,
  FaStar,
  FaDumbbell,
  FaCalendarAlt,
  FaQuoteRight,
  FaArrowRight,
} from "react-icons/fa";

function Clients() {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Fitness Enthusiast",
      image: "/images/clients/rahul.jpg",
      text: "This gym has completely transformed my lifestyle. The trainers are supportive and the equipment is top-notch.",
    },
    {
      name: "Priya Mehta",
      role: "Regular Member",
      image: "/images/clients/priya.jpg",
      text: "Amazing environment and great facilities. I love the variety of workouts and the motivation I get here every day.",
    },
    {
      name: "Amit Verma",
      role: "Bodybuilding Member",
      image: "/images/clients/amit.jpg",
      text: "Professional trainers, clean space and excellent guidance. I've achieved results I never thought possible!",
    },
    {
      name: "Neha Kapoor",
      role: "Yoga & Fitness",
      image: "/images/clients/neha.jpg",
      text: "The best gym in town! Friendly staff, modern equipment and flexible membership plans.",
    },
  ];

  return (
    <div className="clients-page">

      {/* =====================================================
          CLIENTS HERO
      ===================================================== */}

      <section className="clients-hero">

        <span className="clients-small-title">
          OUR CLIENTS
        </span>

        <h1>
          Trusted by <span>Fitness</span> Enthusiasts
        </h1>

        <div className="clients-divider">
          <span></span>
          <FaDumbbell />
          <span></span>
        </div>

        <p>
          We are proud to be a part of our members' fitness journeys.
          <br />
          See what our clients have to say about their experience.
        </p>

      </section>


      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <section className="client-stats">

        {/* Happy Members */}
        <div className="client-stat-card">

          <div className="client-stat-icon">
            <FaUsers />
          </div>

          <div className="client-stat-content">
            <h2>1,250+</h2>
            <p>Happy Members</p>
          </div>

        </div>


        {/* Average Rating */}
        <div className="client-stat-card">

          <div className="client-stat-icon">
            <FaStar />
          </div>

          <div className="client-stat-content">
            <h2>4.9/5</h2>
            <p>Average Rating</p>
          </div>

        </div>


        {/* Expert Trainers */}
        <div className="client-stat-card">

          <div className="client-stat-icon">
            <FaDumbbell />
          </div>

          <div className="client-stat-content">
            <h2>25+</h2>
            <p>Expert Trainers</p>
          </div>

        </div>


        {/* Years of Trust */}
        <div className="client-stat-card">

          <div className="client-stat-icon">
            <FaCalendarAlt />
          </div>

          <div className="client-stat-content">
            <h2>3+</h2>
            <p>Years of Trust</p>
          </div>

        </div>

      </section>


      {/* =====================================================
          TESTIMONIALS
      ===================================================== */}

      <section className="testimonials-section">

        <div className="section-heading">

          <h2>
            What Our Members Say
          </h2>

          <div className="heading-line"></div>

        </div>


        <div className="testimonial-grid">

          {testimonials.map((client, index) => (

            <div
              className="testimonial-card"
              key={index}
            >

              {/* Stars and Quote */}

              <div className="testimonial-top">

                <div className="stars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <FaQuoteRight className="quote-icon" />

              </div>


              {/* Review */}

              <p className="testimonial-text">
                {client.text}
              </p>


              {/* Client Profile */}

              <div className="client-profile">

                <img
                  src={client.image}
                  alt={client.name}
                  onError={(e) => {
                    e.currentTarget.src =
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        client.name
                      )}&background=ff8500&color=ffffff`;
                  }}
                />

                <div className="client-info">

                  <h3>
                    {client.name}
                  </h3>

                  <p>
                    {client.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          FITNESS BRANDS
      ===================================================== */}

      <section className="brands-section">

        <div className="brand-logo">
          <span>PRO BODYLINE</span>
        </div>

        <div className="brand-logo">
          <span>Life Fitness</span>
        </div>

        <div className="brand-logo">
          <span>cult.fit</span>
        </div>

        <div className="brand-logo">
          <span>TECHNOGYM</span>
        </div>

        <div className="brand-logo">
          <span>FITLINE</span>
        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="clients-cta">

        <div className="cta-client-icon">
          <FaUsers />
        </div>


        <div className="clients-cta-content">

          <h2>
            Join Thousands of <span>Happy Members</span>
          </h2>

          <p>
            Start your fitness journey today and be a part
            of our growing family.
          </p>

        </div>


        {/* JOIN NOW BUTTON */}

        <button
          type="button"
          className="clients-join-btn"
          onClick={() => navigate("/register")}
        >
          <span>Join Now</span>
          <FaArrowRight />
          </button>

      </section>

    </div>
  );
}

export default Clients;