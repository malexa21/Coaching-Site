import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { HomePageView } from './views/HomePageView';
import { MenuView } from "./views/MenuView";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MenuView />}>
        <Route path="/homepage" element={<HomePageView />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;