import Link from 'next/link'
export default function NavBar() {
   return( <nav style={{ padding: "10px 0 10px 0"}}>
    <Link href="/" style={{ padding: "100px"}}>Home</Link>
    <Link href="/posts" style={{ padding: "100px"}}>Posts</Link>
    <Link href="/syncposts" style={{ padding: "100px"}}>SyncPosts</Link>

  </nav>)
}