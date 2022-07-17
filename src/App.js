import logo from "./logo.svg";
import "./App.css";
import {
	Document,
	Page,
	Text,
	View,
	StyleSheet,
	PDFDownloadLink
} from "@react-pdf/renderer";

function App() {
	const MyDoc = () => (
		<Document>
			<Page> // My document data</Page>
		</Document>
	);

	return (
		<div className="App">
			<PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
				{({ blob, url, loading, error }) =>
					loading ? "Loading document..." : "Download now!"
				}
			</PDFDownloadLink>
		</div>
	);
}

export default App;
