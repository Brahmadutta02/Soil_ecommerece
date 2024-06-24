import '../Styles/Page.css';
import '../Styles/about.css';
import plantLogo from '../Images/plant.avif';

// About page fucntion
function About() {
  // Return the about page
    return (
      // About page content
      <div className="about">
      <img class="img" src={plantLogo} alt="Plant Logo" />
      <h2 class="title">We are SOIL</h2>
      <h5>A green grocer that also specialises in providing the best tips on diet and nutrition as well as organic farming</h5>
      <h5>Founded in 1990, SOIL prides itself in supporting the local community and providing the highest quality food possible</h5>
    </div>
    
  );
  }
  // Export the about page
  export default About;