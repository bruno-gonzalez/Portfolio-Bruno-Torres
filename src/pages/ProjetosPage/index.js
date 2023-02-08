import Projetos from '../../componentes/Projetos';
import styles from './ProjetosPage.module.css';

export default function ProjetosPage() {
   return (
      <section>
         <div className={styles.projetoPage__container}>
            <span className={styles.projetos__titulo}>Projetos Recentes</span>
            <div className={styles.projetos__recentes__container}>
               <div className={styles.projetos__recentes}>
                  <img className={styles.projetos__imagem} src='https://i.imgur.com/DWmw1ik.png' alt='Imagem do projeto Newsletter com Tailwind' />
                  <a className={styles.link} target={"_blank"} href='https://bruno-gonzalez.github.io/Newsletter-com-Tailwind/'>Newsletter com TailwindCSS </a>
               </div>
               <div className={styles.projetos__recentes}>
                  <img className={styles.projetos__imagem} src='https://i.imgur.com/N6Azu97.jpeg' alt='Imagem do projeto Landing-page com Bootstrap' />
                  <a className={styles.link} target={"_blank"} href='https://bruno-gonzalez.github.io/Fruta-Fruto/'>Landing-page com Bootstrap </a>
               </div>
               <div className={styles.projetos__recentes}>
                  <img className={styles.projetos__imagem} src='https://i.imgur.com/VAtlDPW.jpeg' alt='Imagem do projeto Otimizando performance com React' />
                  <a className={styles.link} target={"_blank"} href='https://aluroni-performance-aula2-1.vercel.app/'>Otimizando performance com React</a>
               </div>
            </div>

         </div>
         <Projetos />
      </section>
   );
}
