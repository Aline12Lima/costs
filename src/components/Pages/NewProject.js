import FormProject from '../project/FormProject'
import styles from './NewProject.module.css'

function NewProject(){

    return(
    <div className={styles.newproject_div}>
        <h1>Criar Projeto</h1>
        <p> Crie seu projeto para depois adicionar os serviços.</p>
        <FormProject btnText="Criar Projeto"/>
    </div>
    )
}

export default NewProject