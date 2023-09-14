import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

export const firebaseImage = async (filename: string) => {
  const firebaseConfig = {
    apiKey: "AIzaSyA7fnU19BqX_PDok-XumExKb2K8-rM_jwI",
    authDomain: "vitaminzoe-37472.firebaseapp.com",
    projectId: "vitaminzoe-37472",
    storageBucket: "vitaminzoe-37472.appspot.com",
    messagingSenderId: "149141516379",
    appId: "1:149141516379:web:a6d486c16fdae5fede0f7e",
    measurementId: "G-D40KVD8CVT",
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
