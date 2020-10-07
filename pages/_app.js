import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/core";
import GlobalStylesheet from "../styles/GlobalStylesheet";

const cache = createCache();

const App = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    <GlobalStylesheet />
    <Component {...pageProps} />
  </CacheProvider>
);

export default App;
