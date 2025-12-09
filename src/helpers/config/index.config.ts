export const heroBackgroundStyle = {
  background:
    "radial-gradient(circle at top left, rgba(127, 91, 255, 0.45), transparent 60%), radial-gradient(circle at top right, rgba(37, 211, 184, 0.35), transparent 45%), #0f1025",
};
export const sectionClasses =
  "w-full max-w-[1200px] mx-auto flex flex-col gap-8 py-[clamp(0.5rem,1.5vw,1.5rem)]";
export const cardClasses =
  "bg-[#12132c] border border-white/10 rounded-[1.25rem] p-6 shadow-[0_20px_45px_rgba(0,0,0,0.2)]";
export const buttonBaseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition duration-200";
export const primaryButtonClasses = `${buttonBaseClasses} bg-[#7f5bff] text-white border border-transparent hover:-translate-y-0.5 hover:opacity-95`;
export const ghostButtonClasses = `${buttonBaseClasses} bg-transparent text-white border border-white/30 hover:-translate-y-0.5 hover:opacity-95`;
export const eyebrowClasses =
  "text-[#25d3b8] text-[0.85rem] uppercase tracking-[0.25em] mb-3";
