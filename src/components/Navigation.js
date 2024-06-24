import React from 'react';
import { useDispatch } from 'react-redux';
import {prevImage,nextImage} from '../redux/action';

const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <div className="navigation">
      <button onClick={() => dispatch(prevImage())}>Back</button>
      <button onClick={() => dispatch(nextImage())}>Next</button>
    </div>
  );
};

export default Navigation;
