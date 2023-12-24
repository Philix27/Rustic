"use client";
import React, { useRef, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { styled } from "styled-components";

export function AppModal(children, isMounted, onBlankClick) {
  const ref = useRef(null);

  useEffect(() => {
    // ref.current = document.querySelector < HTMLElement > "#modal-portal";
    ref.current = document.querySelector("#modal-portal");
  }, []);

  if (props.isMounted && ref.current) {
    return createPortal(
      <Container
        style={{ backgroundColor: "#00080BB9" }}
        onClick={props.onBlankClick}
      >
        {props.children}
      </Container>,
      ref.current
    );
    // return <div>Hello</div>;
  } else return <div></div>;
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

// (
//         <Container
//           style={{ backgroundColor: "#00080BB9" }}
//           onClick={props.onBlankClick}
//         >
//           {props.children}
//         </Container>
//       ) as unknown as React.ReactNode,