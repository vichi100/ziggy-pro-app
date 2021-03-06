import React from "react";
import InputSpinner from "./InputSpinner";
import { getSkin } from "./Skins";
// https://github.com/marcocesarato/react-native-input-spinner
// Export
export default props => {
  const skinProps = getSkin(props.skin, props);
  const finalProps = { ...props, ...skinProps };
  return <InputSpinner {...finalProps} />;
};
