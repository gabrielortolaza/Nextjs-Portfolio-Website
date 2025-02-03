export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen  flex items-center justify-center bg-black-100">
      {children}
    </div>
  )
}
