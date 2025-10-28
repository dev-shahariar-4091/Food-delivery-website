import { Outlet } from 'react-router-dom';
import Home from './pages/Home/Home';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Home/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
