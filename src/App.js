import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
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
      </div>
      <section>
        <article className="about_wrap">
          <div className="about_header">
            <h2>Hola, soy Alan</h2>
            <p>
              Soy un web Developer con dos años de experiencia construyendo
              aplicaciones funcionales y visualmente atractivas para darle la
              mejor experiencia al usuario.
            </p>
          </div>
          <div className="about_profile_img"></div>
          <p className="about_studies">
            En 2020 terminé mis estudios en el bootcamp de plataforma 5, donde
            de forma intensiva aprendí en 4 meses las tecnologías necesarias
            para convertirme en un desarrollador web fullStack
          </p>
          <div className="about_bootcamp">
            <img
              src={process.env.PUBLIC_URL + "/bootcamp_bg.webp"}
              alt="foto grupal del bootcamp"
            />
            <span>Primer día del bootcamp, enero 2020</span>
          </div>
          <p className="about_experiencie">
            Al finalizar mis estudios comencé a trabajar como Frontend en el
            equipo de Hello Auto, trabajé con ellos por un año.
            <br />
            Ahora me encuentro en búsqueda de nuevas oportunidades.
          </p>
        </article>
      </section>
    </div>
  );
}

export default App;
