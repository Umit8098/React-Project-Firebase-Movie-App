import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
} from "firebase/auth";
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket ,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


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


//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Email/password
//! Email/password ile girişi enable yap
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


export const logOut = () => {
    signOut(auth)
    toastSuccessNotify("Logout successfully!");
};


//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Google
//! Google ile girişi enable yap
//* => Authentication => sign-in-method => Authorized domains => add domain
//! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle (firebase->app->build->authentication->settings->authorized domain kısmında add domain..)
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
