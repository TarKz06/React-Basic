import "./App.css";
import AppHeader from "./components/AppHeader";
import MangaItem from "./components/MangaItem";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="app-grid">
        <MangaItem />
        <MangaItem />
        <MangaItem />
        <MangaItem />
      </div>
    </div>
  );
}

export default App;
