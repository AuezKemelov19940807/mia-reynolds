export async function getEvents() {
    const res = await fetch('http://localhost:4000/events')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }


  export const getPosts = async () => {
    const res = await fetch(' http://localhost:4000/posts')
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }