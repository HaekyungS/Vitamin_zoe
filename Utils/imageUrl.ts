import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import dotenv from "dotenv";

dotenv.config();

export const firebaseImage = async (filename: string) => {
  console.log(process.env);
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_apiKey,
    authDomain: process.env.NEXT_PUBLIC_authDomain,
    projectId: process.env.NEXT_PUBLIC_projectId,
    storageBucket: process.env.NEXT_PUBLIC_storageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
    appId: process.env.NEXT_PUBLIC_appId,
    measurementId: process.env.NEXT_PUBLIC_measurementId,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Storage and get a reference to the service
  const storage = getStorage(app);
  const storageRef = ref(storage);
  const imageRef = ref(storageRef, filename);

  try {
    const url = await getDownloadURL(imageRef); // await로 비동기 작업 완료 대기
    return url; // 함수 외부로 결과 반환
  } catch (error) {
    throw error; // 에러 처리
  }
};
