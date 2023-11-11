"use client";
import useTheme from "@/hooks/useTheme";

const DarkModeToggler = () => {
  const { mode, toggle } = useTheme();
  return (
    <div onClick={toggle} className="border rounded-full px-1 relative flex items-center gap-1">
      <span>🌙</span>
      <span>🔅</span>
      <span
        className={`w-5 h-5 bg-emerald-600 inline-block rounded-full absolute cursor-pointer transition-all duration-100 ${
          mode === "light" && "translate-x-7"
        }`}
      />
    </div>
  );
};

export default DarkModeToggler;
