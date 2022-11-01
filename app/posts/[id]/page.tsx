import { NextPage } from "next";
import {use} from 'react';

async function getPost(id:string) {
    let post = await fetch(`https://dummyjson.com/posts/${id}`);
    console.log(post);
    return post.json();
}

interface Props {
    params: {id: string};
  }
  
  const Post: NextPage<Props> = (p => {
   let id = p.params.id;
   let post = use(getPost(id))

    return <div><h4>{post.title}</h4><p>{post.body}</p></div>;
  });


export default Post;
