'use client';

 
import { useState, useEffect } from 'react'
import Link from 'next/link';
import Loading from '../loading';




export default function Page() {
    const [data, setData] =  useState<any>()
    const [isLoading, setLoading] = useState(false)
    
    const myHeaders = new Headers({
        "Authorization": 'Basic '+process.env.NEXT_PUBLIC_STATIC_API_KEY
      });
      
      var obj = {  
        method: 'GET',
        headers: myHeaders
      };
 

    useEffect(() => {
        setLoading(true)
        fetch(`${process.env.NEXT_PUBLIC_STATIC_API_URL}?limit=3`, obj)
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
        return (
        <div>
            <ul>
                {
                    
                    data.map(({ id, title }: any) => {

                        return <li key={id}><Link href={`/syncposts/${id}`}>{title}</Link></li>
                    })
                }
            </ul>
        </div>

    )}

}