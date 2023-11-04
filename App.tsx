import * as React from 'react';
import { useAtom } from 'jotai';
import { todosAtom } from './api';
import './style.css';

export default function App() {
  const [todos, setTodos] = useAtom(todosAtom);
  return (
    <div className="fluid-gap">
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button className="blue">A button</button>

      <div className="card"></div>
      <div><pre>{JSON.stringify(todos, null, 2)}</pre></div>
    </div>
  );
}
