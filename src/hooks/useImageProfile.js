import { updateProfile } from "firebase/auth";

export const handleCreateImageProfile = async(url, user)=> {

    try {
        await updateProfile(user, {
            photoURL:url
        });
    } catch (e) {
        console.error(e);
    };
};
