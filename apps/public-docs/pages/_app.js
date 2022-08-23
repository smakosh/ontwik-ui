import "nextra-theme-docs/style.css";
import { OntwikProvider } from "ontwik-ui";

const NextraApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default function Nextra(props) {
  return (
    <OntwikProvider>
      <NextraApp {...props} />
    </OntwikProvider>
  );
}
