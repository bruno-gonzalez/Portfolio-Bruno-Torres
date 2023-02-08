import Card from './Card';
import styles from './Tecnologias.module.css';
import ListaTecnologias from './Tecnologias.json';

export default function Tecnologias(){
   return(
      <section className={styles.tecnologias__container}>
         <h2 className={styles.titulo__tecnologia}>Tecnologias</h2>
         <div className={styles.lista__container}>
         {ListaTecnologias.map((item) => 
            <Card 
               key={item.id} 
               imagem={item.imagem} 
               tecnologia={item.tecnologia} 
            />)
         }
         </div>
         
      </section>
   )
}