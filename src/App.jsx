import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// WE HAVE TO DO (npm install gsap @gsap/react) for this to work since we need to stack.
import {
  GsapFrom,
  GsapFromTo,
  GsapScrollTrigger,
  GsapStagger,
  GsapText,
  GsapTimeline,
  GsapTo,
  Home,
} from "./pages";

const App = () => {
  return (
    <div className="bg-black min-h-screen w-full">
      <Router>
        <Routes>
          <Route path="/gsapto" element={<GsapTo />} />
          <Route path="/gsapfrom" element={<GsapFrom />} />
          <Route path="/gsapfromto" element={<GsapFromTo />} />
          <Route path="/gsaptimeline" element={<GsapTimeline />} />
          <Route path="/gsapstagger" element={<GsapStagger />} />
          <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
          <Route path="/gsaptext" element={<GsapText />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
