import { baseUrl } from "../../../config/const";
/* eslint-disable react/prop-types */
function Post({  title, content }) {
  const handleDelete = () => {
    /*
        TODO:
        DELETE 요청 후
        응답이 성공적으로 오면 getPosts로 posts값 수정
        [DELETE] ${baseUrl}/post/:id

        fetch 함수를 이용해보자
        fetch(url, { method: "DELETE"});
    */
  };
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-blue-50 shadow-lg rounded-lg border border-blue-200">
      <h2 className="text-2xl font-semibold text-neutral-800">{title}</h2>
      <p className="mt-4 text-gray-600">{content}</p>
      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={handleDelete}
        >
          삭제
        </button>
      </div>
    </div>
  );
}

export default Post;
