
<h1 align="center">📌 React Firebase Movie App</h1>

<div align="center">
  <h3>
    <a href="https://firebase-movie-app-umitdev.netlify.app/">
      🖥️ Demo
    </a>
     | 
    <a href="https://github.com/Umit8098/React-Project-Firebase-Movie-App.git">
      📂 Repository
    </a>
  </h3>
</div>

<p align="center">
  <img src="./img/movie-app.gif" alt="React Movie App" width="800"/>
  <img src="./img/recipe-app.gif" alt="React Movie App" width="800"/>
</p>

## 📚 Table of Contents

- [📚 Table of Contents](#-table-of-contents)
- [✨ Overview](#-overview)
- [📖 Description](#-description)
- [🚀 Features](#-features)
- [🗂️ Project Skeleton](#️-project-skeleton)
- [🛠️ Built With](#️-built-with)
- [⚡ How To Use](#-how-to-use)
- [📌 About This Project](#-about-this-project)
- [🙏 Acknowledgements](#-acknowledgements)
- [📬 Contact](#-contact)

---

## ✨ Overview

<div align="center"> 

  <img src="./img/movie.png" alt="movies" width="700"/>
  
  --- 
  
  <img src="./img/movie-detail.png" alt="movie-detail" width="700"/> 

  ---

</div>
 

## 📖 Description

🔸 React, Firebase Authentication ve TMDB API kullanılarak geliştirilmiş modern bir **Film Keşif Uygulamasıdır**. Kullanıcılar kayıt olabilir, giriş yapabilir, film arayabilir, detaylarını görüntüleyebilir ve yalnızca giriş yapmış kullanıcıların erişebildiği korumalı sayfalarda gezinebilir.

🔸 Bu proje aynı zamanda **Context API**, **React Router**, **Axios** ve **Bootstrap** kullanılarak component tabanlı bir mimari ile oluşturulmuştur.

---

## 🚀 Features

* ⚛️ **React Router v6** ile client-side routing
* 🔐 **PrivateRouter** ile korumalı sayfa yapısı
* 🔥 **Firebase Authentication** (Email/Password + Google Auth)
* 🎞️ **TMDB API** ile film listeleme ve arama
* 💬 **Toastify** bildirimleri
* 📱 **Mobil uyumlu tasarım**
* 🧠 **Context API** ile global authentication yönetimi
* 🚀 Netlify üzerinde canlı demo
  
---

## 🗂️ Project Skeleton

```
src/
 │
 |----readme.md   
 │
 ├─ auth/
 │   └─ firebase.js
 │   
 ├─ components/
 │   ├─ MovieCard.jsx
 │   ├─ Navbar.jsx
 │   └─ VideoSection.js
 │   
 ├─ context/
 │   └─ AuthContext.jsx
 │   
 ├─ helpers/
 │   └─ ToastNotify.js
 │   
 ├─ pages/
 │   ├─ Login.jsx
 │   ├─ Main.jsx
 │   ├─ MovieDetail.jsx
 │   └─ Register.jsx
 │   
 ├─ router/
 │   └─ AppRouter.jsx
 │   
 ├─ App.js
 ├─ İndex.css
 └─ index.js
```

---

## 🛠️ Built With

- [⚛️ React](https://react.dev/)  
- [🔥 Firebase](https://firebase.google.com/)
- [🧭 React Router v6](https://reactrouter.com/) 
- [🎨 Bootstrap5](https://getbootstrap.com/)
- [🔧 Axios](https://axios-http.com/docs/intro) 
- [💬 React-Toastify](https://fkhadra.github.io/react-toastify/introduction/)
- [🎬 TMDB API](https://developer.themoviedb.org/docs/getting-started) 
- [🌐 Netlify](https://www.netlify.com/)

---

## ⚡ How To Use

🔸 To clone and run this application, you'll need [Git](https://git-scm.com/), [Node.js](https://nodejs.org/), and a package manager (`yarn` or `npm`) installed on your computer.

```bash
# Clone this repository
$ git clone https://github.com/Umit8098/React-Project-Firebase-Movie-App.git

# Navigate into the project folder
$ cd React-Project-Firebase-Movie-App

# Install dependencies
yarn  
yarn start

# or using npm
npm install
npm start
```
🔸 Then open http://localhost:3000 to view it in your browser.

---

## 📌 About This Project

🔸 Bu proje temel React yeteneklerini, Firebase Authentication kullanımını ve 3rd party API entegrasyonunu pekiştirmek amacıyla geliştirilmiştir.

🔸 Ayrıca;

* Component mimarisi
* Context API ile global state yönetimi
* Protected route mantığı
* Responsive tasarım
* Bildirim sistemi

gibi konuları pratik etmek için güzel bir örnek uygulamadır.


---

## 🙏 Acknowledgements

- [🎓Clarusway](https://clarusway.com/) – for the training resources
- [📘React Documentation](https://react.dev/)
- [🔥 Firebase Docs](https://firebase.google.com/)
- [🧭React Router Docs](https://reactrouter.com/en/main/start/overview)
- [💬 React-Toastify Docs](https://fkhadra.github.io/react-toastify/introduction/)
- [🎬 TMDB API Docs](https://developer.themoviedb.org/docs/getting-started) 
- [🌐 Netlify Docs](https://www.netlify.com/)

---

## 📬 Contact

<!-- - Website [your-website.com](https://{your-web-site-link}) -->
- GitHub [@Umit8098](https://github.com/Umit8098)

- Linkedin [@umit-arat](https://linkedin.com/in/umit-arat/)
<!-- - Twitter [@your-twitter](https://{twitter.com/your-username}) -->
