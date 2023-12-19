"use client";
import { useRef, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { styled } from "styled-components";

export function AppModal(props: {
  children: ReactNode;
  isMounted: boolean;
  onBlankClick?: VoidFunction;
}): JSX.Element {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#modal-portal");
  }, []);

  if (props.isMounted && ref.current) {
    return createPortal(
      getComp({ children: props.children, onBlankClick: props.onBlankClick }),

      ref.current
    );
  } else return <div></div>;
  // return <div></div>;
}

{
  /* <Comp>{props.children} </Comp>; */
}

function getComp(props: {
  children: JSX.Element;
  onBlankClick: VoidFunction;
}): ReactNode {
  //  const ref = useRef<Element | null>(null);

  return (
    <Container
      style={{ backgroundColor: "#00080BB9" }}
      onClick={props.onBlankClick}
    >
      {props.children}
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
