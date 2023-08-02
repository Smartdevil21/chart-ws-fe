"use client";
import useWebSockets from "@/hooks/useWebSockets";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useWebSockets();
  return <div>{children}</div>;
}
