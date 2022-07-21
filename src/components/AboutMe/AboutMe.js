import "./AboutMe.css";
export default function AboutMe() {
  return (
    <>
      <img
        src={process.env.PUBLIC_URL + "/about_me_bg.jpg"}
        className="bg_img"
      />

      <article className="about_wrap">
        <header>ACERCA DE MÍ</header>
        {/*
        <div className="logo_container">
         
        </div>
        */}
        <div className="about_header">
          <h2>
            Hola, soy <span>Alan</span>{" "}
            <img
              src={process.env.PUBLIC_URL + "/logo512.png"}
              alt={"logo de react"}
              className="react_logo"
            />
          </h2>
          <p>
            Soy un web Developer con dos años de experiencia construyendo
            aplicaciones funcionales y visualmente atractivas para darle la
            mejor experiencia al usuario.
          </p>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/profile_img.jpg"}
          className="about_profile_img"
          alt="profile"
        />
        <p className="about_studies">
          En 2020 terminé mis estudios en el bootcamp de plataforma 5, donde de
          forma intensiva aprendí en 4 meses las tecnologías necesarias para
          convertirme en un desarrollador web fullStack
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
        <footer>
          <span>Sigo aprendiendo y mejorando</span>
        </footer>
      </article>
    </>
  );
}
