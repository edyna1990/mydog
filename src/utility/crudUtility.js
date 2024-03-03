import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebaseApp";

export const readSize = async (setSize) => {
  const sizeRef = collection(db, "meretek");
  const docs = await getDocs(sizeRef);
  let arr = [];
  docs.forEach((doc) => arr.push(doc.data()));
  setSize(arr);
};

export const readEnergy = async (setEnergy) => {
  const energyRef = collection(db, "energiak");
  const docs = await getDocs(energyRef);
  let arr = [];
  docs.forEach((doc) => arr.push(doc.data()));
  setEnergy(arr);
};

export const readIntell = async (setIntell) => {
  const intellRef = collection(db, "intelligenciak");
  const docs = await getDocs(intellRef);
  let arr = [];
  docs.forEach((doc) => arr.push(doc.data()));
  setIntell(arr);
};

export const readHair = async (setHair) => {
  const hairRef = collection(db, "szorzetek");
  const docs = await getDocs(hairRef);
  let arr = [];
  docs.forEach((doc) => arr.push(doc.data()));
  setHair(arr);
};

export const readSocial = async (setSocial) => {
  const socialRef = collection(db, "szocialisigenyek");
  const docs = await getDocs(socialRef);
  let arr = [];
  docs.forEach((doc) => arr.push(doc.data()));
  setSocial(arr);
};

export const addPost = async (formData) => {
  console.log(formData);
  const collectionRef = collection(db, "kutyafajtak");
  const newItem = { ...formData, timestamp: serverTimestamp() };
  const newDocRef = await addDoc(collectionRef, newItem);
};

export const readPosts = async (setPosts, selectedProperties) => {
  const collectionRef = collection(db, "kutyafajtak");
  const q = query(collectionRef, orderBy("timestamp", "desc"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    let kutyak = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    if (selectedProperties.szorzetek != null) {
      kutyak = kutyak.filter((obj) => obj.szorzetek == selectedProperties.szorzetek);
    }
    if (selectedProperties.energiak != null) {
      kutyak = kutyak.filter((obj) => obj.energiak == selectedProperties.energiak);
    }
    if (selectedProperties.intelligenciak != null) {
      kutyak = kutyak.filter((obj) => obj.intelligenciak == selectedProperties.intelligenciak);
    }
    if (selectedProperties.meretek != null) {
      kutyak = kutyak.filter((obj) => obj.meretek == selectedProperties.meretek);
    }
    if (selectedProperties.szocialisigenyek != null) {
      kutyak = kutyak.filter((obj) => obj.szocialisigenyek == selectedProperties.szocialisigenyek);
    }
    setPosts(kutyak);
  });
  return unsubscribe;
};

export const readPost = async (id, setPost) => {
  const docRef = doc(db, "kutyafajtak", id);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setPost({ ...docSnap.data(), id: docSnap.id });
    } else console.log("A dokumentum nem létezik.");
  } catch (err) {
    console.log(err);
  }
};
