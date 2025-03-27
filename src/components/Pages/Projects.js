import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";
import Container from "../Layout/Container";
import Message from "../message/Message";
import LinkButton from "./LinkButton";

function Projects() {
  const location = useLocation();

  let message = " ";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1> Meus Projetos</h1>
        <LinkButton
          to="/newproject"
          text="Criar Projeto"
          className={styles.button}
        />
      </div>

      {message && <Message type="success" msg={message} />}
      <Container>
        <p>Projetos</p>
      </Container>
    </div>
  );
}

export default Projects;
