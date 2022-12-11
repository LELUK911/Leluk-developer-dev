import Head from "next/head";
import AppTokenERC20 from "../../components/creationTokenService/tokenERC/AppTokenERC20";
import AppLayout from "../../components/layout/AppLayout";
import LayoutEVM from "../../components/layout/layoutEVM";

export default function erc20() {
  return (
    <>
      <Head>
        <title>Create Token ERC-20</title>
        <meta
          name="Leluk Blockchain developer create token ERC-20"
          content="generated token ERC-20"
          lang="it en"
        />
      </Head>
      <LayoutEVM>
        <AppLayout>
          <AppTokenERC20 />
        </AppLayout>
      </LayoutEVM>
    </>
  );
}
