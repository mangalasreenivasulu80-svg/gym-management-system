import "./Gallery.css";

import {
  FaDumbbell,
  FaRunning,
  FaUserTie,
  FaHeartbeat,
  FaFire,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

import strengthImage from "../assets/images/gallery/strength-training.jpg";
import cardioImage from "../assets/images/gallery/cardio-zone.jpg";
import equipmentImage from "../assets/images/gallery/modern-equipment.jpg";
import personalTrainingImage from "../assets/images/gallery/personal-training.jpg";
import workoutImage from "../assets/images/gallery/fitness-workout.jpg";
import powerImage from "../assets/images/gallery/power-training.jpg";
import professionalGymImage from "../assets/images/gallery/professional-gym.jpg";
import environmentImage from "../assets/images/gallery/workout-environment.jpg";

function Gallery() {
  const galleryItems = [
    {
      image: strengthImage,
      icon: <FaDumbbell />,
      title: "Strength Training",
      subtitle: "Fitness & Training",
    },
    {
      image: cardioImage,
      icon: <FaRunning />,
      title: "Cardio Zone",
      subtitle: "Fitness & Training",
    },
    {
      image: equipmentImage,
      icon: <FaDumbbell />,
      title: "Modern Equipment",
      subtitle: "Fitness & Training",
    },
    {
      image: personalTrainingImage,
      icon: <FaUserTie />,
      title: "Personal Training",
      subtitle: "Fitness & Training",
    },
    {
      image: workoutImage,
      icon: <FaHeartbeat />,
      title: "Fitness Workout",
      subtitle: "Fitness & Training",
    },
    {
      image: powerImage,
      icon: <FaFire />,
      title: "Power Training",
      subtitle: "Fitness & Training",
    },
    {
      image: professionalGymImage,
      icon: <FaTrophy />,
      title: "Professional Gym",
      subtitle: "Fitness & Training",
    },
    {
      image: environmentImage,
      icon: <FaUsers />,
      title: "Workout Environment",
      subtitle: "Fitness & Training",
    },
  ];

  return (
    <div className="gallery-page">

      {/* =========================================
          GALLERY HEADER
      ========================================= */}

      <section className="gallery-header">

        <span className="gallery-small-title">
          OUR GALLERY
        </span>

        <h1>
          Explore Our <span>Gym</span>
        </h1>

        <p>
          Explore our modern equipment, powerful workouts and energetic
          <br />
          fitness environment.
        </p>

      </section>


      {/* =========================================
          GALLERY GRID
      ========================================= */}

      <section className="gallery-section">

        <div className="gallery-grid">

          {galleryItems.map((item, index) => (

            <div className="gallery-card" key={index}>

              {/* Image */}
              <div className="gallery-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>


              {/* Bottom information */}
              <div className="gallery-info">

                <div className="gallery-icon">
                  {item.icon}
                </div>

                <div className="gallery-text">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.subtitle}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Gallery;