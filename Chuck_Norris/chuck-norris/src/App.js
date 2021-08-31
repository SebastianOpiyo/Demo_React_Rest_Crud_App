import logo from './logo.svg';
import './App.css';
import Pages from './components';

const URL = {
  CATEGORIES: "https://api.chucknorris.io/jokes/categories",
  JOKE: "https://api.chucknorris.io/jokes/random?category="
}

function App() {
  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;
