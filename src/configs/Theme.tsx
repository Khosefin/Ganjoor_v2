// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  components: {
    Button: {
      onlyIconSizeSM: 14,
    },
  },
  token: {
    colorPrimary: "#a6331f",
    colorLink: "#b91c1c",
  },
};

export default theme;
