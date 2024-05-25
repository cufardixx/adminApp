import Head from "next/head";
import Link from "next/link";

import styles from "./index.module.css";
import { env } from "~/env";
import { Button } from "@chakra-ui/react";
import { Router, useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            {env.NEXT_PUBLIC_BACKEND_BASE_URL}
          </h1>
          <Button colorScheme='blue' 
          onClick={()=>{
            router.push('/login')
          }}>
            Button</Button>
        </div>
      </main>
    </>
  );
}