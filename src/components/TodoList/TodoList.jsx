import { useState } from 'react'
import styles from './TodoList.module.css'
import Button from '../Button/Button'

export default function TodoList(){
    const [tarea,setTarea] = useState('')
    const [tareas,setTareas] = useState(['Aprender react',' No morir en el intento'])


    function AddTask(){
        if(tarea.trim() === '') return;
        setTareas([...tareas,tarea])
        setTarea('')
    }

    function EmptyTasks(){
        setTareas([])
    }

    function DeleteTask(indexToDelete){
        setTareas(tareas.filter((_,index) => index !== indexToDelete))
    }

    return (
        <div>
            <div style={{display:'flex',gap:'10px'}}>
            <input
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
            />
            <Button color="green" onClick={AddTask}>Agregar</Button>
            </div>
            <div className={styles.tasks}>
                {tareas.map((tarea,index) => <ul className={styles.taskList}>
                <li key={index} className={styles.task} >
                    <span className={styles.deleteButton}
                    onClick={() => DeleteTask(index)}
                    >
                        x
                    </span>
                    {tarea}
                    </li>
                 </ul>)}
                </div>

            <Button style={{marginBlock:'20px'}}  color='red' onClick={EmptyTasks} >Vaciar</Button>
        </div>
    )
}