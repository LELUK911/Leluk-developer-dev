import Head from "next/head";
import AppTokenERC20 from "../../components/creationTokenService/AppTokenERC20";
import LayoutEVM from "../../components/layout/layoutEVM";
import AppLayout from "../../components/layout/AppLayout";

export default function CreationToken() {
  return (
    <>
      <Head>
        <title>Leluk Dev</title>
        <meta
          name="Token & NFT"
          content="token erc-20 erc-721 erc-1155 blockchain  "
          lang="it en"
        />
      </Head>
      <AppLayout>
        <LayoutEVM>
          <AppTokenERC20 />
        </LayoutEVM>
      </AppLayout>
    </>
  );
}
