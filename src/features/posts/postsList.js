import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderPosts = posts.map((post, i) => {
        return (
            <article key={i}>
                <h3>{post.title}</h3>
                <p className="content">{post.content}</p>
                <p>
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </p>
                <ReactionButtons post={post} />
            </article>
        )
    })

    return (
        <section>
            <h2>Posts</h2>
            {renderPosts}
        </section>
    )
}

export default PostsList;