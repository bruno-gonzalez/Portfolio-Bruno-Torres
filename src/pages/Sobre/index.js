import styles from './Sobre.module.css'

export default function Sobre() {
   return (
      <section className={styles.sobre__container}>
         <h4 className={styles.sobre__title}>Sobre Mim</h4>
         <div className={styles.sobre}>
            <img className={styles.foto} src='https://github.com/bruno-gonzalez.png' alt='Minha foto' />
            <div className={styles.container__text}>
               <p className={styles.text}>
                  Olá, eu sou o Bruno, desenvolvedor Front-end. 
                  Tenho 20 anos e faço graduação de Sistemas da Informação na Descomplica Faculdade Digital. 
                  Tenho conhecimento em CSS, JavaScript, React e Typescript, 
                  minha meta é ser programador Full stack mas atualmente tenho conhecimento apenas no front-end. 
                  Há 1 ano e meio, concluo diversos cursos de front-end na Alura.
                  Sou apaixonado pelo desenvolvimento de componentes reutilizáveis.
                  Busco minha primeira oportunidade na área de tecnologia.
               </p>
            </div>
         </div>
      </section>
   )
}