"use client";
import HomeContainer from "@/components/HomeContainer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 blur-[80px] opacity-20"
          style={{
            background: `conic-gradient(
              from 180deg at 20% 20%,
              #003CFF,
              #15E8FF,
              #5A4BFF,
              #C158FF,
              #003CFF
            )`,
          }}
        />
        <div
          className="absolute inset-0 blur-[100px] opacity-15"
          style={{
            background: `radial-gradient(circle at 30% 30%, #15E8FF 0%, transparent 50%),
              radial-gradient(circle at 50% 70%, #C158FF 0%, transparent 50%)`,
          }}
        />
      </div>
      <HomeContainer />
    </div>
  );
}
