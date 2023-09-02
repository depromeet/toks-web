export interface TextFieldProps
  extends Partial<React.InputHTMLAttributes<HTMLTextAreaElement>> {
  name?: string;
  width?: number;
  height?: number;
  label?: string;
  errorMessage?: string;
  suffix?: React.ReactNode;
}
