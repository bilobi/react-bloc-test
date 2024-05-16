import { BehaviorSubject, Observable } from "rxjs";
import Bloc from "../models/Bloc";
import Todo from "../models/Todo";

class TodoBloc implements Bloc {
    private _todos$: BehaviorSubject<Todo[]>

    constructor() {
        this._todos$ = new BehaviorSubject<Todo[]>([]);

    }

    dispose(): void {
        this._todos$.complete();
    }


    public get todo$(): Observable<Todo[]> {
        return this._todos$.asObservable();
    }

    addTodo(todo: Todo) {
        this._todos$.next(this._todos$.getValue().concat(todo))
    }

    toggleTodo(todo: Todo) {
        this._todos$.next(
            this._todos$
                .getValue()
                .map((val) => val.id == todo.id ? { ...val, isDone: !val.isDone } : val)
        )
    }



}

export default TodoBloc;