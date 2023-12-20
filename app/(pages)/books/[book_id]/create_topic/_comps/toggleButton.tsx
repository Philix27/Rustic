import { AppStyles } from "@/lib";
import React from "react";

export function ToggleButton(props: {
  showDoc: "WRITE" | "PREVIEW";
  setShowDoc: React.Dispatch<React.SetStateAction<"WRITE" | "PREVIEW">>;
}) {
  return (
    <div className="w-full flex items-center justify-center mt-8 ">
      <div
        className="flex items-center justify-center p-1 rounded-lg"
        style={{
          backgroundColor: AppStyles.colors.backgroundLight,
          border: `solid 1px ${AppStyles.colors.backgroundLight}`,
        }}
      >
        <div
          className={"px-5 py-2 cursor-pointer rounded-md"}
          onClick={() => props.setShowDoc("WRITE")}
          style={{
            backgroundColor:
              props.showDoc === "WRITE"
                ? AppStyles.colors.backgroundDark
                : AppStyles.colors.backgroundLight,
          }}
        >
          Write
        </div>
        <div className="mr-2"></div>
        <div
          className={"px-5 py-2 cursor-pointer rounded-md"}
          onClick={() => props.setShowDoc("PREVIEW")}
          style={{
            backgroundColor:
              props.showDoc === "PREVIEW"
                ? AppStyles.colors.backgroundDark
                : AppStyles.colors.backgroundLight,
          }}
        >
          Preview
        </div>
      </div>
    </div>
  );
}
