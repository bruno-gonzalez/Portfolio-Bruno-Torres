import Banner from '../../componentes/Banner';
import Projetos from '../../componentes/Projetos';
import Tecnologias from '../../componentes/Tecnologias';
import styles from './Inicio.module.css';

export default function Inicio(){
   return(
      <div className={styles.inicio}>
         <Banner />
         <Tecnologias />
         <Projetos />
      </div>
   )
}