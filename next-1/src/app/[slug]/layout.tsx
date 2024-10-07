import Link from "next/link";

export default function WithLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Dynamic Page with SLUG
      {children}
    </div>
  );
}
