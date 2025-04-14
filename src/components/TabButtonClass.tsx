import clsx from "clsx";

const tabButtonClass = (isActive: boolean) =>
  clsx(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-primary text-white"
      : "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
  );

export default tabButtonClass;
