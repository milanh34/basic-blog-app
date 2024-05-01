import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { authorsList } from '../../config/data';
import EmptyList from '../../components/common/EmptyList';
import './style.css';

const AuthorPage = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const foundAuthor = authorsList.find(author => author.id === parseInt(id));
    if (foundAuthor) {
      setAuthor(foundAuthor);
    }
  }, [id]);

  return (
    <div className="author-page">
      {author ? (
        <div>
          <h1>{author.name}</h1>
          <img src={author.avatar} alt={author.name} />
          <p>{author.bio}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default AuthorPage;
