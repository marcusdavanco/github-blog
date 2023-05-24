import { ReactNode } from "react";
import { LinkButtonContainer } from "./styles";

interface LinkButtonProps {
  text: string;
  icon?: ReactNode;
  link: string;
  iconPosition?: "left" | "right";
}

export function LinkButton({
  text,
  icon,
  link,
  iconPosition = "right",
}: LinkButtonProps) {
  return (
    <LinkButtonContainer>
      {iconPosition === "left" && icon}
      <a href={link}>{text}</a>
      {iconPosition === "right" && icon}
    </LinkButtonContainer>
  );
}
