/// <reference path="jquery.d.ts" />
/// <reference path='jqueryui.d.ts' />

import { Task } from './tasks';

export class Cards {
  columnIndex: number;
  title: string;
  description: string;
  task: Task;
  element: HTMLElement;

  constructor(columnIndex: number, title: string, description: string, task: Task) {
    this.columnIndex = columnIndex;
    this.title = title;
    this.description = description;
    this.task = task;
    this.element = $('<div class="card card-block"><h4 class="card-title">'+this.title+'</h4><p>'+this.description+'</p></div>')[0];
  }
}