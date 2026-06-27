import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 focus:outline-none";

  const variants = {
    primary:
      "bg-white text-slate-900 hover:bg-slate-100 hover:-translate-y-1 hover:shadow-2xl",

    secondary:
      "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-slate-900 hover:-translate-y-1",
  };

  const classes = clsx(base, variants[variant], className);

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </>
  );

  if (href) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(classes, "group")}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={clsx(classes, "group")}>
      {content}
    </Link>
  );
}

  return (
    <button className={clsx(classes, "group")}>
      {content}
    </button>
  );
}