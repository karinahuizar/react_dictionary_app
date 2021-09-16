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
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/karinahuizar"
              target="_blank"
              rel="noreferrer"
            >
              Karina Huizar
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/karinahuizar/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
