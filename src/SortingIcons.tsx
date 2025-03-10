import UpArrowIcon from "./assets/up-arrow.svg?react";
import DownArrowIcon from "./assets/down-arrow.svg?react";
import HorizontalRuleIcon from "./assets/horizontal-rule.svg?react";

export function UpArrow() {
  return <UpArrowIcon className="w-2 h-2 fill-signature2" />;
}

export function DownArrow() {
  return <DownArrowIcon className="w-2 h-2 fill-signature2" />;
}

export function HorizontalRule() {
  return <HorizontalRuleIcon className="w-2 h-2 stroke-signature2" />;
}
