// First, we import State from '@stencil/core'
import { Component, State, h } from '@stencil/core';

@Component({
    tag: 'current-time',
})
export class CurrentTime {
    timer: number;
    
    // Second, we decorate a class member with @State()
    // When `currentTime` changes, a rerender will be
    // triggered
    @State() currentTime: number = Date.now();

    connectedCallback() {
        this.timer = window.setInterval(() => {            
            // the assignment to `this.currentTime`
            // will trigger a re-render
            this.currentTime = Date.now();
        }, 1000);
    }

    disconnectedCallback() {
        window.clearInterval(this.timer);
    }
    render() {
        // Within the component's class, its members are
        // accessed via `this`. This allows us to render
        // the value stored in `currentTime`
        const time = new Date(this.currentTime).toLocaleTimeString();

        return (
            <span>{time}</span>
        );
    }
}