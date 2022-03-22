import { Component, State, h } from '@stencil/core';

// a user defined, complex type describing an 'Item'
type Item = {
    indx: number;
    description: string,
}

@Component({
    tag: 'item-list',
})
export class ItemList {
    // `timer` is not decorated with `@State()`, as
    // we do not wish to trigger a rerender when its
    // value changes
    timer: number;

    // `items` will trigger a rerender if
    // the value assigned to the variable changes
    @State() items: Item[] = [];
    @State() autoFill: boolean = false;

    connectedCallback() {
        // the assignment to `this.timer` will not
        // trigger a re-render
        // this.startTimer();
    }

    disconnectedCallback() {
        this.stopTimer();
    }

    private handleAutoFill = () => {
        this.autoFill = !this.autoFill;
        if (this.autoFill) {
            this.startTimer();
        } else {
            this.stopTimer();
        }

    }
    startTimer() {
        this.addNewItem();
        this.timer = window.setInterval((component) => {
            component.addNewItem()
        }, 2000, this);
    }

    stopTimer() {
        window.clearInterval(this.timer);
    }
    addNewItem() {
        const newTodo: Item = {
            description: "Item",
            indx: this.items.length + 1
        };
        // the assignment to `this.items` will
        // trigger a re-render. the assignment
        // using '=' is important here, as we
        // need that to make sure the rerender
        // occurs
        this.items = [...this.items, newTodo];
    }

    render() {
        return (
            <div>
                <h1>To-Do List</h1>
                <button onClick={this.handleAutoFill}> {this.autoFill ? 'Parar' : 'Rellenar'}</button>
                <ul>
                    {this.items.map((todo) => <my-item indx={todo.indx} description={todo.description} > </my-item>)}
                </ul>
            </div>
        );
    }
}