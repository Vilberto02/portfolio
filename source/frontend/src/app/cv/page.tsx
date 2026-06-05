import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum Vitae - Patricio Julca",
};

export default function CVPage() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <iframe
        src="/CV-PatricioJulca.pdf"
        className="h-full w-full border-none"
        title="Curriculum Vitae"
      />
    </div>
  );
}
