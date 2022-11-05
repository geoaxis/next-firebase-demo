
'use client';


import { env } from 'process';
import {FC } from 'react';
import { useState, useEffect } from 'react'
import Loading from '../../loading';

const myHeaders = new Headers({
    "Authorization": 'Basic '+process.env.NEXT_PUBLIC_STATIC_API_KEY
  });
  
  var obj = {  
    method: 'GET',
    headers: myHeaders
  };
  
  //@ts-ignore
  const Post = (p => {
   let id = p.params.id;

   const [data, setData] =  useState<any>()
   const [isLoading, setLoading] = useState(false)



   useEffect(() => {
       setLoading(true)
       fetch(`${process.env.NEXT_PUBLIC_STATIC_API_URL}/${id}`, obj)
           .then((res) => res.json())
           .then((data) => {
               setData(data)
               setLoading(false)
           })
   }, [])



   if (isLoading) return <Loading></Loading>
   if (!data) return <p>No posts data</p>
   if(data) {
    console.log(data)

    return <div><h4>{data.title}</h4><p>{data.body}</p></div>;
   }
  });


export default Post;
