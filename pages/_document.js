import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head
          title="Tomas Vera - Frontend Developer"
          desc="Tomas Vera is a Frontend Developer based in Buenos Aires, Argentina"
        ></Head>
        <body className="bg-gray-100 dark:bg-[#13161b] dark:text-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
