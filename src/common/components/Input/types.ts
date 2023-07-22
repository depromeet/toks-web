export interface InputProps
  extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
  name?: string;
  width?: number;
  height?: number;
  label?: string;
  errorMessage?: string;
  suffix?: React.ReactNode;
}
