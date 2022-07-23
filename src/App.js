import "./App.css";
import Experience from "./components/Experience/Experience";
function App() {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + "/principal_background.jpg"} />
      {/*
      <nav className="navbar">
        <button className="options">Mi experiencia </button>
        <button className="options">Mis proyectos</button>
        <button className="options">Acerca de mi</button>
      </nav>
      <div className="content_wrap">
        <div className="title_container">
          <h1 className="principal_title">ALAN FERNÁNDEZ</h1>
          <h2>WEB DEVELOPER</h2>
        </div>
        <h3>2 años de experiencia en desarrollo web</h3>
      </div>
      */}

      <Experience />
    </div>
  );
}

export default App;
