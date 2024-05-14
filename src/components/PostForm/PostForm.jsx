import { baseUrl } from "../../config/const";
import { useState } from "react";
import { getPosts } from "../../func/request"; // ../ --> 내 상위 폴더로 이동하겠다. 

function PostForm() {
  // 상태 관리를 위한 useState 훅 사용
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 폼 제출 이벤트 핸들러
  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle("");
    setContent("");
    fetch(`${baseUrl}/post`, 
    {
      method: "POST", 
      headers: {
        "Content-Type": "application/json", //백앤드 측에 자신이 보내는 파일이 json임을 알림. 
      },
      body: JSON.stringify({
        title: title,
        content: content
        /**
         * 이처럼 키와 벨류가 같으면 아래와 같이 함축적으로 표현가능하다. 
         * title
         * content
         */
      }),
    }
  ).then(() => getPosts());
    /*
        TODO: 
        POST 요청 후
        응답이 성공적으로 오면 getPosts로 Posts 값 수정하기
        [POST] ${baseUrl}/post
        fetch(url, { 
            method: "POST", 
            header: { "Content-Type": "application/json"},  // 요청을 보낼때 이 데이터가 json 데이터라는것을 명시함
            body: string; 
        });

        body:
        {
            title: string
            content: string
        }

    */
    // ...
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            게시글 제목
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            게시글 내용
          </label>
          <textarea
            id="content"
            name="content"
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            전송
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
