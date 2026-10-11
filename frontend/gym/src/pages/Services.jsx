import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

import {
  FaUserTie,
  FaDumbbell,
  FaHeartbeat,
  FaLeaf,
  FaArrowRight,
  FaPhone,
} from "react-icons/fa";

// =====================================================
// SERVICE IMAGES
// =====================================================

import personalTrainingImage from "../assets/images/services/personal-training.jpg";
import weightTrainingImage from "../assets/images/services/weight-training.jpg";
import cardioTrainingImage from "../assets/images/services/cardio-training.jpg";
import yogaFitnessImage from "../assets/images/services/yoga-fitness.jpg";

// =====================================================
// EQUIPMENT IMAGES
// =====================================================

import treadmillImage from "../assets/images/equipment/treadmill.jpg";
import exerciseBikeImage from "../assets/images/equipment/exercise-bike.jpg";
import chestPressImage from "../assets/images/equipment/chest-press-machine.jpg";
import latPulldownImage from "../assets/images/equipment/lat-pulldown-machine.jpg";
import legPressImage from "../assets/images/equipment/leg-press-machine.jpg";
import dumbbellsImage from "../assets/images/equipment/dumbbells.jpg";
import barbellImage from "../assets/images/equipment/barbell-set.jpg";
import kettlebellImage from "../assets/images/equipment/kettlebell.jpg";
import cableMachineImage from "../assets/images/equipment/cable-machine.jpg";
import smithMachineImage from "../assets/images/equipment/smith-machine.jpg";
import abdominalBenchImage from "../assets/images/equipment/abdominal-bench.jpg";
import boxingImage from "../assets/images/equipment/boxing-equipment.jpg";

function Services() {
  const navigate = useNavigate();

  // =====================================================
  // SERVICES
  // =====================================================

  const services = [
    {
      icon: <FaUserTie />,
      title: "Personal Training",
      description:
        "Get personalized training programs from our certified fitness trainers.",
      image: personalTrainingImage,
      path: "/personal-training",
    },

    {
      icon: <FaDumbbell />,
      title: "Weight Training",
      description:
        "Build strength and muscle with our modern equipment and expert guidance.",
      image: weightTrainingImage,
      path: "/weight-training",
    },

    {
      icon: <FaHeartbeat />,
      title: "Cardio Training",
      description:
        "Improve heart health, burn calories and build endurance with effective cardio workouts.",
      image: cardioTrainingImage,
      path: "/cardio-training",
    },

    {
      icon: <FaLeaf />,
      title: "Yoga & Fitness",
      description:
        "Improve flexibility, balance and overall wellness with yoga sessions.",
      image: yogaFitnessImage,
      path: "/yoga-fitness",
    },
  ];

  // =====================================================
  // EQUIPMENT
  // =====================================================

  const equipment = [
    {
      title: "Treadmill",
      description: "Improve stamina and burn calories.",
      image: treadmillImage,
    },
    {
      title: "Exercise Bike",
      description: "Great for cardio and leg strengthening.",
      image: exerciseBikeImage,
    },
    {
      title: "Chest Press Machine",
      description: "Build and tone your chest muscles.",
      image: chestPressImage,
    },
    {
      title: "Lat Pulldown Machine",
      description: "Strengthen your back and shoulders.",
      image: latPulldownImage,
    },
    {
      title: "Leg Press Machine",
      description: "Build strong legs and glutes.",
      image: legPressImage,
    },
    {
      title: "Dumbbells",
      description: "Versatile for all types of workouts.",
      image: dumbbellsImage,
    },
    {
      title: "Barbell Set",
      description: "Perfect for strength training.",
      image: barbellImage,
    },
    {
      title: "Kettlebell",
      description: "Improves strength, power and endurance.",
      image: kettlebellImage,
    },
    {
      title: "Cable Machine",
      description: "Multi-functional strength training.",
      image: cableMachineImage,
    },
    {
      title: "Smith Machine",
      description: "Safe and effective weight training.",
      image: smithMachineImage,
    },
    {
      title: "Abdominal Bench",
      description: "Target your core and abs.",
      image: abdominalBenchImage,
    },
    {
      title: "Boxing Equipment",
      description: "Improve power and stress relief.",
      image: boxingImage,
    },
  ];

  // =====================================================
  // SERVICE NAVIGATION
  // =====================================================

  const handleServiceClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="services-page">

      {/* =================================================
          HERO
      ================================================= */}

      <section className="services-hero">

        <div className="services-hero-content">

          <div className="services-title">

            <h1>
              Our <span>Services</span>
            </h1>

            <div className="title-decoration">
              <span></span>
              <FaDumbbell />
              <span></span>
            </div>

          </div>

          <p>
            We provide a wide range of fitness services and modern equipment
            to help you achieve your health goals.
          </p>

        </div>

        <div className="services-hero-equipment"></div>

      </section>


      {/* =================================================
          SERVICES
      ================================================= */}

      <section className="services-section">

        <div className="services-grid">

          {services.map((service, index) => (

            <div
              className={`service-card ${
                service.path ? "clickable-service" : ""
              }`}
              key={index}
              role={service.path ? "button" : undefined}
              tabIndex={service.path ? 0 : undefined}
              onClick={() => handleServiceClick(service.path)}
              onKeyDown={(e) => {

                if (
                  service.path &&
                  (e.key === "Enter" || e.key === " ")
                ) {
                  e.preventDefault();
                  handleServiceClick(service.path);
                }

              }}
            >

              {/* ICON */}

              <div className="service-icon">
                {service.icon}
              </div>


              {/* TITLE */}

              <h2>
                {service.title}
              </h2>


              {/* DESCRIPTION */}

              <p>
                {service.description}
              </p>


              {/* IMAGE */}

              <div className="service-image">

                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />

              </div>


              {/* VIEW DETAILS */}

              <div className="service-view-details">

                <span>
                  View Details
                </span>

                <FaArrowRight />

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =================================================
          EQUIPMENT
      ================================================= */}

      <section className="equipment-section">

        <div className="equipment-heading">

          <span></span>

          <h2>
            Our <strong>Equipment</strong>
          </h2>

          <span></span>

        </div>


        <p className="equipment-subtitle">
          State-of-the-art equipment for a complete workout experience.
        </p>


        <div className="equipment-grid">

          {equipment.map((item, index) => (

            <div
              className="equipment-card"
              key={index}
            >

              <div className="equipment-image">

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =================================================
          CTA
      ================================================= */}

      <section className="services-cta">

        <div className="cta-left">

          <div className="cta-big-icon">
            💪
          </div>

          <div>

            <h2>
              Ready to Start Your Fitness Journey?
            </h2>

            <p>
              Join our gym today and take the first step
              towards a healthier, stronger you!
            </p>

          </div>

        </div>


        <div className="cta-buttons">

          {/* JOIN NOW */}

          <button
            type="button"
            className="cta-join-btn"
            onClick={() => navigate("/register")}
          >
            <span>
              Join Now
            </span>

            <FaArrowRight />
          </button>


          {/* CONTACT */}

          <button
            type="button"
            className="cta-contact-btn"
            onClick={() => navigate("/contact")}
          >
            <FaPhone />

            <span>
              Contact Us
            </span>

          </button>

        </div>

      </section>

    </div>
  );
}

export default Services;