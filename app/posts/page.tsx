import {use} from "react";
import Link from 'next/link';


const myHeaders = new Headers({
    "Authorization":  'Basic '+process.env.API_KEY
  });

  console.log(myHeaders);
  
  var obj = {  
    method: 'GET',
    headers: myHeaders
  };

async function getPosts() {
    let posts = await fetch(process.env.API_URL + "?limit=3", obj);

    return posts.json();
}

export default function Page() {

    let {content} = use(getPosts());
    
    console.log(content);

    return (
        <div>
            <ul>
             {
                 content.map(({id, title}: any) => {
       
                    return <li key={id}><Link href={`/posts/${id}`}>{title}</Link></li>
                 })
             }
            </ul>
        </div>
        
    )
}