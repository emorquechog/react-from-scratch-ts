import * as React from "react";

export interface ITodo { compiler: string; framework: string; }

export const Todo = (props: ITodo) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;