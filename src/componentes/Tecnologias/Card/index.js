import styles from './Card.module.css';

export default function Card({imagem, tecnologia}){
   return(
      <div className={styles.card__container}>
         <div className={styles.cabecalho__card}>
            <img className={styles.imagem__card} src={imagem} alt={tecnologia} />
         </div>
         <div className={styles.rodape__card}>
         <span>{tecnologia}</span>
         </div>
      </div>
   )
} 