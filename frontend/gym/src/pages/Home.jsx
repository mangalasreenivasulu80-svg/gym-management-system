import { useNavigate } from "react-router-dom";
import Hero from "../components/home/Hero";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Hero onJoinNow={() => navigate("/register")} />
      <Footer />
    </>
  );
}

export default Home;