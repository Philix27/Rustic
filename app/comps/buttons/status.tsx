import React from "react";
import Image from "next/image";

export function BadgeLeadingIcon(props: {
  title: string;
  img: string;
  color: string;
  bgColor: string;
  borderColor: string;
}) {
  return (
    <div
      className="rounded-xl text-xs py-1 h-[30px]"
      style={{
        color: props.color,
        backgroundColor: props.bgColor,
        border: `solid 1px ${props.borderColor}`,
        display: "flex",
        alignItems: "center",
        borderRadius: "20px",
        padding: "5px 10px",
      }}
    >
      <div className="flex">
        <Image
          src={props.img}
          alt="image"
          className="mr-2"
          width={15}
          height={12}
        />
        <p style={{ fontSize: "12px" }}>{props.title}</p>
      </div>
    </div>
  );
}

export function Badge(props: {
  title: string;
  img: string;
  color: string;
  bgColor: string;
  borderColor: string;
}) {
  return (
    <div
      className="rounded-xl text-xs  py-1 h-[30px]"
      style={{
        color: props.color,
        border: `solid 1px  ${props.borderColor}`,
        backgroundColor: props.bgColor,
        display: "flex",
        alignItems: "center",
        borderRadius: "20px",
        padding: "5px 10px",
      }}
    >
      <p style={{ fontSize: "12px" }}>{props.title}</p>
    </div>
  );
}
