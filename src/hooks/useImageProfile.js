import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { deleteImage } from "./useDeleteImageProfile";

export const handleCreateImageProfile = async(url)=> {
    
    try {
        const querySnapshot = await getDocs(collection(db, "imageProfile"));

        querySnapshot.forEach(image => {
            deleteImage(image.id);
        });

        await addDoc(collection(db, "imageProfile"), {
            url
        });
        
        await getDocs(collection(db, "imageProfile"));

    } catch (e) {
        console.error("Error adding document: ", e);
    };
};
