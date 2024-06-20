import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script async src="https://tally.so/widgets/embed.js"></Script>
      <style type="text/css"></style>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <iframe
          data-tally-src="https://tally.so/r/mOP97p?transparentBackground=0"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Neurotechh Finance"
        ></iframe>
      </main>
    </>
  );
}
