const { ThemeContext } = require("@/contexts/ThemeContext");
const { useContext } = require("react");

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
