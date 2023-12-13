// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  components:{
    Button: {
      onlyIconSizeSM: 13,
    }
  },
  token: {
    colorPrimary: "#a6331f",
  },
};

export default theme;
