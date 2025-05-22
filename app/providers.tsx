"use client";

import { MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider defaultColorScheme="dark">
      <SessionProvider>{children}</SessionProvider>
    </MantineProvider>
  );
}
