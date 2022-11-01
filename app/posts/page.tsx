import {use} from "react";
import Link from 'next/link';

async function getPosts() {
    let posts = await fetch("https://dummyjson.com/posts?limit=3");

    return posts.json();
}

export default function Page() {

    let {posts} = use(getPosts());
    
    console.log(posts);

    return (
        <div>
            <ul>
             {
                 posts.map(({id, title}: any) => {
       
                    return <li key={id}><Link href={`/posts/${id}`}>{title}</Link></li>
                 })
             }
            </ul>
        </div>
        
    )
}