import styles from './Carrossel.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import imagensCarrossel from "./imagesCarrossel.json";
import { BsArrowRightShort } from "react-icons/bs"
import 'swiper/css/navigation';

export default function Carrossel() {
   return (
      <>
         <Swiper
            modules={[Autoplay]}
            autoplay
            className={styles.carrossel__container}
            spaceBetween={100}
            slidesPerView={3}
         >

            {imagensCarrossel.map(imagem =>
               <SwiperSlide className={styles.carrossel} key={imagem.id}>
                  <img className={styles.carrossel__imagem} src={imagem.imagem} alt={imagem.nome} />
                  <a className={styles.carrossel__link} href={imagem.repositório} target={"_blank"}>
                     <span>
                        Veja o Repositório <BsArrowRightShort color='#fff' size={20} />
                     </span>
                  </a>
               </SwiperSlide>)
            }
         </Swiper>
         <Swiper
            modules={[Autoplay]}
            autoplay
            className={styles.carrossel__container__mobile}
            spaceBetween={100}
            slidesPerView={1}
         >

            {imagensCarrossel.map(imagem =>
               <SwiperSlide className={styles.carrossel} key={imagem.id}>
                  <img className={styles.carrossel__imagem} src={imagem.imagem} alt={imagem.nome} />
                  <a className={styles.carrossel__link} href={imagem.repositório} target={"_blank"}>
                     <span>
                        Veja o Repositório <BsArrowRightShort color='#fff' size={20} />
                     </span>
                  </a>
               </SwiperSlide>)
            }
         </Swiper>
      </>

   );
};