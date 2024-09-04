import Context from "./Context";
import PropTypes from "prop-types";

export default function Provider({ children }) {
  const contextValue = {};

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
