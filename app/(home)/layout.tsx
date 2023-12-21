import { AppFooter } from "@/comps";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children} <AppFooter />
    </>
  );
}
