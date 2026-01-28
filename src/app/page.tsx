import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col gap-4">
        <Link
          href="/test-1/abc"
          className="text-2xl font-bold underline"
          target="_blank"
        >
          Go to Test 1 Route
        </Link>
        <br />
        <Link
          href="/test-2/abc"
          className="text-2xl font-bold underline"
          target="_blank"
        >
          Go to Test 2 Route
        </Link>
      </div>
    </main>
  );
}
