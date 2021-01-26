import './App.css';
import Router from './components/view/Router';
import SearchContextProvider from './contexts/SearchContextProvider/SearchContextProvider';

function App() {
  return (
    <div className="App">
      <SearchContextProvider>
        <Router/>
      </SearchContextProvider>
    </div>
  );
}

export default App;
