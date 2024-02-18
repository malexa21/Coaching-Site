import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { HomePageView } from './views/HomePageView';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<HomePageView />} />
      </Routes>
    </Router>
  );
}

export default App;