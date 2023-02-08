import styles from './Cabecalho.module.css';
import { VscGithub } from 'react-icons/vsc';
import { ImLinkedin2 } from 'react-icons/im';
import CabecalhoLink from '../CabecalhoLink';

export default function Cabecalho() {
   return(
      <section className={styles.fixed}>
         <header className={styles.cabecalho__container}>
            <ul className={styles.lista__nav}>
               <li><CabecalhoLink url='./'>Inicio</CabecalhoLink></li>
               <li><CabecalhoLink url='./projetos'>Projetos</CabecalhoLink></li>
               <li><CabecalhoLink url='./sobre'>Sobre Mim</CabecalhoLink></li>
            </ul>
            <ul className={styles.lista__redes}>
               <li>
                  <a target="_blank" href='https://github.com/bruno-gonzalez'>
                     <VscGithub size={30}/>
                  </a> 
               </li>
               <li>
                  <a target="_blank" href='https://www.linkedin.com/in/bruno-torres-45419320a/'> 
                     <ImLinkedin2 size={30}/>
                  </a> 
               </li>
            </ul>
         </header>
      </section>
   )
}