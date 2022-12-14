import Head from "next/head";
import AppNFT from "../../components/creationTokenService/NFT/AppNFT";
import AppLayout from "../../components/layout/AppLayout";
import LayoutEVM from "../../components/layout/layoutEVM";

export default function nft() {
  return (
    <>
      <Head>
        <title>Create Token ERC-20</title>
        <meta
          name="Leluk Blockchain developer create token NFT"
          content="generated token NFT"
          lang="it en"
        />
      </Head>
      <LayoutEVM>
        <AppLayout>
          <AppNFT />
        </AppLayout>
      </LayoutEVM>
    </>
  );
}
