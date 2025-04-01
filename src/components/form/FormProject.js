import { useEffect, useState } from "react";
import style from "./FormProject.module.css";
import Input from "../input/Input";
import Select from "../select/Select";
import Button from "../button/Button";

function FormProject({ onSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        onChange={handleChange}
        value={project.name ? project.name : ""}
      />
      <Input
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        onChange={handleChange}
        value={project.budget ? project.budget : ""}
      />

      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        ies
        onChange={handleCategory}
        value={project.category ? project.category.id : ""}
      />
      <Button text={btnText} />
    </form>
  );
}

export default FormProject;
