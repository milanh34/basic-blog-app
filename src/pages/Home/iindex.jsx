import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');
  const [sortBy, setSortBy] = useState('createdAt'); // Default sort by createdAt

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  // Sort blogs
  const handleSortBy = (sortCriteria) => {
    setSortBy(sortCriteria);
    const sortedBlogs = [...blogs].sort((a, b) => {
      if (sortCriteria === 'commentsCount') {
        return b.commentsCount - a.commentsCount;
      } else if (sortCriteria === 'reactionsCount') {
        return b.reactionsCount - a.reactionsCount;
      } else {
        // Default sort by createdAt
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });
    setBlogs(sortedBlogs);
  };

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Sort By */}
      <div className='mb-20'>
        <label>
          Sort By:
          <select value={sortBy} onChange={(e) => handleSortBy(e.target.value)}>
            <option value="createdAt">Date</option>
            <option value="commentsCount">Most Commented</option>
            <option value="reactionsCount">Most Reacted</option>
          </select>
        </label>
      </div>

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
