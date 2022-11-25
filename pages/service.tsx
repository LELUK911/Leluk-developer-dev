import Head from "next/head";
import AppLayout from "../components/layout/AppLayout";
import AppPreventive from "../components/preventive/AppPreventive";
import PageService from "../components/service/PageService";



export default function service() {
  return (
    <>
    <Head>
        <title>Service</title>
        <meta name="Leluk Blockchain developer" content="Leanding page blockchain and web developer " lang="it en"/>

    </Head>
    <AppLayout>
        <PageService/>
    </AppLayout>

    </>
  )
}