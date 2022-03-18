

export default {
  title: 'my-component'
};
export const Default = () => `<my-component first="Bipbip" last="Wallace"></my-component>`;
// export const Default = () => html`<my-component first="Bipbip" last="Wallace"></my-component>`;

const Template = ({ first, middle, last }) =>
  `<my-component first=${first} middle=${middle} last=${last} ></my-component>`;

export const Primary = Template.bind({});
Primary.storyName = 'Manage args';
// export const Primary = () => html`<my-component first="Bipbip" last="Wallace"></my-component>`;
Primary.args = {
    first: 'Pepe',
    middle: 'Garcia',
    last: 'Ferandez',
  };