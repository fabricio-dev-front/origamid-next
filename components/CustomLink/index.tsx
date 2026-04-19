import Link from "next/link";

interface CustomLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export function CustomLink({ children, href, className }: CustomLinkProps) {
  return (
    <Link href={href} className={`font-normal text-zinc-500 ${className}`}>
      {children}
    </Link>
  );
}
