import "./ContacMe.module.css";
import Close from "../Icons/Close";
export default function ContacMe() {
  return (
    <section>
      <header>
        <h2>Contactame</h2>
        <Close />
      </header>
      <form>
        <label>
          Tu nombre
          <input type="text" name="name" />
        </label>
        <label>
          Asunto
          <input type="text" name="asunto" />
        </label>
        <label>
          Tu email
          <input type="text" name="email" />
        </label>
        <label>
          Mensaje
          <textarea type="text" />
        </label>
        <button>Enviar</button>
      </form>
    </section>
  );
}
