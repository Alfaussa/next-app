import NotFound from "@/app/not-found";
import { notFound } from "next/navigation";
let users = {
	1: 'user1',
	2: 'user2',
	3: 'user3',
	4: 'user4',
	5: 'user5',
};

export default function User({ params }) {
	
    if(users[params.id]){
  return <p>
		{ users[params.id] }
	</p>;
    } else{
       	return notFound();
    }
  
}