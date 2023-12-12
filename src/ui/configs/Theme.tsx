// theme/themeConfig.ts
import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  components:{
    Button: {
      onlyIconSizeSM: 10,
    }
  },
  token: {
    colorPrimary: "#a6331f",
  },
};

export default theme;
