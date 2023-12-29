import { Toaster, toast } from "sonner";

export function AppToaster(props: {}) {
  return <Toaster theme="dark" />;
}
export const AppToasterController = toast;
