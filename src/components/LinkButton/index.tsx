import { ReactNode } from "react";
import { LinkButtonContainer } from "./styles";

interface LinkButtonProps {
  text: string;
  icon: ReactNode;
  link: string;
}

export function LinkButton({ text, icon, link }: LinkButtonProps) {
  return (
    <LinkButtonContainer>
      <a href={link}>{text}</a>
      {icon}
    </LinkButtonContainer>
  );
}
