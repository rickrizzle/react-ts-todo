import React, { FunctionComponent } from "react";
import { Task } from "../models/task";
import { TSTypeAliasDeclaration } from "@babel/types";

interface Props {
  onChange: (events: any) => void;
  onAdd: (event: any) => void;
  task: Task;
}

export const NewTaskForm: FunctionComponent<Props> = ({
  onChange,
  onAdd,
  task
}) => (
  <form onSubmit={onAdd}>
    <input onChange={onChange} value={task.name} />
    <button type="submit">Add Task</button>
  </form>
);
