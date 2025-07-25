import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Honeys A+ | Learning System v2024.1.0",
  description:
    "Personalized mentorship and project-based education protocol. Creative learning environment that optimizes unique talents and interests.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
