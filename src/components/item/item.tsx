import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'my-item',
})
export class Item {
   
    @Prop() indx: number;
    @Prop() description: string;
    render() {
        return (
            <li>{this.description} #{this.indx} </li>
        );
    }
}