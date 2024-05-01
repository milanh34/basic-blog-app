import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { blogList, usersList } from '../../config/data';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import './style.css';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
      setComments(blog.comments);
    }
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: comments.length + 1,
      userId: 1,
      userName: "John Doe",
      comment: commentText,
      createdAt: new Date().toLocaleDateString(),
    };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setCommentText('');

    const updatedBlogList = blogList.map((item) =>
      item.id === parseInt(id) ? { ...item, comments: updatedComments } : item
    );
    console.log("Updated blog list:", updatedBlogList);
  };

  const renderComments = () => {
    if (comments && comments.length > 0) {
      return (
        <div className="blog-comments mt-4">
          <h2 className="text-lg font-semibold mb-2">Comments</h2>
          {comments.map((comment) => (
            <div key={comment.id} className="bg-gray-600 p-4 rounded-3xl mb-2 border-2 border-white border-opacity-50 text-white">
              <p className="text-white text-lg">{comment.comment}</p>
              <p className="text-gray-200 text-sm">By: {getUserById(comment.userId)}</p>
            </div>
          ))}
        </div>
      );
    } else {
      return null;
    }
  };

  const getUserById = (userId) => {
    const user = usersList.find((user) => user.id === userId);
    return user ? user.username : 'Unknown';
  };

  return (
    <>
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <h1 className="text-3xl font-semibold">{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" className="mt-4 rounded-md" />
          <p className="blog-desc mt-4">{blog.description}</p>
          {renderComments()}
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add your comment"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
