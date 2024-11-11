import { useDispatch, useSelector } from "react-redux"
import { fetchPost } from "../Features/Posts/postSlice"
import { useEffect } from "react"

const Posts = () => {
  
  const {posts, isLoading, isEror, error} = useSelector((state)=> state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPost())
  }, [dispatch])

  // Decide what to select
  let content;
  if (isLoading) {
    content = <h1>Loading...</h1>
  }

  if (!isLoading && isEror) {
    content = <h1>{error}</h1>
  }
  if (!isLoading && !isEror && posts.length === 0) {
    content = <h1>Post Not Found!</h1>
  }

  if (!isLoading && !isEror && posts.length > 0) {
    content = <ul className="space-y-3 p-4 bg-white">
      {
        posts.map((post) => {
          return <li className="bg-gray-50 text-black" key={post.id}>{post.title}</li>
        })
      }
    </ul>
  }

  return (
    <div className="bg-white shadow-md">
      {content}
    </div>
  )
}

export default Posts
