export default function WithLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      Layout
      {children}
    </div>
  );
}
