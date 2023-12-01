import { UseFormRegister } from "react-hook-form";
import { Text } from "@/comps";
import { ChangeEventHandler } from "react";

export const InputTextArea = (props: {
  label: string;
  placeholder: string;
  className?: string;
  required: boolean;
  maxLength: number;
  minLength?: number;
  value?: string;
  name: string;
  hasError?: boolean;
  hasInfo?: string;
  register: UseFormRegister<any>;
  errorMsg?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
}) => {
  return (
    <div className={`flex flex-col space-y-2 w-full ${props.className}`}>
      <label htmlFor={props.label}>
        <Text variant="B4" className="text-[16px]">
          {props.label}
        </Text>
      </label>
      <textarea
        className="border border-grey-dark-30 rounded-md py-3 px-4"
        aria-label={props.label}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        {...props.register(props.name)}
      ></textarea>
      {props.hasError && (
        <span className="text-centurian-red text-xs">{props.errorMsg}</span>
      )}
    </div>
  );
};
