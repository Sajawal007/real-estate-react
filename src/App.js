import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
        <div className='bg-indigo-600 w-full h-screen'>
          <Search/>
          <div className='flex h-3/4 mt-4'>
            <div className='flex-auto w-60 bg-black'>

            </div>
            <div className='flex-auto w-35 bg-white'>

            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
