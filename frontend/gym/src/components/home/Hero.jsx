import "./Hero.css";
import gymbg from "../../assets/images/gymbg.jpeg";

function Hero({ onJoinNow }) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${gymbg})`,
      }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h4>WELCOME TO OUR FITNESS CENTER</h4>

          <h1>
            Transform Your Body
            <br />
            Transform Your Life
          </h1>

          <p>
            Join the best fitness club with certified trainers,
            modern equipment, and affordable membership plans.
          </p>

          <div className="hero-buttons">
            <button
              type="button"
              className="join-btn"
              onClick={onJoinNow}
            >
              Join Now
            </button>

            <button
              type="button"
              className="plan-btn"
              onClick={() => {
                window.location.href = "/services";
              }}
            >
              View Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;