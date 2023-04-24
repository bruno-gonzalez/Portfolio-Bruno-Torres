import styles from './Banner.module.css';
import bannerImg from '../../imagens/background.jpg';
import BotaoCV from '../BotaoCV';

export default function Banner() {
   return(
      <section 
         className={styles.banner} 
         style={{backgroundImage: `url(${bannerImg})`}}
      >
         <h1 className={styles.titulo}>Olá, eu sou o Bruno!</h1>
         <span>Desenvolvedor Front-end</span>
         <BotaoCV />
      </section>
   )
   
} 