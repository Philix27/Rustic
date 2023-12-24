"use client";
import React, { ReactNode, useEffect, useState } from "react";

export const ClientOnly = (props: { children: ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return <>{props.children}</>;
};
