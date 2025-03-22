import style from './FormProject.module.css'
import Input from '../form/Input'
import Select from '../select/Select'
import Button from '../button/Button'

function FormProject(btnText){
    return(
    <form className={style.form}>
        <Input 
        type='text'
        text='Nome do Projeto'
        name='nome'
        placeholder='Insira o nome do projeto'/>
        <Input
         type='number'
         text='Orçamento do Projeto'
         name='budget'
         placeholder='Insira o orçamento total'/>

        <Select
         name='category_id' 
         text="Selecione a categoria"

        />
        <Button text={btnText}/>

      
        
    </form>

)
}


export default FormProject