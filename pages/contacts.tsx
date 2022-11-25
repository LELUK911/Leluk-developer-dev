import Head from "next/head";
import AppContacs from "../components/contacts/AppContacs";
import AppLayout from "../components/layout/AppLayout";



export default function contacts() {
  return (
    <>
    <Head>
        <title>Contact</title>
        <meta name="Leluk Blockchain developer" content="Leanding page blockchain and web developer " lang="it en"/>

    </Head>
    <AppLayout>
        <AppContacs/>
    </AppLayout>
</>
    
  )
}