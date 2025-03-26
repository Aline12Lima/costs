import Style from "./Button.module.css";

function Button() {
  return (
    <div>
      <button className={Style.button_form}> Criar Projeto</button>
    </div>
  );
}

export default Button;
