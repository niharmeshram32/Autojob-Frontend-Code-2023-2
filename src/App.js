// import './App.css';
// import Page_Subscribe from './component/Page_Subscribe.js';

// function App() {
//   return (
//     <div className="App">
//       <Page_Subscribe/>
//     </div>
//   );
// }

// export default App;


// ███████████████████████████████████████ import logo from './logo.svg';
// ███████████████████████████████████████ import './App.css';
// ███████████████████████████████████████ import CheckOut from './component/Checkout';
// ███████████████████████████████████████ function App() {
// ███████████████████████████████████████   return (
// ███████████████████████████████████████     <div className="App">
// ███████████████████████████████████████       {/* <header className="App-header">
// ███████████████████████████████████████         <img src={logo} className="App-logo" alt="logo" />
// ███████████████████████████████████████         <p>
// ███████████████████████████████████████           Edit <code>src/App.js</code> and save to reload.
// ███████████████████████████████████████         </p>
// ███████████████████████████████████████         <a
// ███████████████████████████████████████           className="App-link"
// ███████████████████████████████████████           href="https://reactjs.org"
// ███████████████████████████████████████           target="_blank"
// ███████████████████████████████████████           rel="noopener noreferrer"
// ███████████████████████████████████████         >
// ███████████████████████████████████████           Learn React
// ███████████████████████████████████████         </a>
// ███████████████████████████████████████       </header> */}
// ███████████████████████████████████████       <CheckOut>
// ███████████████████████████████████████     </div>
// ███████████████████████████████████████   );
// ███████████████████████████████████████ }
// ███████████████████████████████████████ export default App;
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component/HomePage.js'; 
import Page_Subscribe from './component/Page_Submit.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subscribe" element={<Page_Subscribe />} />
          {/* You can add more routes here if needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
