"use client";
import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import * as DomTypes from "react-dom/node_modules/@types/react/ts5.0/index";
import { styled } from "styled-components";

export function AppModal(props: {
  children: React.ReactNode;
  isMounted: boolean;
  onBlankClick?: VoidFunction;
}) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = document.querySelector("#modal-portal");
  }, []);

  if (props.isMounted && ref.current) {
    return createPortal(
      (
        <Container onClick={props.onBlankClick}>{props.children}</Container>
      ) as DomTypes.ReactNode,
      ref.current
    );
  } else return <div></div>;
  // return <div>Hello from Modal</div>;
}

const Container = styled.div`
  background-color: #00080bb9;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

// (
//         <Container
//           style={{ backgroundColor: "#00080BB9" }}
//           onClick={props.onBlankClick}
//         >
//           {props.children}
//         </Container>
//       ) as unknown as React.ReactNode,
