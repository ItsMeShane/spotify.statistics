import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroPage from './pages/hero/Hero';
import Statistics from './pages/stats/Statistics';
import NoPage from './pages/NoPage';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' index element={<HeroPage />} />
            <Route path='/stats' element={<Statistics />} />
            <Route path='*' element={<NoPage />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
