import styles from './Sobre.module.css'

export default function Sobre() {
   return (
      <section className={styles.sobre__container}>
         <h4 className={styles.sobre__title}>Sobre Mim</h4>
         <div className={styles.sobre}>
            <img className={styles.foto} src='https://github.com/bruno-gonzalez.png' alt='Minha foto' />
            <div className={styles.container__text}>
               <p className={styles.text}>
                  Meu nome é Bruno, sou desenvolvedor Front-end. Tenho 21 anos e faço graduação de Sistemas da Informação na Descomplica Faculdade Digital. Tenho conhecimento em CSS, JavaScript, C#, React e Typescript. Há 3 anos, concluo diversos cursos na Alura. 
               </p>
            </div>
         </div>
      </section>
   )
}
