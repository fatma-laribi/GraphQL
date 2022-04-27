import {bd} from "../data/bd.js";

export const Todo = {
    user: ( todo ) => {
        return bd.user.find(
            (user) => user.id == todo.user
        );
    }
}
