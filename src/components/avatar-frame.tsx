import { motion, type HTMLMotionProps } from "framer-motion";
import { Globe } from "lucide-react";

interface AvatarFrameProps extends HTMLMotionProps<"div"> {
  layoutId: string;
  imageSrc?: string;
  alt?: string;
}

export function AvatarFrame({
  layoutId,
  className = "",
  imageSrc = "/avatar2.png",
  alt = "Nikhil Kumar",
  ...props
}: AvatarFrameProps) {
  return (
    <motion.div
      layoutId={layoutId}
      className={`relative flex items-center justify-center ${className}`}
      {...props}
    >
      <div
        className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin"
        style={{ animationDuration: "40s" }}
      />
      <div className="absolute inset-3 rounded-full bg-gradient-to-br from-cyan-500/10 via-slate-950 to-blue-500/10 p-1.5 backdrop-blur-sm border border-slate-800/80 shadow-inner" />
      <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-slate-700/80 bg-slate-950/90 group flex items-center justify-center shadow-[0_10px_30px_rgba(2,6,23,0.8)]">
        <img
          src={imageSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-500 select-none scale-105 hover:scale-100"
        />
      </div>
      <div className="absolute top-[10%] left-[10%] w-3 h-3 bg-cyan-400 rounded-full animate-ping pointer-events-none" />
      <div className="absolute bottom-[20%] right-[8%] w-2 h-2 bg-indigo-500 rounded-full pointer-events-none" />
      <div className="absolute -bottom-2 px-3 py-1 bg-slate-950/90 border border-slate-800 rounded-lg text-[9px] font-mono tracking-widest text-emerald-400 flex items-center gap-1.5 shadow-lg select-none">
        <Globe
          className="w-3 h-3 text-cyan-400 animate-spin"
          style={{ animationDuration: "20s" }}
        />
        BTech in IT • MIT Muzaffarpur ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ ​ BS Data Science • IIT Madras
      </div>
    </motion.div>
  );
}
