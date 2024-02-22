import "./App.css";
import { Accordian } from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QrCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import { TabTest } from "./components/custom-tabs/tab-test";


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

      {/* Tree View component */}
      {/*<TreeView menus={menus}/>*/}

      {/* Qr Code Generator component */}
      {/* <QrCodeGenerator/> */}

      {/* Light Dark Mode component */}
      {/*<LightDarkMode/>*/}

      {/* Tabs component */}
      <TabTest />

      {/* Scroll Indicator component */}
      {/* <ScrollIndicator url='https://dummyjson.com/products?limit=100' /> */}
    </div>
  );
}

export default App;
