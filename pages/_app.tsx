import "../styles/globals.scss";
import Layout from "../components/Layout";

type MyAppProps = {
  Component: React.ComponentType<object>;
  pageProps: object;
};

const MyApp: React.FunctionComponent<MyAppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
