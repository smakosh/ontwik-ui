import 'nextra-theme-docs/style.css';
import { OntwikProvider } from '../../.';

export default function Nextra({ Component, pageProps }) {
  return (
    <OntwikProvider>
      <>
        <Component {...pageProps} />
      </>
    </OntwikProvider>
  );
}
