import AppLayout from "../components/layout/AppLayout";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function workingProgress() {
  return (
    <>
    <Head>
        <title>Working Progress</title>
    </Head>
    <AppLayout>
      <div className="row justify-content-md-center image-div">
        <div className="col col-md-auto">
          <Link href={"/contacts"}>
            <Image
              src={"/images/under-construction-2408066_1280.png"}
              alt="working progress"
              width={300}
              height={400}
              priority
            />
          </Link>
        </div>
      </div>
    </AppLayout>
    </>
  );
}
