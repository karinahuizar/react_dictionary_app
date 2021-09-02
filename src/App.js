import dictionary from "./dictionary.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={dictionary} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>Coded by Karina Huizar</small>
        </footer>
      </div>
    </div>
  );
}
