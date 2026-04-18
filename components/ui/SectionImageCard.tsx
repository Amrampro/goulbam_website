import Image from "next/image";

type SectionImageCardProps = {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
};

export default function SectionImageCard({
  src,
  alt,
  className = "",
  overlay = true,
}: SectionImageCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.18)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1026]/60 via-[#202B59]/20 to-transparent" />
      )}
    </div>
  );
}