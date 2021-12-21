function Todo({ todo, toggleTask}) {
    return (
        <div key={todo.id} className="item-todo" 
        onClick={(e) =>toggleTask(e.target.className, todo.id)}
        >
            <div className={todo.complete ? 'item-text strike' : "item-text"}
                
            >
                <div>{todo.task}</div>
                <div className="item-delete" >X</div>
            </div>
        </div>
    );
}

export default Todo;