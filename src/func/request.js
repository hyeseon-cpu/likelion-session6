import { baseUrl } from "../config/const";
import { postsAtom, store } from "../state/atom";

export function getPosts() {
    store.set(postsAtom, async() => {
        /* TODO:
            GET 요청으로 post 목록 불러오기.
            URL: ${baseURL}/posts
        */
       // fetch 라는 함수로 서버에 요청을 보냅니다.
        const res = await fetch(`${baseUrl}/posts`)
        const result = await res.json();
        result.sort((a,b) => b.id =- a.id)
        return result;
    });
}