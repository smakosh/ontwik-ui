import React from "react";
import { InputFieldProps } from "ontwik-ui/src/interfaces";
import { Wrapper, Label } from "./styles";

const InputField = ({ label, children, error, relative }: InputFieldProps) => (
  <Wrapper error={error} relative={relative}>
    {label && <Label>{label}</Label>}
    {children}
  </Wrapper>
);

InputField.displayName = "InputField";

export default InputField;
