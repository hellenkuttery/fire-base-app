import firebase from "./firebase";
import { getDatabase,ref, set,push} from "firebase/database";


export const addInfo = (info) => {
    const db = getDatabase();
    const userRef = ref(db, "baglanti");
    const newUserRef = push(userRef);
    set(newUserRef, {
      username: info.username,
      phoneNumber: info.phoneNumber,
      gender: info.gender,
    } 
    )  
    
  };