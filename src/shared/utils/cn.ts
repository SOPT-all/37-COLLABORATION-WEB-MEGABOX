import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMergeCustom = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['button1', 'button2', 'button3', 'button4'] }],
      'font-weight': [{ text: ['button1', 'button2', 'button3', 'button4'] }],
      'leading': [{ text: ['button1', 'button2', 'button3', 'button4'] }],
    }
  }
})

export function cn(...inputs: ClassValue[]) {
  return twMergeCustom(clsx(inputs));
}
