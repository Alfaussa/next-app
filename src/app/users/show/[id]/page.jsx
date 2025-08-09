import users from '../../users.js';


export default function User({params}) {
	let user = users[params.id];
	
	return <div>
		<span>{user.id}</span>
		<span>{user.name}</span>
		<span>{user.surn}</span>
	</div>;
}