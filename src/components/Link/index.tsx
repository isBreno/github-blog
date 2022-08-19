import { ArrowSquareUpRight } from "phosphor-react";
import { ComponentProps, ReactNode } from "react";
import { ExternalLinkContainer } from "./styles";

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string;
  icon?: ReactNode;
  variant?: "iconLeft";
};

export function ExternalLink({ text, icon, ...rest }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}> 
      {text}
      {icon ?? <ArrowSquareUpRight />}
    </ExternalLinkContainer>
  );
}