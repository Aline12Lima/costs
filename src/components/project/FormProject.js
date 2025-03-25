import { useEffect, useState } from 'react'
import style from './FormProject.module.css'
import Input from '../form/Input'
import Select from '../select/Select'
import Button from '../button/Button'

function FormProject(btnText){
    const[categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories",{
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {setCategories(data)})
        .catch((err) => console.log(err))
    },[])

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
         options={categories}

        />
        <Button text={btnText}/>

      
        
    </form>

)
}


export default FormProject