
import {FC, use} from 'react';

const myHeaders = new Headers({
  "Authorization":  'Basic '+process.env.API_KEY
});

console.log(myHeaders);

var obj = {  
  method: 'GET',
  headers: myHeaders
};

async function getPost(id:string) {
    let post = await fetch(`${process.env.API_URL}/${id}`, obj);
    console.log(post);
    return post.json();
}

interface Props {
    params: {id: string};
  }
  
  const Post: FC<Props> = (p => {
   let id = p.params.id;
   let post = use(getPost(id))

   

    return <div><h4>{post.title}</h4><p>{post.body}</p></div>;
  });


export default Post;
