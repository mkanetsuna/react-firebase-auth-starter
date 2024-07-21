import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store/store';
import { increment, decrement, setValue } from './store/exampleSlice';

const ExampleComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const value = useSelector((state: RootState) => state.example.value);

  return (
    <div>
      <h2>Value: {value}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(setValue(10))}>Set Value to 10</button>
    </div>
  );
};

export default ExampleComponent;
