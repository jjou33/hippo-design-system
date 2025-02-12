import { clsx } from "clsx";
import { Children, cloneElement, forwardRef, isValidElement } from "react";
import { accordionItemStyle } from "./style.css";
import { AccordionItemProps } from "./types";

const AccordionItem = (
  props: AccordionItemProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { itemName, children, className, ...rest } = props;

  const childrenWithProps = Children.toArray(children);

  const accordionItemChildren = childrenWithProps.map((child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { ...child.props, itemName });
    }

    return null;
  });

  return (
    <div {...rest} ref={ref} className={clsx([accordionItemStyle, className])}>
      {accordionItemChildren}
    </div>
  );
};

const _AccordionItem = forwardRef(AccordionItem);
export { _AccordionItem as AccordionItem };
