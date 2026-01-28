import { Suspense } from "react";
import { RadioGroupVariantOne } from "@/components/RadioGroupVariantOne";

export default function Test1Route() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <RadioGroupVariantOne />
      </Suspense>
    </main>
  );
}
