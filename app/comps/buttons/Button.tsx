"use client";
import clsx from "clsx";
import Image from "next/image";

type Variant = "regular" | "outline";
type ButtonType = "button" | "submit" | "reset" | undefined;

const variants: Record<Variant, string> = {
  regular:
    "bg-centurian-blue flex flex-row space-x-4 justify-center px-6 py-3 items-center px-4 rounded-md text-white font-medium text-[16px] leading-[26px]",
  outline:
    "bg-transparent flex flex-row space-x-4 justify-center items-center px-6 py-3 rounded-md border border-2 border-blue-dark-10 text-blue-dark-10 font-medium leading-[26px] text-[16px]",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | React.ReactNode[];
  variant?: Variant;
  disabled?: boolean;
  className?: string;
  prefixImage?: string;
  suffixImage?: string;
  buttonType?: ButtonType;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "regular",
  disabled,
  className,
  prefixImage,
  suffixImage,
  isLoading,
  buttonType,
  ...props
}) => {
  const clsxClass = clsx(
    variants[variant],
    {
      "cursor-not-allowed": disabled,
    },

    className
  );

  return (
    <button
      type={buttonType}
      className={clsxClass}
      disabled={disabled}
      {...props}
    >
      {prefixImage ? (
        <Image src={prefixImage} width={18} height={18} alt="" />
      ) : null}

      {isLoading ? (
        <svg
          role="status"
          className="inline mr-3 w-5 h-5 text-white animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        children
      )}

      {suffixImage ? (
        <Image src={suffixImage} width={18} height={18} alt="" />
      ) : null}
    </button>
  );
};