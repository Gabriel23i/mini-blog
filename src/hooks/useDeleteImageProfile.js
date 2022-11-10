import { deleteDoc, doc } from "firebase/firestore";

import { db } from "../firebase/config";

export const deleteImage = async(id)=> {

    try {
        await deleteDoc(doc(db,"imageProfile", id));
    } catch (error) {
        console.error(error);
    };
};
