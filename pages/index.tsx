import Head from "next/head";
import AppHeader from "../components/header/AppHeader";
import AppLayout from "../components/layout/AppLayout";
import AppLearning from "../components/learning/AppLearning";
import AppService from "../components/service/AppService";
import AppTechnologies from "../components/technologies/AppTechnologies";


export default function Home() {
  return (
    <>
    
    <Head>
        <title>Leluk Dev</title>
    </Head>
    <AppLayout>
      <AppHeader/>
      <AppTechnologies/>
      <AppService/>
      <AppLearning/>
    </AppLayout>
    </>
    
  )
}
