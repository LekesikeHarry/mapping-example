
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Subscribe from './components/Subscribe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe/>} />
    </Routes>
  );
}

export default App;
