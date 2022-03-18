

export default {
  title: 'Item'
};
export const Default = () => ` <my-item   indx="1" description="test item" > </my-item>`;
// export const Default = () => html`<my-component first="Bipbip" last="Wallace"></my-component>`;

const Template = ({ indx, description, last }) =>
  ` <my-item   indx=${indx} description=${description} > </my-item>`;

export const Primary = Template.bind({});
Primary.storyName = 'Manage args';
// export const Primary = () => html`<my-component first="Bipbip" last="Wallace"></my-component>`;
Primary.args = {
  indx: '1',
  description: 'My item'
};