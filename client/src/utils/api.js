// import axios from 'axios'

const allPostsURL = 'http://localhost:5000/posts'

export const fetchAllPosts = () => {
  return fetch(allPostsURL)
    .then((res) => res.json())
    .then((result) => result)
    .catch((error) => console.warn(error))
}
