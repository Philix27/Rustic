"use client";
import { Path, UseFormRegister } from "react-hook-form";
import Image from "next/image";
import { Text } from "@/comps";
import { styled } from "styled-components";
import { ChangeEvent, useState } from "react";
import { AppImages } from "@/lib/utils/app_image";
// import { AppImages } from "@/lib";

export const AppInput = (props: {
  label: Path<any>;
  name: string;
  placeholder: string;
  maxLength?: number;
  minLength?: number;
  type?: "text" | "tel" | "password" | "email";
  className?: string;
  value?: string;
  hasError?: boolean;
  hasInfo?: string;
  isPassword?: boolean;
  errorMsg?: string;
  register: UseFormRegister<any>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`flex flex-col space-y-2 w-full relative ${props.className}`}
    >
      <label htmlFor={props.name}>
        <Text variant="B4" className="text-[16px]">
          {props.label}
        </Text>
      </label>

      <input
        className={`border rounded-md py-3 px-4 ${
          props.errorMsg ? "border-red-600" : "border-grey-dark-30"
        }`}
        aria-label={props.label}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        type={props.type === "password" && showPassword ? "text" : props.type}
        {...props.register(props.name)}
      />

      {props.hasInfo && <span className="text-xs">{props.hasInfo}</span>}
      {props.hasError && (
        <span className="text-centurian-red text-xs">{props.errorMsg}</span>
      )}
      {props.isPassword ? (
        <div
          className={`absolute inset-y-0 right-0 flex items-center pr-3 ${
            props.errorMsg && "pb-6"
          }`}
        >
          <Image
            onClick={() => setShowPassword(!showPassword)}
            src={showPassword ? AppImages.name : AppImages.name}
            width={18}
            height={18}
            priority
            alt={AppImages.name}
          />
        </div>
      ) : null}
    </div>
  );
};

export const InputWithTrailingIcon = (props: {
  placeholder: string;
  maxLength: number;
  icon: JSX.Element;
  className?: string;
}) => {
  return (
    <Div className={props.className}>
      <InputField placeholder={props.placeholder} maxLength={props.maxLength} />
      {props.icon}
    </Div>
  );
};

const InputField = styled.input`
  border: none;
  outline: none;
  font-size: 14px;
  padding: 8px;
  margin: 5px 0;
`;
const Div = styled.div`
  background-color: white;
  display: flex;
  border: solid #e3e3e3 1px;
  height: 45px;
  padding: 5px 10px;
  border-radius: 5px;
  align-items: center;
`;