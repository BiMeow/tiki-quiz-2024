"use client";

import { createContext, memo, useContext, useState } from "react";

export const StorageContext = createContext<any>(null);

const StorageProvider = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const [isBlueLogo, setIsBlueLogo] = useState(false);

  const [quizStep, setQuizStep] = useState<any>(3);
  const [introStep, setIntroStep] = useState<any>(1);

  const [momName, setMomName] = useState<any>("");

    const [listSelectedAnswer, setListSelectedAnswer] = useState<any>([]);

  return (
    <StorageContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isBlueLogo,
        setIsBlueLogo,
        quizStep,
        setQuizStep,
        introStep,
        setIntroStep,
        momName,
        setMomName,
        listSelectedAnswer,
        setListSelectedAnswer,
      }}
      {...props}
    ></StorageContext.Provider>
  );
};

export default memo(StorageProvider);

export const useStorage = () => {
  const context = useContext(StorageContext);
  if (!context) {
    throw new Error(
      "useStorage has to be used within <StorageContext.Provider>"
    );
  }
  return context;
};
