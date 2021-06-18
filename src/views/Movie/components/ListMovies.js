import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListMoviesRequest } from 'store/movie/actions';

function Index() {
  const [list, loading] = useSelector(({ movie: { list, loading } }) => [
    list,
    loading,
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListMoviesRequest());
    // Safe to add dispatch to the dependencies array
  }, [dispatch]);

  if (loading) return <div>Loading....</div>;

  return (
    <div>
      {list.map((todo, index) => (
        <div key={index}>{todo.title}</div>
      ))}
    </div>
  );
}

export default Index;
