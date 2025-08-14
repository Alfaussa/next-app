export default function UsersLayout({children}) {
	return (<>
		<div className="info">
			message for all users
		</div>
		<div className="content">
			{children}
		</div>
	  </>);
  
}