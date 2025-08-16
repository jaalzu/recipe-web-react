import {useState} from 'react';
import Button from '../Button/Button';
import styles from './Form.module.css'

export default function Form(){
    const [firstName,setFirstName] = useState('pepe')
    const [email,setEmail] = useState('pepon@gnauk,com')
    const [age,setAge] = useState('')
    const [dataSend,setDataSend] = useState('')

    return (
            <form>
                <label>Nombre</label>
                <input type="text" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
                <label>Email</label>
                <input type="email" 
                 value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <label>Edad</label>
                <input type="number" 
                 value={age}
                onChange={(e) => setAge(e.target.value)}
                />
                <Button color='blue'onClick={() => {
                    const data = {
                    firstName:firstName,
                    email:email,
                    age:age
                    };
                setDataSend(data)
                }} >Enviar Datos</Button>
            {dataSend ? (
                <div>
                    <h3>Datos:</h3>
                    <p><b>Nombre: </b>{dataSend.firstName}</p>
                    <p><b>Email: </b>{dataSend.email}</p>
                    <p><b>Edad: </b>{dataSend.age}</p>
                </div>
            ) : (
                <p>Completa el formulario y haz clic para enviar los datos!</p>
            )}
            </form>
    )
}