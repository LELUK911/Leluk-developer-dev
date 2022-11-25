import Head from "next/head";
import AppLayout from "../components/layout/AppLayout";
import AppPreventive from "../components/preventive/AppPreventive";



export default function contacts() {
  return (
    <>
    <Head>
        <title>Working Progress</title>
        <meta name="Leluk Blockchain developer" content="Leanding page blockchain and web developer " lang="it en"/>

    </Head>
    <AppLayout>
        <AppPreventive/>
    </AppLayout>
</>
    
  )
}