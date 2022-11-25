import Head from "next/head";
import AppContacs from "../components/contacts/AppContacs";
import AppLayout from "../components/layout/AppLayout";



export default function contacts() {
  return (
    <>
    <Head>
        <title>Contact</title>
    </Head>
    <AppLayout>
        <AppContacs/>
    </AppLayout>
</>
    
  )
}