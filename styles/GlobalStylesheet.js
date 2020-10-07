import { css, Global } from "@emotion/core";

const GlobalStylesheet = () => (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        background: #f7f7f7;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
      }
    `}
  />
);

export default GlobalStylesheet;
