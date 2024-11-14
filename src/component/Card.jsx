// import hooks 
import React, { useEffect, useState } from 'react';
import { useGetAllPostQuery } from '../redux/api/post';
import './pages/cardanimation.css'

const Card = () => {
  const [posts, setPosts] = useState([]);
  const { data, error, isLoading } = useGetAllPostQuery();

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

//delete functionality
  const HANDLEDELETE = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching posts</div>;
  }

  return (
    // implement card component
    <div className="container mx-auto p-4 bg-rose-50  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="max-w-sm rounded-xl overflow-hidden shadow-lg m-4 sm:bg-amber-300 md:bg-lime-300 lg:bg-teal-300 hover:bg-white   animate-slideInRight hover:shadow-slate-600">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{post.title}</div>
              <p className="text-gray-700 text-base">{post.body}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-end">
              {/* create delete button */}
              <button
                onClick={() => HANDLEDELETE(post.id)}
                className="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded-full"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
