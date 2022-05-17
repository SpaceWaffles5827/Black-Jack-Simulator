import NavBar from "./NavBar";
import HomeContent from "./HomeContent";
import BackGroundMusic from "./BackGroundMusic";
function Home() {
    return (
      <div className="Home">
        <BackGroundMusic></BackGroundMusic>
        <NavBar></NavBar>
        <HomeContent></HomeContent>      
      </div>
    );
  }
  
  export default Home;
