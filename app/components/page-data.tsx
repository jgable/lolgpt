import { Footer } from "./footer";

export function PageData() {
  const date = new Date().toISOString();
  return (
    <>
      <main>
        <a
          target="_blank"
          href="https://dub.sh/T79Xj98"
          rel="noreferrer"
          className="pill"
        >
          Deploy your own to Vercel
        </a>
        <h1>LoLGPT</h1>
        <p className="description">
          ChatGPT Plugin to get League of Legends champion information
        </p>
      </main>

      <Footer>
        <p>
          Generated at {date} by{" "}
          <a
            href="https://vercel.com/docs/concepts/functions/edge-functions"
            target="_blank"
            rel="noreferrer"
          >
            Vercel Edge Runtime
          </a>
        </p>
      </Footer>
    </>
  );
}
