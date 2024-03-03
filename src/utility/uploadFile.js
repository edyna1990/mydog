import { storage } from "./firebaseApp";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
//import { uuid } from 'uuidv4';

export const uploadFile = async (file) => {
  try {
    const uniqueFileName = generateUniqueFileName(file.name);
    const fileRef = ref(storage, 'uploads/' + uniqueFileName);
    await uploadBytes(fileRef, file);
    const photoUrl = await getDownloadURL(fileRef);
    return photoUrl;
  } catch (err) {
    console.log("Hiba a fájlfeltöltés során:", err);
    throw err;
  }
};

const generateUniqueFileName = (originalFileName) => {
  const timestamp = Date.now().toString(16); // Unix időbélyeg hexadecimálisan
  const randomPart = Math.random().toString(16).substr(2); // Véletlen rész hexadecimálisan
  const fileExtension = originalFileName.split('.').pop(); // Fájlkiterjesztés
  const uniqueFileName = timestamp + randomPart + '.' + fileExtension; // Egyedi fájlnév generálása
  return uniqueFileName;
};