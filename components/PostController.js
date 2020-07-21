import useSWR from 'swr';
import Post from "./Post";

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function PostController() {
    const { data, error } = useSWR('https://api.blog.zacharymyers.com/articles', fetcher)

    const posts = [];

    if (!data) {
        return (
            <Post date="loading..." title="loading..." link="#" />
        )
    }


    data.forEach((res) => {
        posts.push(<Post title={res.title} date={res.created_at} link={res.slug} />)
    })

    return posts;
}