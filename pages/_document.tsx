import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="UTF-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;700;900&display=swap"
						rel="stylesheet"
					></link>
					<link
						href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,500;0,600;0,700;1,300;1,500;1,600&display=swap"
						rel="stylesheet"
					></link>
					{/* FontAwesome */}
					<link
						rel="stylesheet"
						href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
						integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
						crossOrigin="anonymous"
					/>
				</Head>
				<body>
					<div id="overlay"></div>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
