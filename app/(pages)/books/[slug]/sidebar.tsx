import { AppStyles } from "@/lib";
import React from "react";

export default function Sidebar() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "30%",
        backgroundColor: AppStyles.colors.backgroundLight,
        borderTop: `solid 1px ${AppStyles.colors.grey1}`,
        padding: "10px",
      }}
    >
      Sidebar
    </div>
  );
}
