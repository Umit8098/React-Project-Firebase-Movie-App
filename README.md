
- firebase
  - userAuth 
    - Register
    - Login
    - Google account login
    - Logout
    - Forgot Password
- Bootstrap
- Global state -> Context API
- Router
- PrivateRoter (AppRouter comp. içinde..)
- Toastify
- VideoSection


### 📂 Project folder structure

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



- Projemizi create ettik, fazlalık dosya ve importları temizledik.

## Firebase Movie App Project

- User authentication işlemleri -> Firebase 
- movielerin sergilenmesi,
- Eğer user authenticated ise;
  - Search,
  - Detail. yapabilecek.


- Projede kullanacağımız kütüphaneleri kuralım;
  - axios ✅
  - bootstrap ✅
  - firebase ✅
  - react-router-dom ✅
  - react-toastify


#### axios kullanımı;
  https://www.axios-http.com/docs/intro
```bash
- yarn add axios #or
- npm install axios
```



#### Bootstrap React

- React'ta iki farklı şekilde bootstrap kullanılabiliyor.
  - 1. Klasik Js'de kullandığımız format.
  - 2. Component besed format.

- React ortamında style verirken, normalda sadece class yeterli olurken react'ta className şeklinde kullanılmaktadır. 

    https://react-bootstrap.netlify.app/


```bash
- yarn add bootstrap  # klasik bootstrap
- npm install bootstrap  # klasik bootstrap
    #or
- yarn add react-bootstrap bootstrap # component base bootstrap 
- npm install react-bootstrap bootstrap # component base bootstrap
```


1. Yöntem Klasik;

```bash
- yarn add bootstrap #or
- npm install bootstrap
```

- Ne gelir; Sadece CSS ve JS dosyaları
- Ne eksik; React component’leri yok, <Button> gibi şeyleri kullanamazsın, sadece class ile manuel HTML yazarsın

```jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-5">
      <h1>Hello Bootstrap!</h1>
      <button className="btn btn-primary">Click Me</button>
    </div>
  );
}

export default App;
```
- ✅ Burada <button> normal HTML.
- ✅ btn btn-primary class’ları ile Bootstrap stilleri uygulanıyor.
- ❌ Ama <Button> gibi React component’lerini import edip kullanamazsın.



2. Yöntem Component Base;

```bash
- yarn add react-bootstrap bootstrap #or
- npm install react-bootstrap bootstrap
```

- Ne gelir; CSS + React component’leri
- Ne eksik; Hiçbir şey eksik değil, React ile daha kolay component kullanımı


- Eğer projende React component’lerini kullanmayacaksan, yarn add bootstrap yeterli.
- Ama React component’lerini kullanmak istiyorsan (<Button>, <Navbar> vs.) o zaman react-bootstrap da lazım.

```jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";

function App() {
  return (
    <Container className="mt-5">
      <h1>Hello React Bootstrap!</h1>
      <Button variant="primary">Click Me</Button>
    </Container>
  );
}

export default App;
```

- ✅ <Button> ve <Container> gibi component’ler doğrudan React mantığında kullanılabiliyor.
- ✅ Props ile (variant="primary") Bootstrap stillerini yönetmek kolaylaşıyor.
- ✅ Kod daha “React tarzı” oluyor.



- şu anda kasik yöntemle bootstrap kullanacağız.

  - 1. adım;

```bash
- yarn add bootstrap # klasik bootstrap #or
- npm install bootstrap  # klasik bootstrap
```

  - 2. adım;

- parent file'lardan birisinde import edilecek, App.js'ye de import edilse olur.

```js
{
  /* The following line can be included in your src/index.js or App.js file */
  /* Aşağıdaki satır src/index.js veya App.js dosyanıza eklenebilir */
}

import 'bootstrap/dist/css/bootstrap.min.css';
```

index.js
```js
{
  /* The following line can be included in your src/index.js or App.js file */
  /* Aşağıdaki satır src/index.js veya App.js dosyanıza eklenebilir */
}
import 'bootstrap/dist/css/bootstrap.min.css';
```

##### Bootstrap Js; (Bu kımı kullanmayacağımız için bu projede eklemedik.)

- React tarafında sadece CSS import etmek yetiyor çoğu zaman.
- Ancak Bootstrap’in bazı özellikleri JavaScript’e bağımlı:
  - Modals (pencereler)
  - Dropdown’lar
  - Tooltips
  - Popovers

- Bu özellikler bundle JS dosyası olmadan çalışmaz.
- Yani index.html’de script olması bir anlamda JS tarafını da yüklüyor, böylece modal veya dropdown gibi component’ler sorunsuz çalışıyor.

- package.json -> "bootstrap": "5.2.0-beta1"
  - Bu, npm/yarn ile yüklenmiş Bootstrap paketini gösteriyor.

- index.js -> `import 'bootstrap/dist/css/bootstrap.min.css'`;
  - Bu, Bootstrap CSS’ini React uygulamasına dahil ediyor.
  - Artık <div className="btn btn-primary"> gibi class’lar çalışacak.
  

- index.js -> `import 'bootstrap/dist/js/bootstrap.bundle.min.js'` diyerek de bundle’ı index.js’e import edilebilir. 
  - Eğer sadece CSS ile stilleri kullanılacaksa, bundle gerekmez. (bu import gerekmez.)
  - Eğer Bootstrap JS özelliklerini kullanılacaksa, script gerekli.

index.js
```js
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Eğer Bootstrap'in JavaScript özelliklerini kullanacaksan, bu satırı eklemen gerekir.
// Alternatif olarak, CDN script etiketini public/index.html dosyasına ekleyebilirsin.
// Eğer sadece CSS ile stilleri kullanıyorsan, bu satıra gerek yok.
// Best practice olarak, React ortamında import 'bootstrap/dist/js/bootstrap.bundle.min.js' diyerek de bundle'ı index.js'e import edebilirsin. Böylece CDN script'e gerek kalmaz ve tüm dosyalar React'in build sürecine dahil olur.
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

#### React Router Kurulum;

```bash
# with yarn
- yarn add react-router-dom

# with npm
- npm install react-router-dom
```




- Projeye başlarken, hazır olan index.css'i clarusway repodan indirelim,

index.css
```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap");

* {
  box-sizing: border-box;
}

body {
  font-family: "Poppins", "sans-serif";
  margin: 0;
}

.root {
  display: flex;
  flex-direction: column;
}

.movie {
  background-color: #3f51b5;
  border-radius: 3px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 1rem;
  width: 300px;
  position: relative;
  cursor: pointer;
}

.movie img {
  object-fit: cover;
  height: 450px;
  max-width: 100%;
}

.movie-over {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  color: #000;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  max-height: 100%;
  padding: 1rem;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
}

.movie:hover .movie-over {
  transform: translateX(0%);
}

.tag {
  border-radius: 5px;
  padding: 0.7rem;
  font-weight: bold;
}

.tag.green {
  background-color: #1b5e20;
}

.tag.orange {
  background-color: #f57f17;
}

.tag.red {
  background-color: #7f0000;
}

.search {
  width: 100%;
  justify-content: center;
  background-color: #bdbdbd;
  padding: 1rem;
  display: flex;
  justify-content: center;
}

.search-input {
  height: 30px;
  width: 300px;
  border-radius: 5px;
  outline: none;
  border: none;
}

.navbar {
  padding: 1rem 3rem;
  background-color: #0d47a1 !important;
}

.form-image {
  min-width: 800px;
  min-height: 800px;
}

.register-form {
  flex: 1;
  background-color: #eeeeee;
  color: #000000;
  padding: 5rem;
}

.form-title {
  text-align: center;
  margin-bottom: 3rem;
}

.form-label {
  padding-left: 1.5rem;
  margin-bottom: 0px;
  font-size: 1.5rem;
}

.form-control {
  width: 90%;
  margin: 20px;
}

.btn-primary {
  margin-left: 1.5rem;
}

.link {
  color: #0b5ed7;
  text-decoration: underline;
  margin-left: 1.5rem;
  cursor: pointer;
}
```


App.js
```js

function App() {
  return (
    <div className="container mt-5">
      App
    </div>
  );
}

export default App;
```

pages/Login.js
```jsx
import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login;
```

pages/Main.j
```jsx
import React from 'react'

const Main = () => {
  return (
    <div>Main</div>
  )
}

export default Main;
```


pages/MovieDetail.jsx
```jsx
import React from 'react'

const MovieDetail = () => {
  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail;
```


pages/Register.jsx
```jsx
import React from 'react'

const Register = () => {
  return (
    <div>Register</div>
  )
}

export default Register;
```


AppRouter.jsx
```jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MovieDetail from '../pages/MovieDetail';


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Main/> } />
            <Route path="/login" element={ <Login/> } />
            <Route path="/register" element={ <Register/> } />
            <Route path="/details/:id" element={ <MovieDetail/> } />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
```


App.js
```jsx
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="container mt-5">
      <AppRouter />
    </div>
  );
}

export default App;
```



- Route yapısını kurduk.
- Navbar yapısını kuralım;
- Kabaca Navbarı oluşturup, AppRouter'da çağıralım,

components/Navbar.jsx
```jsx
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className='container-fluid'>
                <Link to={"/"} className='navbar-brand text-white'>
                    <h4>UmitDev Movie App</h4>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
```


AppRouter.jsx
```jsx
import Navbar from '../components/Navbar';

    <BrowserRouter>
        <Navbar />
        <Routes>

```



- Navbar'daki link'leri aktif hale getirelim;

components/Navbar.jsx
```jsx
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  
    const navigate = useNavigate();

    // const currentUser = {displayName:"umit developer"}; // Dummy current user object for demonstration
    const currentUser = false; // No user is logged in
    
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
            <div className='container-fluid'>
                <Link to="/" className='navbar-brand text-white'>
                    <h4>UmitDev Movie App</h4>
                </Link>
                <div className='d-flex text-white align-items-center'>
                    {/* {currentUser && <span className='me-3'>Welcome, {currentUser.displayName}</span>} */}
                    {currentUser ? (
                        <>                        
                            <h5 className='mb-0 text-capitalize'>{currentUser.displayName}</h5>
                            <button className='ms-2 btn btn-outline-light'>Logout</button>                    
                        </>
                        ) : (
                        <>
                            <button 
                                to="/login" 
                                className='ms-2 btn btn-outline-light' 
                                onClick={() => navigate("/login")}>Login
                            </button>
                            <button 
                                to="/register" 
                                className='ms-2 btn btn-outline-light' 
                                onClick={()=> navigate("/register")}>Register
                            </button>
                        </>
                        )                    
                    }
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
```



- Register page'ini oluşturalım;

Register.jsx
```jsx
import React, { useState } from 'react'

const Register = () => {

  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      password
    });
  }

  return (
    <div className='d-flex justify-content-center'>

        <div className='form-image d-none d-md-block'>
          <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
        </div>
        
        <div className='register-form'>
        
          <h1 className='form-title display-3'>Register</h1>
          <form 
            action="" 
            id='register'
            onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="firstName" className='form-label'>
                First Name
              </label>
              <input 
                type="text" 
                className='form-control' 
                id='firstName' 
                placeholder='Enter your first name.'
                required
                onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className='mb-3'>
              <label htmlFor="lastName" className='form-label'>
                Last Name
              </label>
              <input 
                type="text" 
                className='form-control' 
                id='lastName' 
                placeholder='Enter your last name.'
                required
                onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className='mb-3'>
              <label htmlFor="email" className='form-label'>
                Email
              </label>
              <input 
                type="email" 
                className='form-control' 
                id='email' 
                placeholder='Enter your email adress.'
                required
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='mb-3'>
              <label htmlFor="password" className='form-label'>
                Password
              </label>
              <input 
                type="password" 
                className='form-control' 
                id='password' 
                placeholder='Enter your password.'
                required
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <input 
                type="submit" 
                className='btn btn-primary form-control' 
                value='Register'/>
          </form>
        
        </div>
    </div>
  )
}

export default Register;
```



- Login page'ini oluşturalım;

Login.jsx
```jsx
import React, { useState } from 'react'

const Login = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
  
    const handleLogin = (e) => {
      e.preventDefault();
      console.log({
        email,
        password
      });
    }
  
  return (
    <div className='d-flex justify-content-center'>

        <div className='form-image d-none d-md-block'>
          <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
        </div>
        
        <div className='register-form'>
        
          <h1 className='form-title display-3'>Login</h1>
          <form 
            action="" 
            id='register'
            onSubmit={handleLogin}>
          
            <div className='mb-3'>
              <label htmlFor="email" className='form-label'>
                Email
              </label>
              <input 
                type="email" 
                className='form-control' 
                id='email' 
                placeholder='Enter your email adress.'
                required
                onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className='mb-3'>
              <label htmlFor="password" className='form-label'>
                Password
              </label>
              <input 
                type="password" 
                className='form-control' 
                id='password' 
                placeholder='Enter your password.'
                required
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className='link'>
              Forgot password?
            </div>
            <input 
                type="submit" 
                className='btn btn-primary form-control' 
                value='Login'/>
          </form>
          <button className='btn btn-primary form-control mt-3'>
            Continue with Google
          </button>
        
        </div>
    </div>
  )
}

export default Login;
```



### Firebase

- Firebase nedir? Firebase işlemlerine geçelim;
- Hazır Backend
- user authentication.
- database - CRUD
- kendine has methodları var. Documantasyondan bakılarak bu methodlar kullanılacak. 

- Firebase -> Go to Console -> Add a new project -> create new project -> project name -> enable gemini -> enable google -> projenin içindeyiz;
- + Add app -> Web ->
  - register;
    -  griş: movie-app ->enter -> bize bir SDK (Projenin configurasyonunu oluşturmak için gerekli kodlar.) oluşturuyor. Bunu projenin settings'inden alabiliriz.
    -  -> Continue go to Console
    -  Build -> Authentication -> Get Started -> Sign-in-methods -> 
       -  Bizim kullanacağımız iki tane Sign-in-methods var;
          -  emeail ->
             -  Enable -> Save
          - Add new Provider;
          - Google -> 
            - Enable 
            - email istiyor, -> umitarat8098@gmail.com giriyoruz, -> Save

- Doc'dan dokümantasyon'a gidiyoruz;
  - Build -> Authentication -> Web -> Get Started -> 




- React projesine firebase kuruyoruz, (Biz React projesini `yarn` ile kurduğumuz için yarn kullanarak..)

```bash
- yarn add firebase 
# or
- npm install firebase
```


- src/auth/firebase.js isminde bir dosya create ediyoruz, dokümantasyondan copy-past ediyoruz;

src/auth/firebase.js
```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
```


- firebase console -> project settings bölümünden firebaseconfig ayarlarını al;
- firebase.js içindeki firebaseConfig'e ekle.
    
firebase.js
```js
const firebaseConfig = {
  apiKey: "AIzaSyCi16wPWpZae_PuD-cxfo8LXEQedTvHWPs",
  authDomain: "movie-app-bc8a4.firebaseapp.com",
  projectId: "movie-app-bc8a4",
  storageBucket: "movie-app-bc8a4.firebasestorage.app",
  messagingSenderId: "1072726470433",
  appId: "1:1072726470433:web:4c7d2af47bc3e4d5751860"
};
```

- Artık biz projemizde `auth` 'u kullanacağız.
- Fakat öncesinde bu verilerimizin gizlenmesi gerekli.
- Bunun için root directoryde `.env` file oluşturup gizli verilerimizi buraya kaydediyoruz.

.env
```
REACT_APP_apiKey =AIzaSyCi16wPWpZae_PuD-cxfo8LXEQedTvHWPs
REACT_APP_authDomain =movie-app-bc8a4.firebaseapp.com
REACT_APP_projectId =movie-app-bc8a4
REACT_APP_storageBucket =movie-app-bc8a4.firebasestorage.app
REACT_APP_messagingSenderId =1072726470433
REACT_APP_appId =1:1072726470433:web:4c7d2af47bc3e4d5751860
REACT_APP_IMDB_KEY =
```

firebase.js
```js
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket ,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};
```


- projeyi durdurup tekrar run ediyoruz;


#### 1. Register - UserCreate - Sign up new users - Yeni kullanıcı oluşturulması; `createUserWithEmailAndPassword`
  
- Şimdi sıra `Sign up new users` (Yeni kullanıcıları kaydedin - Register)kısmında; 
- `createUserWithEmailAndPassword().then().catch()` asenkron method yapısını alıp kullanıyoruz;
- Bu methodun .then().catch() yapısını kullanmadık da async-await yapısıyla kullandık. Çünkü bu bir promise yapı.
- Bu method bizden `auth`, `email`, `password` parametrelerini istiyor.
  - `auth` -> firebase'i configure ederken oluşturmuştuk,
  - `email` ve  `password` verisini de, bu fonksiyonu `createUser()` fonksiyonu içinde çağırarak kullandığımız için, çağırdığımız yerde (Register componentinde çağırarak kullanıyoruz..), ne zaman? -> submit anında ekliyoruz.

- Bu method ile bir user'ın email ve password bilgileriyle register ediyoruz.
- Bununiçin bir `createUser()` isminde bir function oluşturup içinde kullanalım;
- `createUser()` fonksiyonuna email ve password parametrelerini verip, bu parametreler ile `createUserWithEmailAndPassword()` fonksiyonunu çalıştıracağız.

firebase.js
```js
import { createUserWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async(email, password) => {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
        let userCredential= await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredential)
    } catch (error) {
        console.log(error);
    }
};
```

- Artık yeni bir user create eden fonksiyonumuz (`createUser()`) hazır.
- Bunu nerede kullanacağız? -> Register componentimizde.
- Register componentimizdeki formumuzun onSubmit'indeki `handleSubmit()` fonksiyonumuz içinde kullanacağız;

Register.js
```js
...
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    createUser(email, password);
  };
...
    <form 
    action="" 
    id='register'
    onSubmit={handleSubmit}>
...
```


- Şimdi user register oluyor, consoldan bakıyoruz;
  - Bize register'da girdiğimiz veriler ile birlikte UserCredentialImp adında bir json veri döndürüyor.


- Artık user register olduktan sonra onu /home 'a yönlendirmeliyiz.
- Bunu da useNavigate() hook'u ile yapacağız.
- Fakat eğer register olmaya çalışırken bir hata oluşursa kullanıcının /home'a gitmesini önlemek için, createUser() içindeki try bloğunda eğer register işlemi başarılıysa /home'a yönlendir şeklinde yazmalıyız.
  - useNavigate()'i parametre olarak createUser()'a gönderip..
  - firebase.js'deki createUser()'da parametre olarak alıp, try bloğunda işlem başarılı ise kullanarak kullanıcıyı register sonrası /home'a yönlendirebiliz.     

Register.js
```js
...
import { useNavigate } from 'react-router-dom';
...
  const navigate = useNavigate();
...
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    createUser(email, password, navigate);
    // navigate("/");
  };
...
```


firebase.js
```js
...
export const createUser = async (email, password, navigate) => {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
        let userCredential= await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential)
        navigate("/");
...
```



#### 2. Login - Sign in existing users - Mevcut kullanıcıların oturum açması; `signInWithEmailAndPassword`


firebase.js
```js
import { 
    ..., 
    signInWithEmailAndPassword,
} from "firebase/auth";

...
export const signIn = async (email, password, navigate) => {
    //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
    try {
        let userCredential= await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredential)
        navigate("/");
...
```


Login.jsx
```jsx
...
import { useNavigate } from 'react-router-dom';
...
    const navigate = useNavigate();
...
    const handleLogin = (e) => {
      e.preventDefault();
      console.log({
        email,
        password
      });
      signIn(email, password, navigate)
    }
...
```

- Login işlemi de tamam. (Mevcut register olmuş bir user, email ve password verisi ile artık login olabiliyor.)



#### 3. Context yapısının kurulması;Register ve Login işlemleri sonucu dönen authentication verilerinin global state'te tutulması;

- Neden bu dönen authentication verileri global state'te tutuluyor?
- Çünkü, bu authentication verilerini birçok componentte kullanacağız. 
- Bunların klasik react props yapısı ile aktarılması karmaşık ve zahmetli olacağından global state'te tutacağız.
- Bu verileri bir context'te tutacağız.
- Bunun için bir AutContext.jsx oluşturup ilgili yerleri burada oluşturacağımız provider ile sarmallayacağız.

- src/context/AutContext.jsx

src/context/AuthContext.jsx
```jsx
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(false);
  return (
    <AuthContext.Provider value={{currentUser}}>
        { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
```

- Oluşturduğumuz bu AuthContextProvider ile App'imizi (içerisinde AppRouter var..)sarmallarsak, oluşturduğumuz contex yapısı ile global state'teki verilerimize tüm app'imizde erişimi sağlamış oluruz. 
  
App.js
```js
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
```


- Artık, AuthContextProvider'ın children'ı olarak AppRouter sarmalanmış olduğundan ve de AppRouter da tüm App'imiz olduğundan, context yapımızdaki global state'lere app'izin içindeki tüm componentlerden erişimimiz sağlanmış oldu.  

- Context yapımızı best-practice olarak kurduk. 
- Artık; 
- Consume etmek / Tüketmek /Kullanmak;
- Bu global state'e nerede ihtiyavımız var;
- Mesela Navbar'da 

Navbar.jsx
```jsx
...
// Context'ten global state'i import edelim
import { AuthContext } from '../context/AuthContext';

...
    // Global state'den currentUser bilgisini alacağız..
    const {currentUser} = useContext(AuthContext); // No user is logged in
```

- Evet artık Navbar'da, currentUser verisi, global state'ten alınıp, eğer currentUser varsa logout linki, yoksa login ve register linkleri display ediliyor. 

- Şimdi sıradaki işlemimiz, currentUser'ı firebase'den çekeceğiz;



#### 4. `onAuthStateChanged` sign in (login) ile user verisinin sessionStorage'a kaydedilmesi - Set an authentication state observer and get user data (Bir kimlik doğrulama durumu gözlemcisi ayarlayın ve kullanıcı verilerini alın);

firebase.js
```js
...
export const signIn = async (email, password, navigate) => {
    //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
    try {
        let userCredential= await signInWithEmailAndPassword(auth, email, password);

        //! user verisini sessionStorage'a kaydet..
        sessionStorage.setItem('user', JSON.stringify(userCredential.user));
        
        console.log(userCredential)
        navigate("/");
    } catch (error) {
        console.log(error);
    }
};
```


- AuthContext içerisinde useEffect() ile sayfa update/refresh edilince, sessionStotage'daki user verisi, currentUser'a aktarılarak, tüm app içerisinde user'ın verisi ulaşılabilir oluyor.

AuthContext.jsx
```jsx
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(false);
    console.log("Provider currentUser => ", currentUser);

    //! sessionStorage'dan user verisini al ve currentUser'a tanımla;
    useEffect(()=> {
        setCurrentUser(JSON.parse(sessionStorage.getItem('user')));    
    }, []);
  
    return (
    <AuthContext.Provider value={{currentUser}}>
        { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
```

- Fakat bu işlemi böyle değil de firebase'in bir methodu olan `onAuthStateChanged` ile yapacağız.
- signIn'deki user verisini sessionStotage'a kaydeden kodu da  siliyor/yoruma alıyoruz.
- AuthContext.js'deki useEffect() içinde currentUser'ı sessionStorage'dan çeken koda da yoruma alıp yenisi ile değiştiriyoruz.

firebase.js
```js
import { 
    ...
    onAuthStateChanged,
} from "firebase/auth";
...
export const signIn = async (email, password, navigate) => {
    ...
    // //! user verisini sessionStorage'a kaydet..
    // sessionStorage.setItem('user', JSON.stringify(userCredential.user));

...
export const userObserver = (setCurrentUser) => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(false);
      }
    });
}
```

AuthContext.jsx
```jsx
...
import { userObserver } from '../auth/firebase';
...
    //! sessionStorage'dan user verisini al ve currentUser'a tanımla;
    useEffect(()=> {
        // setCurrentUser(JSON.parse(sessionStorage.getItem('user')));  
        userObserver(setCurrentUser);
    }, []);
...
```

- Bu sayede artık login veya register olduğumuzda user verisi sessionStorage'a kaydedilmeyecek, firebase'in sisteminde tutulacak.
- userObserver() ile firebase sisteminde login olup olmadığımız gözleniyor ve eğer login isek user verilerimiz setCurrentUser ile currentUser'a tanımlanıyor. 
- Her update/render'da bu işlem yapılıyor.  
- global state'te tutulan currentUser verisine de Context yapısı ile de tüm componentlerden erişilebilir durumda bir yapımız var. 


#### 5. `signOut` To sign out a user, call signOut() - Bir kullanıcının oturumunu kapatmak signOut() kullanımı;

- Ayrıca logout işlemini de birlikte yapalım;
- dokümantasyon `Password Authentication` kısmının en altında -> To sign out a user, call signOut:
 
firebase.js
```js
import { 
    ...,
    signOut,
} from "firebase/auth";

export const logOut = () => {
    signOut(auth)
};
```


Navbar.jsx
```jsx
...
import { logOut } from '../auth/firebase';
...
    <button className='ms-2 btn btn-outline-light' onClick={()=>logOut()}>Logout</button>                    
...
```



#### 6. `updateProfile` Update a user's profile updateProfile() - Bir kullanıcının profilini güncelleme;

- kullanıcı eğer kendisi register olursa user profile'ı oluşmuyor. (Google ile register olursa google profile'ı otomatik olarak kullanıcının user profile'ı olarak tanımlanıyor.)
- Bunu oluşturmak için `Manage User` kısmından `updateProfile` methodunu kullanıyoruz.
- Bu işlemi de doğru anda yapmalıyız.
- Doğru an ise;
  - kullanıcının kayıt olduğu register aşamasıdır. kullanıcı kayıt olurken profile'ını düzgün oluştursun ki bunu daha sonra kullanabilelim.
  - Dokümantasyondan ilerlerken sadece `updateProfile()` methodunu kullanacağız,  .then().catch() 'e gerek yok.
  - kullanıcıyı register yaptığımız createUser içerisinde, try bloğunda bu methodu kullanacağız.
  - Şuanda sadece displayName'i güncelleyeceğiz.

firebase.js
```js
import { 
    ...,
    updateProfile,
} from "firebase/auth";
...
export const createUser = async (email, password, navigate, displayName) => {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
        let userCredential= await createUserWithEmailAndPassword(auth, email, password);
        //? kullanıcı profilini güncellemek için kullanılan firebase metodu
        await updateProfile(auth.currentUser, {
            displayName: displayName
        })
        navigate("/");
        console.log(userCredential)
    } catch (error) {
        console.log(error);
    }
};
...
```

- Fonksiyonumuzu ayarladık, register içinde updateProfile() methodumuza parametre olarak göndereceğimiz ve displayName olarak kullanılacak veriyi, bu fonksiyonu çağırdığımız yer olan Register'da;
  - handleSubmit() içinde,
  -  displayName isminde bir değişken tanımlayıp, bu değişkene firstName ve lastName tanımlayıp, bunu da createUser fonksiyonuna parametre olarak gönderebiliriz.

Register.jsx
```jsx
...
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = `${firstName} ${lastName}`
    console.log(firstName, lastName, email, password);
    createUser(email, password, navigate, displayName);
    // navigate("/");
  };
...
```



#### 7. `GoogleAuthProvider` Authenticate Using Google with JavaScript - Java Script ile Google'ı Kullanarak Kimlik Doğrulama;

- Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle (firebase->app->build->authentication->settings->authorized domain kısmında add domain..)

- 1. adım;
    export const signUpProvider = () => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    const provider = new GoogleAuthProvider();

- 2. adım;
  - 1. yöntem: pop-up veya redirect
  - 2. yöntem: burada pop-up kulllanacağız;

  - 1. yöntemden devam;

firebase.js
```js
import { 
    ...
    GoogleAuthProvider,
} from "firebase/auth";

//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Google
//! Google ile girişi enable yap
//* => Authentication => sign-in-method => Authorized domains => add domain
//! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle (firebase->app->build->authentication->settings->authorized domain kısmında add domain..)
export const signUpProvider = (navigate) => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    const provider = new GoogleAuthProvider();
    //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
    signInWithPopup(auth, provider)
      .then((result) => {
      console.log(result)
      navigate("/")
    }).catch((error) => {
      console.log(error)
    });
};

```



- Bu yapıyı Login'de kullanacağız;
- Continue with Google button'ına onClick eventi ile;
- ayrıca navigate parametresini de signUpProvider fonksiyonunun çalıştığı yerde kullanmak için parametre olarak gönderiyoruz ki bizi girişten sonra home page'e yönlendirsin.

Login.jsx
```jsx
...
    const handleProviderLogin = () => {
        signUpProvider(navigate);
    };
...
  <button 
    className='btn btn-primary form-control mt-3' 
    onClick={handleProviderLogin}
  >
    Continue with Google
  </button>
...
```

- Evet artık google ile login olabiliyoruz.

- Buraya kadar login, register işlemleirini yaptık. Şimdi movie datalarını çekip sergileyeceğiz.
- Main componentimizde API'den veri çekip MovieCard componentinde sergileyeceğiz.


### TMDB API den veri çekme; 

- TMDB'den üye olarak aldığımız API-Key'i .env dosyamıza kaydedelim;
    TMDB API-Key : `dbafa9daa73dd06bfecebb96847ccc32`

Main.jsx
```jsx
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect( () => {
    getMovies(FEATURED_API)
  }, [])

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then(res => console.log(res.data.results))
      .catch(err => console.log(err))
      .finaly(() => setLoading(false));  
  }

  return (
    <div className='d-flex justify-content-center flex-wrap'>
      { loading ? 
          (<div className="spinner-border text-primary m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          ) : (
            movies?.map((movie) => null)
          )
      }
    
    </div>
  )
}

export default Main;
```


MovieCard.jsx
```jsx

//! doc.'a göre, data içindeki poster_path'i imageAPI'nin sonuna eklememiz gerekiyor.
const IMG_API = 'https://image.tmdb.org/t/p/w1280';
//! image olmayan movie'ler için;
const defaultImage =
  'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

const MovieCard = () => {
  return (
    <div className="movie">
        <img
            loading="lazy" 
            src={poster_path ? IMG_API + poster_path : defaultImage} 
            alt="movie-card" 
        />
        <div className="d-flex align-items-baseline justify-content-between p1 text-white">
            <h5>{title}</h5>
            <span>{vote_average}</span>
        </div>
        <div className="movie-over">
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>

    </div>
  )
}

export default MovieCard;
```


- API'den Veri çekme ve sergileme;

Main.jsx
```jsx
import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
// const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect( () => {
    getMovies(FEATURED_API)
  }, [])

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      // .then(res => console.log(res.data.results))
      .then(res => setMovies(res.data.results))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));  
  }

  return (
    <div className='d-flex justify-content-center flex-wrap'>
      { loading ? 
          (<div className="spinner-border text-primary m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          ) : (
            movies?.map((movie) => <MovieCard key={movie.id} {...movie}/>)
          )
      }
    
    </div>
  )
}

export default Main;
```


MovieCard.jsx
```jsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

//! doc.'a göre, data içindeki poster_path'i imageAPI'nin sonuna eklememiz gerekiyor.
const IMG_API = 'https://image.tmdb.org/t/p/w1280';
//! image olmayan movie'ler için;
const defaultImage =
  'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

const MovieCard = ({poster_path, title, vote_average, overview, id}) => {
    
    // context'ten currenIUser verisinin çekilmesi;
    const {currentUser} = useContext(AuthContext)

    const setVoteClass = (vote) => {
        if (vote > 8) {
            return "green"
        } else if (vote >= 6) {
            return "orange"
        } else {
            return "red"
        }
    }
  return (
    <div className="movie">
        <img
            loading="lazy" 
            src={poster_path ? IMG_API + poster_path : defaultImage} 
            alt="movie-card" 
        />
        <div className="d-flex align-items-baseline justify-content-between p1 text-white">
            <h5>{title}</h5>
            {currentUser && (
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            )}
        </div>
        <div className="movie-over">
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>

    </div>
  )
}

export default MovieCard;
```



#### Search;

- user'ın login olma şartına bağlı bir search yapısı;
  
Main.jsx
```jsx
...
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {

  ...
  const [searchTerm, setSearchTerm] = useState("")

  ...

  // search movie için search API'si ve aranacak movie
  const handleSubmit = (e) => {
    e.preventDefault()
    // getMovies(SEARCH_API+searchTerm)
    // searchTerm && getMovies(SEARCH_API+searchTerm)
    if (currentUser && searchTerm) {
      getMovies(SEARCH_API+searchTerm);
    } else if (!searchTerm) {
      alert("Please login to search a movie");
    } else {
      alert("Please login.")
    }
  }

  return (
    <>
      {/* search movie için form */}
      <form 
        action="" 
        className='search'
        onSubmit={handleSubmit}
      >
        <input 
          type="search"
          className='search-input'
          placeholder='search a movie...'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          type='submit' 
          className='btn btn-primary px-4 ms-2 rounded-pill shadow-sm'
        >Search</button>
      </form>

      ...
      
```



#### Detail;

- Bir Movie Card'a onClick ile, MovieDetail'e movie'nin id'si ile birlikte yönlendirme;

MovieCard.jsx
```jsx
...
import { useNavigate } from "react-router-dom";
...

    const navigate = useNavigate()
    
  return (
    <div 
        className="movie" 
        onClick={() => navigate('/details/' + id)}>
...
```

- MovieDetail'de ise ilgili id'ye ait datayı çekeceğiz;
- Bu çektiğimiz datayı da bootstrap'ten aldığımız Card yapısı ile sergiliyoruz.

MovieDetail.jsx
```jsx
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

const MovieDetail = () => {

  //! url'den gelen id datasını çekme;
  const { id } = useParams();

  //! id kullanacağımız için, componentin içinde yazıyoruz..
  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const baseImageUrl = 'https://image.tmdb.org/t/p/w1280';
  const defaultImage =
    'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80';

  const [movieDetails, setMovieDetails] = useState({})
  const {
    title, 
    poster_path, 
    overview, 
    release_date, 
    vote_average, 
    vote_count
  } = movieDetails

  useEffect(()=>{
    axios
      .get(movieDetailBaseUrl)
      .then(res => setMovieDetails(res.data))
      .catch(err => console.log(err))
  }, [movieDetailBaseUrl]) 
  // dependency array kullanmazsak comp.mount gibi çalışacak. istediğimiz gibi..
  // dependency array kullanırsak comp.update gibi çalışacak, o zaman da;
  // dep.array içine movieDetailBaseUrl yazarsak, buradaki her değişiklikte çalışacak.

  return (
    <div className="container py-5">
      <h1 className="text-center">{title}</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={poster_path ? baseImageUrl + poster_path : defaultImage}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8 d-flex flex-column ">
            <div className="card-body">
              <h5 className="card-title">Overview</h5>
              <p className="card-text">{overview}</p>
            </div>
            <ul className="list-group ">
              <li className="list-group-item">
                {'Release Date : ' + release_date}
              </li>
              <li className="list-group-item">{'Rate : ' + vote_average}</li>
              <li className="list-group-item">
                {'Total Vote : ' + vote_count}
              </li>
              <li className="list-group-item d-flex justify-content-center align-items-center">
                <Link 
                  to={-1}
                  className="btn btn-primary rounded-pill px-4 py-2 shadow-sm"
                  >Go back</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail;
```



#### Detail'e login olmuş userlar erişsin - PrivateRouter;

- Detail sayfasının sadece login olmuş userlara tarafından görülmesini istiyoruz.
- Bunun için bir PrivateRouter yazacağız.
- PrivateRouter'ı AppRouter içerisinde yapacağız;

AppRouter.jsx
```jsx
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
...
// PrivateRote için..
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


const AppRouter = () => {

  // PrivateRote için..
  const { currentUser } = useContext(AuthContext);
  function PrivateRouter(){
    return currentUser ? <Outlet/> : <Navigate to="/login" replace/>
  }
  
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={ <Main/> } />
            ...
            
            {/* PrivateRote için.. */}
            <Route path="/details/:id" element={ <PrivateRouter/> }>
              <Route path="" element={ <MovieDetail/> } />
            </Route>

        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
```



#### ForgotPassword;

Login.jsx
```jsx
import { signIn, signUpProvider, forgotPassword } from '../auth/firebase';
...
            <div className='link' onClick={() => forgotPassword(email)}>
              Forgot password?
            </div>
...
```


firebase.jsx
```jsx
...
import { 
  ...,
  sendPasswordResetEmail,
} from "firebase/auth";
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify";

...

export const forgotPassword = (email) => {
  //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      toastWarnNotify('Please check your mail box!');
      // alert("Please check your mail box!");
    })
    .catch((err) => {
      toastErrorNotify(err.message);
      // alert(err.message);
      // ..
    });
};
```



#### Kullanıcı login olmadan detail'e erişmeye çalışırsa alert versin;

- Eğer kullanıcı giriş yapmadan `/details/id` ye erişmek isterse bir uyarı verdirelim;

MovieCard.jsx
```jsx
...
        className="movie" 
        onClick={() => {
            navigate('/details/' + id)
            !currentUser && alert("Please login to see detail.")
            }}>

...
```



#### Toastify;

  https://fkhadra.github.io/react-toastify/introduction

- installation;

```bash
- yarn add react-toastify
```

- Toast Emmiter olarak kullanılacaksa;

- 1. src/helpers/ToastNotify.js
ToastNotify.js
```js
import { toast } from 'react-toastify';

export const toastWarnNotify = (msg) => {
  toast.warn(msg, {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const toastSuccessNotify = (msg) => {
  toast.success(msg, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const toastErrorNotify = (msg) => {
  toast.error(msg, {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

```

- 2. index.js'ye Toastify CSS eklenir;
index.js
```js
// Toastify CSS
import "react-toastify/dist/ReactToastify.css"
```

- 3. App'te en dış kademede `ToastContainer` çağrılır;
App.js
```js
// Toastify
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer/>
      </AuthContextProvider>
    </div>
  );
}
```


- Artık kullanıma hazır;
- tüm işlemlerden sonra, işlemin türüne göre şu şekillerde kullanabiliriz; 

firebase.js
```js
...
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
...

export const createUser = async (email, password, navigate, displayName) => {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
        let userCredential= await createUserWithEmailAndPassword(auth, email, password);
        //? kullanıcı profilini güncellemek için kullanılan firebase metodu
        await updateProfile(auth.currentUser, {
            displayName: displayName
        })
        toastSuccessNotify("Registred successfully!")
        navigate("/");
        console.log(userCredential)
    } catch (error) {
        toastErrorNotify(error.message);
    }
};


export const signIn = async (email, password, navigate) => {
    //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
    try {
        let userCredential= await signInWithEmailAndPassword(auth, email, password);

        // //! user verisini sessionStorage'a kaydet..
        // sessionStorage.setItem('user', JSON.stringify(userCredential.user));
        
        console.log(userCredential)
        navigate("/");
        toastSuccessNotify("Login successfully!");
    } catch (error) {
        toastErrorNotify(error.message);
    }
};


export const logOut = () => {
    signOut(auth)
    toastSuccessNotify("Logout successfully!");
};


export const signUpProvider = (navigate) => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    const provider = new GoogleAuthProvider();
    //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
    
    // ✅ HER ZAMAN hesap seçme ekranını göster
    provider.setCustomParameters({
        prompt: "select_account"
    });
    
    signInWithPopup(auth, provider)
        .then((result) => {
        console.log(result)
        navigate("/")
        toastSuccessNotify("Login successfully!");
    }).catch((error) => {
        toastErrorNotify(error.message);
  });
};
```


MovieCard.jsx
```jsx
...
import { toastWarnNotify } from "../helpers/ToastNotify";
...
        onClick={() => {
            navigate('/details/' + id)
            // `!currentUser && alert("Please login to see detail.")`
            !currentUser && toastWarnNotify("Please login to see detail.")
            }}>
...
```



#### Video section;

- Bir `VideoSection` componenti oluşturup, Moviedetail'de çağırıp sergileyeceğiz;

VideoSection.jsx
```jsx

const VideoSection = ({ videoKey }) => {
  return (
    <div className="card w-75 m-auto my-3">
      <div className="card-body">
        <div className="ratio ratio-16x9">
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
```


MovieDetail.jsx
```jsx
...
import VideoSection from '../components/VideoSection';
...
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

...
  useEffect(()=>{
    axios
      .get(movieDetailBaseUrl)
      .then(res => setMovieDetails(res.data))
      .catch(err => console.log(err));
    // VideoSection
    axios
      .get(videoUrl)
      .then((res) => setVideoKey(res.data.results[0].key))
      .catch((error) => console.log(error));
  }, [movieDetailBaseUrl, videoUrl]) 
...
  return (
    <div className="container py-5">
      <h1 className="text-center">{title}</h1>
      {/* VideoSection */}
      {videoKey && <VideoSection videoKey={videoKey} />}
...
```




- NOT: Deploy edilirse; firebase consolda app'in domain listesine deploy linki eklenmelidir. 






- Ders bitti, node_modules'ü sildik.
- Projeyi çalıştırmak için;

#### node_modules yüklü olmayan (github'dan clone'lanan) projeyi önce node_module yükleyip sonra çalıştırmak için;

```zsh
- yarn  
- yarn start 
```

- or/veya

```zsh
- npm install
- npm start
```
