// "use client"

import Image from "next/image";
import { Label } from "./ui/label";
import { RadioGroupItem } from "./ui/radio-group";
import { 
  // createContext, 
  PropsWithChildren, 
  // useContext 
} from "react";

// type CustomRadioButtonContext = {
//   value: string;
// }

// const CustomRadioButtonContext = createContext<CustomRadioButtonContext | undefined>(undefined);

// function useCustomRadioButtonContext() {
//   const context = useContext(CustomRadioButtonContext);
//   if (!context) {
//     throw new Error("useCustomRadioButtonContext must be used within a CustomRadioButton");
//   }
//   return context;
// }

type CustomRadioButtonProps = PropsWithChildren & {
  value: string;
}

export function CustomRadioButton({ children, value }: CustomRadioButtonProps) {
  return (
    // <CustomRadioButtonContext.Provider value={{ value }}>
      <Label htmlFor={value} className="h-[62px] flex items-center bg-white rounded-xl border-2 border-blue-200 px-5 has-data-[state=checked]:border-blue-600">
        <RadioGroupItem value={value} id={value} className="w-5 h-5 border-2 border-blue-200 data-[state=checked]:border-4 data-[state=checked]:border-blue-600" />
        {children}
      </Label>
    // </CustomRadioButtonContext.Provider>
  )
}

CustomRadioButton.Title = function CustomRadioButtonTitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-preset-5 text-neutral-900">
      {children}
    </span>
  )
}

CustomRadioButton.Icon = function CustomRadioButtonIcon({ src }: { src: string }) {
  return (
    <Image 
      src={src}
      alt="happy"
      width={38}
      height={38}
      className="ml-auto"
    />
  )
}
