import styles from "./Contato.module.css";
import { MdEmail } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin, AiOutlineWhatsApp } from  "react-icons/ai";

export default function Contato(){
   return(
      <section className={styles.contato__container}>
         <h4 className={styles.contato__titulo}>Contatos</h4>
         <ul className={styles.contato__lista}>
            <li className={styles.contato__item}>
               <a href="mailto:brunotorrres0717@gmail.com" target={"_blank"} className={styles.contato__link}>
                  <span>
                     Email
                  </span>
                  <MdEmail size={35} color={"#fff"} />
               </a>
            </li>
            <li className={styles.contato__item}>
               <a href="https://github.com/bruno-gonzalez" target={"_blank"} className={styles.contato__link}>
                  <span>
                     GitHub
                  </span>
                  <VscGithub size={35} color={"#fff"} />
               </a>
            </li>
            <li className={styles.contato__item}>
               <a href="https://www.linkedin.com/in/obrunotorres/" target={"_blank"} className={styles.contato__link}>
                  <span>
                     Linkedin
                  </span>
                  <AiFillLinkedin size={35} color={"#fff"} />
               </a>
            </li>
            <li className={styles.contato__item}>
               <a href="https://wa.me/5551981748110?text=Ol%C3%A1%2C+sou+o+Bruno%21" target={"_blank"} className={styles.contato__link}>
                  <span>
                     WhatsApp
                  </span>
                  <AiOutlineWhatsApp size={35} color={"#fff"} />
               </a>
            </li>
         </ul>
      </section>
   )
}