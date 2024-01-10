import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LaunchPage from "./pages/LaunchPage";
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageFour from './pages/PageFour';
import PageFive from './pages/PageFive';
import PageSix from './pages/PageSix';
import PageSeven from './pages/PageSeven';
import PageEight from './pages/PageEight';
import PageNine from './pages/PageNine';
import PageTen from './pages/PageTen';
import PageEleven from './pages/PageEleven';
import LastPage from './pages/LastPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LaunchPage />}></Route>
        <Route path="/page1" element={<PageOne />}></Route>
        <Route path="/page2" element={<PageTwo />}></Route>
        <Route path="/page3" element={<PageThree />}></Route>
        <Route path="/page4" element={<PageFour />}></Route>
        <Route path="/page5" element={<PageFive />}></Route>
        <Route path="/page6" element={<PageSix />}></Route>
        <Route path="/page7" element={<PageSeven />}></Route>
        <Route path="/page8" element={<PageEight />}></Route>
        <Route path="/page9" element={<PageNine />}></Route>
        <Route path="/page10" element={<PageTen />}></Route>
        <Route path="/page11" element={<PageEleven />}></Route>
        <Route path="/ending" element={<LastPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

