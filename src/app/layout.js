import Header from "@/comp/header/header";
import Footer from "@/comp/footer/footer";
import Menu from "@/comps/menu/menu";
import '@/app/globals.css';
export const metadata = {
	title: 'Test siite',
	description: 'This is my page description.', 
};

export default function RootLayout({children}) {
	return (
		<html lang="en">
			<body>
				<header>
					<nav>
						<Menu/>
					</nav>
				</header>
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