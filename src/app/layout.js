export const metadata = {
	title: 'Test siite',
	description: 'This is my page description.', 
};

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body>
		<main>
					{children}
				</main>
			</body>
		</html>
	);
}