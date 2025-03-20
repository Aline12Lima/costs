import style from './FormProject.module.css'

function FormProject(){
    return(
    <form>
        <div  >
         <input className={style.input_form} type="text" placeholder="Insira o nome do projeto"/>
         <input className={style.input_form} type="number" placeholder="Insira o nome do projeto"/>
        </div>      
        <select name="category_id">
         <option disabled> Selecione a Categoria
         </option>
        </select>
        
        
    </form>

)
}


export default FormProject