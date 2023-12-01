import { useFormContext } from "react-hook-form";
import { Text } from "@/comps";
import { ChangeEvent } from "react";

interface ISelectProps {
  label: string;
  formLabel: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput = ({ label, formLabel, onChange }: ISelectProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col space-y-2 w-[629px]">
      <Text variant="B4" className="text-[16px]">
        {label}
      </Text>
      <select
        className={`border ${
          errors[formLabel] ? "border-centurian-red" : "border-grey-dark-30"
        } rounded-md py-3 px-4`}
        aria-label={label}
        {...register(formLabel, {
          required: true,
          onChange,
        })}
      >
        <option value="" disabled selected>
          Select partner type
        </option>
        <option value="individual">Individual</option>
        <option value="company">Company</option>
      </select>
      {errors[formLabel] && (
        <span className="text-centurian-red text-sm">
          This field is required
        </span>
      )}
    </div>
  );
};

export default SelectInput;
