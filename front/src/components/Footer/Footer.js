import React from 'react';
import styles from './Footer.module.css'
import { useHistory } from 'react-router-dom'
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(props) {

  const history = useHistory();

  const redirectToYandexReviews = () => {
    history.push('/yandexreview');
  }

  return (
    <>
      <div className={styles.footer}>
        <div id={styles.wrapper}>
          <section id={styles.contact}>
            <div className={styles.inner}>
              <section>
                <form method="post" action="#">
                  <div className={styles.fields}>
                    <div className={`${styles.field} ${styles.half}`}>
                      <label htmlFor="name">Ваше имя</label>
                      <input type="text" name="name" id="name" />
                    </div>
                    <div className={`${styles.field} ${styles.half}`}>
                      <label htmlFor="email">Ваш email</label>
                      <input type="text" name="email" id="email" />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="message">Оставьте сообщение</label>
                      <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                  </div>
                  <ul className={styles.actions}>
                    <li><input type="submit" value="Отправить сообщение" className={styles.primary} /></li>
                  </ul>
                </form>
              </section>
              <section className={styles.split}>
                <section>
                  <div className={styles.contact_method}>
                    <span className={`${styles.icon} ${styles.solid} ${styles.alt} `}><FontAwesomeIcon icon={faEnvelope} style={{ "color": "white" }} /></span>
                    <h3>Email</h3>
                    <span style={{ "color": "white" }}>georgy@escape24.ru</span>
                  </div>
                </section>
                <section>
                  <div className={styles.contact_method}>
                    <span className={`${styles.icon} ${styles.solid} ${styles.alt} `}><FontAwesomeIcon icon={faPhone} style={{ "color": "white" }} /></span>
                    <h3>Наши телефоны</h3>
                    <span style={{ "color": "white" }}>
                      <p>Escape Проспект Большевиков: </p> <a href="tel:+79315826324">+7 (931) 582 63 24</a><br />
                      <p>Escape Парнас: </p> <a href="tel:+79095773683">+7 (909) 577 36 83</a><br />
                      <p>Escape Чкаловская: </p> <a href="tel:+79315808281">+7 (931) 580 82 81</a><br />
                      <p>Escape Ленинский проспект: </p>  <a href="tel:+79533410192">+7 (953) 341 01 92</a><br />
                    </span>
                  </div>
                </section>
                <section>
                  <div className={styles.contact_method}>
                    <span className={`${styles.icon} ${styles.solid} ${styles.alt} `}><FontAwesomeIcon icon={faHome} style={{ "color": "white" }} /></span>

                    <span style={{ "color": "white" }}> ИП СПИРИДОНОВ Г.И.<br />
                      ИНН 784106878441<br />
                      ОГРН 319784700160219</span>
                  </div>
                </section>
              </section>
            </div>
          </section>

          <footer id={styles.footerMini}>
            <div className={styles.inner}>

              <button className={styles.primary} type="button" onClick={redirectToYandexReviews} >Отзывы на Яндекс</button>
              <ul className={styles.copyright}>
                <li>&copy; Made by</li><li>Elbrus Team</li>
              </ul>
            </div>
          </footer>
        </div >
      </div>
    </>
  );
}

export default Footer;
