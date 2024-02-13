import "./App.css";
import { Accordian } from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";


function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/*<Accordian/>*/}

      {/* Random Color component */}
      {/*<RandomColor/>*/}

      {/* Star Rating component */}
      {/*<StarRating nbOfStars={10}/>*/}

      {/* Image Slider component */}
      {/*<ImageSlider url='https://picsum.photos/v2/list'/>*/}

      {/* Load More Data component */}
      <LoadMoreData/>

    </div>
  );
}

export default App;
