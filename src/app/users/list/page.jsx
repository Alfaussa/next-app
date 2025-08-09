import users from "../users";

export default function List() {
	let list = users.map(user => {
		return <li>
			{user.name}
		</li>;
	});
	
	return <ul>
		{list}
	</ul>;
}