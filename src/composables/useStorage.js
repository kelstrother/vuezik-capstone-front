import { projectStorage } from "../firebase/config";
import { ref } from "vue";
import getUser from "../composables/getUser";

const { user } = getUser();

const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);

  // eslint-disable-next-line no-unused-vars
  const uploadSong = async file => {
    filePath.value = `audio/${user.value.uid}/${file.name}`;
    const storageRef = projectStorage.ref(filePath.value);

    try {
      const res = await storageRef.put(file);
      url.value = res.ref.getDownloadURL();
    } catch (err) {
      // eslint-disable-next-line vue/no-ref-as-operand
      console.log(error.message);
      error.value = err.message;
    }
  };

  // eslint-disable-next-line no-undef
  return { url, filePath, error, uploadSong };
};

export default useStorage;
