
'use client';


import {FC } from 'react';
import { useState, useEffect } from 'react'
import Loading from '../../loading';


async function getPost(id:string) {
    let post = await fetch(`https://dummyjson.com/syncposts/${id}`);
    return post.json();
}

interface Props {
    params: {id: string};
  }
  
  //@ts-ignore
  const Post = (p => {
   let id = p.params.id;

   const [data, setData] =  useState<any>()
   const [isLoading, setLoading] = useState(false)



   useEffect(() => {
       setLoading(true)
       fetch(`https://dummyjson.com/posts/${id}`)
           .then((res) => res.json())
           .then((data) => {
               setData(data)
               setLoading(false)
           })
   }, [])



   if (isLoading) return <Loading></Loading>
   if (!data) return <p>No profile data</p>
   if(data) {
    console.log(data)

    return <div><h4>{data.title}</h4><p>{data.body}</p></div>;
   }
  });


export default Post;
