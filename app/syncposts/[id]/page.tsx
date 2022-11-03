
'use client';

import {FC, use} from 'react';
import { useState, useEffect } from 'react'
import Loading from '../../loading';



interface Props {
    params: {id: string};
  }
  
  const Post: FC<Props> = (p => {
   let id = p.params.id;

   const [data, setData] = useState(null)
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

   if (isLoading) return <Loading />
   if (!data) return <p>No post data</p>
   console.log(data)
   
// @ts-ignore

    return <div><h4>{data.title}</h4><p>{data.body}</p></div>;
  });


export default Post;



