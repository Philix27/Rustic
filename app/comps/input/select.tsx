import { Path } from "react-hook-form";
import { Text } from "@/comps";
import { ChangeEvent } from "react";

interface IInputProps {
  label: Path<any>;
  className?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  // register: UseFormRegister<any>
  required: boolean;
  options: { name: string; onClick?: VoidFunction; value?: string }[];
}

export const InputSelect = ({
  label,
  required,
  className,
  options,
  onChange,
}: IInputProps) => {
  return (
    <div className={`flex flex-col space-y-2 w-full ${className}`}>
      <label htmlFor={label}>
        <Text variant="B4" className="text-[16px]">
          {label}
        </Text>
      </label>
      <select
        className="border border-grey-dark-30 rounded-md py-3 px-4 bg-grey border-none outline-none"
        aria-label={label}
        name={label}
        style={{ paddingRight: "3px" }}
        onChange={onChange}
      >
        {options.map((v, i) => (
          <option key={i} style={{ paddingRight: "5px" }} value={v.value}>
            {v.name}
          </option>
        ))}
      </select>
    </div>
  );
};
