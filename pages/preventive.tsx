import Head from "next/head";
import AppLayout from "../components/layout/AppLayout";
import AppPreventive from "../components/preventive/AppPreventive";



export default function contacts() {
  return (
    <>
    <Head>
        <title>Working Progress</title>
    </Head>
    <AppLayout>
        <AppPreventive/>
    </AppLayout>
</>
    
  )
}