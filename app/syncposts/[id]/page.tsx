
'use client';


import {FC, useEffect, useState } from 'react';
import Loading from '../../loading';

const myHeaders = new Headers({
    "Authorization": 'Basic '+process.env.NEXT_PUBLIC_STATIC_API_KEY
  });
  
  var obj = {  
    method: 'GET',
    headers: myHeaders
  };
  
  interface Props {
    params: {id: string};
  }
  
  const Post: FC<Props> = (p => {
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

if (isLoading) return <Loading />
    if (!data) return <p>No profile data</p>
    if(data) {
    console.log(data)
    return <div><h4>{data.title}</h4><p>{data.body}</p></div>;
    }
  });



export default Post;
