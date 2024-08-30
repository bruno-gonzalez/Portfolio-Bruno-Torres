import Card from './Card';
import styles from './Tecnologias.module.css';
import ListaTecnologias from './Tecnologias.json';
import api from '../../services/api';
import { useEffect, useState } from 'react';


export default function Tecnologias(){
   const [tecnologias, setTecnologias] = useState([])

   async function getUsers() {
      let req = await api.get('/tecnologias')
      setTecnologias(req.data)
   }

   useEffect(() => {
      getUsers()
       
     }, [])
   

   return(
      <section className={styles.tecnologias__container}>
         <h2 className={styles.titulo__tecnologia}>Tecnologias</h2>
         <div className={styles.lista__container}>
         {tecnologias.map((item) => 
            <Card 
               key={item.id} 
               imagem={item.img} 
               tecnologia={item.stack_name} 
            />)
         }
         </div>
         
      </section>
   )
}