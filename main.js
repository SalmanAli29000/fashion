@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  --primary-color: #e5c641;
  --text-dark: #000000;
  --text-light: #737373;
  --extra-light: #f4f6f6;
  --white: #ffffff;
  --max-width: 1200px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.section__container {
  max-width: var(--max-width);
  margin: auto;
  padding: 5rem 1rem;
}

.section__header {
  position: relative;
  isolation: isolate;
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--text-dark);
}

.section__header::before {
  position: absolute;
  bottom: -10px;
  right: -20px;
  height: 60px;
  width: 150px;
  background-image: url("assets/header-bg.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: -1;
}

.btn {
  padding: 0.75rem 1.5rem;
  outline: none;
  border: none;
  font-size: 1rem;
  color: var(--white);
  white-space: nowrap;
  background-color: var(--text-dark);
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;
}

.btn:hover {
  background-color: var(--primary-color);
}

.modal {
  display: none;
  position: fixed;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: none;
 
}

.modal-content {
  position: relative;
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  text-align: center;
}

 
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}

/* Form Containers */
.form-container {
  display: none;
  z-index: 100;
}

input[type="text"], input[type="password"] {
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
}

button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
}

.switch-link {
  margin-top: 15px;
  font-size: 14px;
}
.switch-link a {
  color: #007BFF;
  text-decoration: none;
}

.switch-link a:hover {
  text-decoration: underline;
}

img {
  display: flex;
  width: 100%;
}

a {
  text-decoration: none;
  transition: 0.3s;
}

ul {
  list-style: none;
}

html,
body {
  scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
}

nav {
  position: fixed;
  isolation: isolate;
  width: 100%;
  z-index: 9;
}

.nav__header {
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary-color);
}

.nav__logo a {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--white);
}

.nav__menu__btn {
  font-size: 1.5rem;
  color: var(--white);
  cursor: pointer;
}

.nav__links {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background-color: var(--primary-color);
  transition: transform 0.5s;
  z-index: -1;
}

.nav__links.open {
  transform: translateY(100%);
}

.nav__links a {
  font-weight: 500;
  color: var(--white);
  white-space: nowrap;
}

.nav__links a:hover {
  color: var(--text-dark);
}

header {
  padding-top: 5rem;
  padding-inline: 1rem;
  margin-bottom: 5rem;
  overflow: hidden;
}

.header__container {
  padding: 0;
  max-width: calc(var(--max-width) - 2rem);
  display: grid;
  background-color: var(--extra-light);
  border-radius: 2rem;
  z-index: 0;
}

.header__content {
  padding: 5rem 2rem;
}

.header__content h1 {
  margin-bottom: 1rem;
  font-size: 4rem;
  font-weight: 900;
  line-height: 5.5rem;
  color: var(--text-dark);
  text-align: center;
}

.header__content h1 span {
  position: relative;
  isolation: isolate;
}

.header__content h1 span::before {
  position: absolute;
  content: "";
  top: 0;
  left: -1rem;
  height: 100%;
  width: calc(100% + 4rem);
  transform: rotate(-2deg);
  z-index: -1;
}

.header__content h1 span:nth-child(1)::before {
  background-color: var(--white);
}

.header__content h1 span:nth-child(4)::before {
  background-color: var(--primary-color);
}

.header__content p {
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-dark);
  text-align: center;
}

.header__btns {
  text-align: center;
}

.header__image img {
  max-width: 500px;
  margin-inline: auto;
}

.banner {
  padding-block: 4rem;
  overflow: hidden;
  background-color: var(--primary-color);
}

.banner__container {
  width: max-content;
  display: flex;
  align-items: center;
  gap: 8rem;

  animation: scroll 45s linear infinite;
}

.banner__container img {
  height: 30px;
}

@keyframes scroll {
  to {
    transform: translateX(calc(-50% - 4rem));
  }
}

.arrival__container .section__header {
  margin-bottom: 4rem;
  max-width: fit-content;
}

.arrival__container .section__header::before {
  content: "";
}

.arrival__grid {
  display: grid;
  gap: 2rem;
}

.arrival__card {
  max-width: 400px;
  margin-inline: auto;
}

.arrival__image {
  margin-bottom: 1rem;
  border-radius: 1rem;
  overflow: hidden;
}

.arrival__image img {
  transition: 0.3s;
}

.arrival__card:hover .arrival__image img {
  transform: scale(1.1);
}

.arrival__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.arrival__content h4 {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-dark);
}

.arrival__content a {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-light);
}

.arrival__content a:hover {
  color: var(--primary-color);
}

.arrival__content span {
  font-size: 1.5rem;
  color: var(--text-light);
}

.sale {
  background-color: var(--primary-color);
}

.sale__container {
  padding-block: 1rem 0;
  display: grid;
  gap: 2rem;
  overflow: hidden;
}

.sale__image img {
  max-width: 500px;
  margin-inline: auto;
  filter: drop-shadow(20px 20px 15px rgba(0, 0, 0, 0.5));
}

.sale__content {
  padding-bottom: 4rem;
}

.sale__content h2 {
  margin-bottom: 1rem;
  font-size: 5rem;
  font-weight: 800;
  line-height: 5.75rem;
}

.sale__content h2 span {
  position: relative;
  isolation: isolate;
}

.sale__content h2 span::before {
  position: absolute;
  content: "";
  top: 0;
  left: -1rem;
  height: calc(100% - 10px);
  width: calc(100% + 4rem);
  background-color: var(--white);
  transform: rotate(-2deg);
  z-index: -1;
}

.sale__content p {
  margin-bottom: 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-dark);
}

.sale__content h4 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
}

.sale__btn .btn:hover {
  color: var(--text-dark);
  background-color: var(--white);
}

.favourite__container {
  overflow: hidden;
}

.favourite__container .section__header {
  margin-bottom: 4rem;
  max-width: fit-content;
}

.favourite__container .section__header::before {
  content: "";
}

.favourite__grid {
  display: grid;
  gap: 2rem;
}

.favourite__card {
  max-width: 575px;
  margin-inline: auto;
}

.favourite__image {
  margin-bottom: 1rem;
  border-radius: 1rem;
  overflow: hidden;
}

.favourite__image img {
  transition: 0.3s;
}

.favourite__card:hover .favourite__image img {
  transform: scale(1.1);
}

.favourite__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.favourite__content h4 {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-dark);
}

.favourite__content a {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-light);
}

.favourite__content a:hover {
  color: var(--primary-color);
}

.favourite__content span {
  font-size: 1.5rem;
  color: var(--text-light);
}

.download__container {
  display: grid;
  gap: 2rem;
  overflow: hidden;
}

.download__image img {
  max-width: 500px;
  margin-inline: auto;
}

.download__content .section__header {
  margin-bottom: 2rem;
  text-align: center;
}

.download__content p {
  margin-bottom: 2rem;
  color: var(--text-light);
  text-align: center;
}

.download__links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.download__links img {
  max-width: 150px;
}

.promo {
  background-color: var(--primary-color);
}

.promo__container .section__header {
  max-width: 700px;
  margin-inline: auto;
  margin-bottom: 1rem;
  color: var(--white);
  text-align: center;
  line-height: 3.25rem;
}

.promo__container p {
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: var(--white);
  text-align: center;
}

.promo__container form {
  width: 100%;
  max-width: 400px;
  margin-inline: auto;
  padding: 5px;
  display: flex;
  align-items: center;
  background-color: var(--white);
  border-radius: 5px;
}

.promo__container input {
  width: 100%;
  padding-inline: 1rem;
  outline: none;
  border: none;
  font-size: 1rem;
  color: var(--text-dark);
}

footer {
  background-color: var(--text-dark);
}

.footer__container {
  display: grid;
  gap: 4rem 2rem;
}

.footer__logo {
  margin-bottom: 1rem;
}

.footer__logo a {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--white);
}

.footer__col p {
  max-width: 300px;
  margin-bottom: 2rem;
  color: var(--text-light);
}

.footer__socials {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer__socials a {
  padding: 5px 10px;
  font-size: 1.5rem;
  color: var(--text-dark);
  background-color: var(--primary-color);
  border-radius: 10px;
}

.footer__socials a:hover {
  color: var(--white);
}

.footer__col h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--white);
}

.footer__links {
  display: grid;
  gap: 1rem;
}

.footer__links a {
  color: var(--text-light);
}

.footer__links a:hover {
  color: var(--white);
}

.footer__bar {
  padding: 1rem;
  font-size: 0.9rem;
  color: var(--text-light);
  text-align: center;
}

@media (width > 540px) {
  .header__content h1 {
    font-size: 5rem;
    line-height: 6.5rem;
  }

  .arrival__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (width > 768px) {
  nav {
    position: static;
    max-width: var(--max-width);
    margin-inline: auto;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  .nav__header {
    padding: 0;
    background-color: transparent;
  }

  .nav__logo a {
    font-size: 1.75rem;
    color: var(--text-dark);
  }

  .nav__menu__btn {
    display: none;
  }

  .nav__links {
    position: static;
    padding: 0;
    flex-direction: row;
    justify-content: flex-end;
    background-color: transparent;
    transform: none;
  }

  .nav__links a {
    color: var(--text-dark);
  }

  .nav__links a:hover {
    color: var(--primary-color);
  }

  header {
    padding-top: 0;
  }

  .header__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    isolation: isolate;
  }

  .header__content :is(h1, p, .header__btns) {
    text-align: left;
  }

  .header__image {
    position: relative;
    height: 100%;
  }

  .header__image img {
    position: absolute;
    width: unset;
    max-width: unset;
    height: 100%;
    right: 1rem;
    top: 2rem;
    z-index: -1;
  }

  .arrival__grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .sale__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .sale__content {
    padding-block: 4rem;
  }

  .favourite__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .download__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .download__image {
    grid-area: 1/2/2/3;
  }

  .download__content :is(.section__header, p) {
    max-width: 400px;
    text-align: left;
  }

  .download__links {
    justify-content: flex-start;
  }

  .footer__container {
    grid-template-columns: repeat(5, 1fr);
  }

  .footer__col:nth-child(1) {
    grid-column: 1/3;
  }
}