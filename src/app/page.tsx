"use client";

import { BoxPropsPanel } from "@/components/box-props-panel";
import { BoxShadowPreviewPanel } from "@/components/box-shadow-preview-panel";
import { Header } from "@/components/header";
import { ShadowPropsPanel } from "@/components/shadow-props-panel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="grid grid-cols-[25%_1fr_25%] flex-1">
        <ShadowPropsPanel />
        <BoxShadowPreviewPanel />
        <BoxPropsPanel />
      </main>
    </div>
  );
}
