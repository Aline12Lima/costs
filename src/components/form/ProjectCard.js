import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function ProjectCard({ name, budget, category }) {
  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>

      <p>
        <span>Orçamento:</span> R${budget}
      </p>

      <p className={styles.category_text}>
        <span className={`${styles[category?.toLowerCase()]}`}></span>
        Categoria:
        {category}
      </p>

      <div className={styles.projects_card_actions}>
        <Link to="/">
          <BsPencil /> Editar
        </Link>
        <button>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
