import React from "react";
import { PressableContainer } from "./styles";
import { PasswordText } from "./styles";

export function PasswordItem({data, removePassword}) {
 return (
   <PressableContainer onLongPress={removePassword}>
        <PasswordText>{data}</PasswordText>
   </PressableContainer>
  );
}