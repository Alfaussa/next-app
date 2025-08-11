export const metadata = {
	title: 'Test siite',
	description: 'This is my page description.', 
};

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body>
				<header>header</header>
		<main>
					{children}
				<aside>aside-left</aside>
				<aside>aside-right</aside>
				</main>
				<footer>footer</footer>
			</body>
		</html>
	);
}