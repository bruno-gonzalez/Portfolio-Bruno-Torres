import curriculo from "../../imagens/currículo_image.png";
import styles from "./BotaoCV.module.css";
import { HiDownload } from "react-icons/hi"

export default function BotaoCV(){
   return(
      <button href={curriculo} download><a className={styles.link} href={curriculo} download><HiDownload size={20} /> Baixar CV </a></button>
   )
}