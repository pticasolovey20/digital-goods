import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDDfzIof_weSPEARc4UKmGyhIFNC4igjQ8",
	authDomain: "digital-goods-15fd2.firebaseapp.com",
	projectId: "digital-goods-15fd2",
	storageBucket: "digital-goods-15fd2.appspot.com",
	messagingSenderId: "742281729688",
	appId: "1:742281729688:web:39f5f478135864ed99a2ed",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
