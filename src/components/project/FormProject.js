import style from './FormProject.module.css'
import Input from '../form/Input'

function FormProject(){
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


        <div className={style.select}>
        <select name="category_id">
         <option disabled> Selecione a Categoria</option>
        </select>
        </div>
      
        
    </form>

)
}


export default FormProject