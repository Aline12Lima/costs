import { useNavigate } from "react-router-dom";
import FormProject from "../form/FormProject";
import styles from "./NewProject.module.css";

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    //initialize cost and services
    project.any = 0;
    project.services = [];
    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        navigate.push("/projects", { message: "Projeto criado com sucesso! " });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_div}>
      <h1>Criar Projeto</h1>
      <p> Crie seu projeto para depois adicionar os serviços.</p>
      <FormProject onSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
}

export default NewProject;
