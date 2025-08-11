import Header from "@/comp/header/header";
import Footer from "@/comp/footer/footer";
export const metadata = {
	title: 'Test siite',
	description: 'This is my page description.', 
};

export default function RootLayout({children, info}) {
	return (
		<html lang="en">
			<body>
				<header><div>{info}</div></header>
		<main>
					{children}
				<aside>aside-left</aside>
				<aside>aside-right</aside>
				</main>
				<footer><Footer/></footer>
			</body>
		</html>
	);
}