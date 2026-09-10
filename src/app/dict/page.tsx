import type { Metadata } from "next";
import DictPageView from "@/components/dict/DictPageView";

export const metadata: Metadata = {
  title: "MyDict preview · Xudage Portfolio",
  description:
    "Interactive demo of the MyDict MDX dictionary UI. Full dictionaries run locally with mdictcc.",
  metadataBase: new URL("https://xudage.fun"),
};

export default function DictPreviewPage() {
  return <DictPageView />;
}
