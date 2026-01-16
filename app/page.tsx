import Link from "next/link";

export default function Home() {
  return (
    <div className="m-14 font-mono">
      <div className="text-sm leading-none font-medium font-mono flex items-center gap-1">
        <>
          <span
            className="inline-block h-4 w-4 rounded-full bg-current mr-2"
            style={{ animation: "dotScale 2s ease-in-out infinite" }}
          />
          <style>{`
                @keyframes dotScale {
                  0%, 100% { transform: scale(0.8); }
                  50%      { transform: scale(1); }
                }
              `}</style>
        </>
        <Link
          href="https://ironclave.com"
          className="text-accent-foreground underline underline-offset-4"
        >
          Ironclave
        </Link>{" "}
        /{" "}
        <Link
          href="https://x.com/micksmits"
          className="text-accent-foreground underline underline-offset-4"
          target="_blank"
        >
          Twitter
        </Link>{" "}
        /{" "}
        <Link
          href="https://github.com/micksmits"
          className="text-accent-foreground underline underline-offset-4"
          target="_blank"
        >
          GitHub
        </Link>
      </div>
      <div className="text-md leading-6 font-medium mt-8 max-w-2xl">
        Ironclave builds products on the internet.
      </div>
      <div className="max-w-sm mt-8">
        <h4 className="scroll-m-20 text-lg font-medium tracking-tight">
          Bizdex
        </h4>
        <Link
          href="https://bizdex.app"
          className="text-accent-foreground text-sm underline underline-offset-4"
          target="_blank"
        >
          Bizdex finds you people to do business with and lets you manage your
          network efficiently.
        </Link>
      </div>
    </div>
  );
}
