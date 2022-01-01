import type { NextPage } from "next";
import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Head from "next/head";

import MainForm from "@components/Form/MainForm";
import inputFormValueState from "../store";
import styles from "@styles/Home.module.css";

const Home: NextPage = () => {
  const inputValue: string = useRecoilValue(inputFormValueState);
  const setInputValue = useSetRecoilState(inputFormValueState);

  return (
    <div className={styles.container}>
      <Head>
        <title>Clique</title>
        <meta name="talk to a stranger" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainForm inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
};

export default Home;
