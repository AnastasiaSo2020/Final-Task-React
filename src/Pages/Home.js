import CardHomePage from "../Components/CardHomePage";
import Carousel from "../Components/Carousel";
import '../Components/main.css'

function Home() {
  return (
    <div>
      <h1 className="subTitleAppearance mainHomePhrase"><em>Make Your Life Be Bright as a Rainbow !</em></h1> 
      <Carousel />
      <CardHomePage />
    </div>
  );
}

export default Home