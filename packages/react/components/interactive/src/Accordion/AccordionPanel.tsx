import { assignInlineVars } from "@vanilla-extract/dynamic";
import { clsx } from "clsx";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { useAccordionContext } from "./AccordionContext";
import { accordionPanelStyle, panelHeight } from "./style.css";
import { AccordionPanelProps } from "./types";

const AccordionPanel = (
  props: AccordionPanelProps & { setActivePanel?: (isActive: boolean) => void },
  ref: React.Ref<HTMLDivElement>,
) => {
  const { itemName = "", children, className, style, ...rest } = props;
  const innerRef = useRef<HTMLDivElement>(null);

  const { activeItems } = useAccordionContext();
  const isActive = activeItems.includes(itemName);

  const [currentPanelHeight, setCurrentPanelHeight] = useState<string>();

  React.useImperativeHandle(ref, () => ({
    ...((innerRef.current as HTMLDivElement) || {}), // HTMLDivElement의 기본 속성 유지
    getIsActive: () => isActive, // 추가 메서드 정의
  }));

  useEffect(() => {
    const handleResize = () => {
      if (!innerRef.current) return;

      setCurrentPanelHeight(`${innerRef.current.clientHeight}px`);
    };

    if (!innerRef.current) return;

    if (isActive) {
      handleResize();

      const observer = new MutationObserver(handleResize);
      observer.observe(innerRef.current, {
        childList: true,
        subtree: true,
      });

      if (props.setActivePanel) props.setActivePanel(activeItems);
      return () => {
        observer.disconnect();
      };
    } else {
      if (props.setActivePanel) props.setActivePanel(activeItems);

      setCurrentPanelHeight("0");
    }
  }, [isActive, activeItems, props]);

  return (
    <div
      {...rest}
      ref={ref}
      className={clsx([accordionPanelStyle, className])}
      data-action-item={isActive}
      style={{
        ...assignInlineVars({
          [panelHeight]:
            currentPanelHeight ?? `$innerRef.current.clientHeight}px`,
        }),
        ...style,
      }}
    >
      <div data-name="panel-inner" ref={innerRef}>
        {children}
      </div>
    </div>
  );
};

const _AccordionPanel = React.forwardRef(AccordionPanel);
export { _AccordionPanel as AccordionPanel };
