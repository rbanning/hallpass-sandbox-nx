import { Injectable } from "@angular/core";
import { Nullable } from "@hallpass/common";
import { BehaviorSubject, Observable, map } from "rxjs";

/**
  Singleton Service
  Used to monitor the state of tasks (i.e. working or done)

  Types
  -----------
  TaskId: string | number;

  Service API
  -----------  
  setWorking(task: Nullable<TaskId>, working: boolean);   //if task is nullish, then a general/global task is used
  getState(): Observable<boolean>; //true if any of the tasks are still in a 'working' state
  getState(task: TaskId);          //true if the specified task is still in a 'working' state
  getState$(): Observable<boolean>; //observable of getState()
  getState$(task: TaskId);          //observable of getState(task)
**/

export type TaskId = string | number;
type TaskDictionary = Record<TaskId, boolean>;

@Injectable({
  providedIn: 'root'
})
export class WorkingService {
  private readonly GLOBAL_TASK_ID = '__GLOBAL-TASK__';
  private _storeSubject = new BehaviorSubject<TaskDictionary>({});
  private get store(): {[key: TaskId]: boolean} {
    return this._storeSubject.value;
  }

  setWorking(task: Nullable<TaskId>, working: boolean) {
    const state = this.store;
    state[task ?? this.GLOBAL_TASK_ID] = working;
    this.publish(state);
  }


  getState(): boolean;
  getState(taskId: TaskId): boolean;
  getState(taskId?: TaskId){
    const state = this.store;
    if (taskId) {
      return taskId in state && state[taskId] === true;
    }
    //else
    return this.isWorking(state);
  }

  getState$(): Observable<boolean>;
  getState$(taskId: TaskId): Observable<boolean>;
  getState$(taskId?: TaskId): Observable<boolean> {
    if (taskId) {
      return this._storeSubject.asObservable()
      .pipe(
        map(tasks => {
          return taskId in tasks && tasks[taskId] === true;
        })
      );
    }
    //else
    return this._storeSubject.asObservable()
      .pipe(
        map(tasks => {
          return this.isWorking(tasks);
        })
      );
  }



  private publish(state: TaskDictionary) {
    this._storeSubject.next(state);
  }

  private taskIds(tasks: TaskDictionary): TaskId[] {
    return Object.keys(tasks) as (keyof TaskDictionary)[];
  }

  private isWorking(tasks: TaskDictionary) {
    return this.taskIds(tasks).some(t => tasks[t] === true);
  }
}
