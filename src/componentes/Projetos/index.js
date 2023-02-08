import Carrossel from './Carrossel';
import styles from './Projetos.module.css';

export default function Projetos() {
   return( 
      <section className={styles.projetos__container}>
         <h3 className={styles.titulo__projetos}>Projetos</h3>
         <div className={styles.projetos}>
            <Carrossel />
         </div>
      </section>
      
   )
}