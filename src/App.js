import './App.css';
import Card from './components/Card';
import HomePage from './components/Homepage';
import { Navigate,Route,Routes  } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const  App = () => {
  const id = window.location.pathname.split('/')[2];
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Navigate from='/' to='/users' />} />
          <Route path='/users' element={<HomePage />} />
          <Route path={`/users/${id}`} element={<Card />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
