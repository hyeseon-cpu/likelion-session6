import Post from "./Post/Post";
import { useEffect } from "react";
import { useAtomValue } from "jotai";
import { postsAtom } from "../../state/atom";
import { getPosts } from "../../func/request";

function PostList() {
  /*
        { id: nuber, title: string, content: string }
  */
  const posts = useAtomValue(postsAtom);

  // 처음 랜더링 될때만 실행
  // useEffect 를 쓰지 않는다면 어떻게 될까요? 
  useEffect(() => {
    // post 목록을 불러오는 함수
    getPosts();
  }, []);

  return (
    <>
      {posts && posts.map((v) => (
        <Post key={v.id} id={v.id} title={v.title} content={v.content} />
      ))}
    </>
  );
}

export default PostList;
