// import './App.css';
// import './index.css'
import { Routes, Route } from "react-router-dom";
import Confirmation from './Confirmation';
import Abc from './abc';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Confirmation />} />
      <Route path="/abc" element={<Abc />} />
      {/* Add more routes if needed */}
    </Routes>
  );
}

export default App;
