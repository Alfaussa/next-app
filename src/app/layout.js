import Header from "@/comp/header/header";
import Footer from "@/comp/footer/footer";
export const metadata = {
	title: 'Test siite',
	description: 'This is my page description.', 
};

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body>
				<header><Header/></header>
		<main>
					{children}
				<aside>aside-left</aside>
				<aside>aside-right</aside>
				</main>
				<footer></footer>
			</body>
		</html>
	);
}