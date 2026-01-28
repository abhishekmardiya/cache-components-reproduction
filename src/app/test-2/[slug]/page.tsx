import { Suspense } from "react";
import { RadioGroupVariantTwo } from "@/components/RadioGroupVariantTwo";

export default function Test2Route() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <Suspense fallback={<div>Loading...</div>}>
        <RadioGroupVariantTwo />
      </Suspense>
    </main>
  );
}
