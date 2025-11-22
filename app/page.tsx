import Link from "next/link";

export default function Home() {
  return (
    <div className="m-14 font-mono">
      <div className="text-sm leading-none font-medium font-mono">
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
          href="https://github.com/ironclave"
          className="text-accent-foreground underline underline-offset-4"
          target="_blank"
        >
          GitHub
        </Link>
      </div>
      <div className="text-md leading-6 font-medium mt-8 max-w-2xl">
        Ironclave builds products that look good, feel good, and tackle real
        problems. We care about detail and creating experiences people trust.
        The goal is simple: craft beautiful apps that solve something real and
        raise standards.
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
