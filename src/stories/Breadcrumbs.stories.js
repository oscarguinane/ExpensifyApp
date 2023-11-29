import React from 'react';
import Breadcrumbs from '@components/Breadcrumbs';
import CONST from '@src/CONST';

/**
 * We use the Component Story Format for writing stories. Follow the docs here:
 *
 * https://storybook.js.org/docs/react/writing-stories/introduction#component-story-format
 */
const story = {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
};

function Template(args) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Breadcrumbs {...args} />;
}

// Arguments can be passed to the component by binding
// See: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Default = Template.bind({});
Default.args = {
    breadcrumbs: [
        {
            type: CONST.BREADCRUMB_TYPE.ROOT,
        },
        {
            text: 'Chats',
        },
    ],
};

const CustomPromptAndTooltip = Template.bind({});
CustomPromptAndTooltip.args = {
    breadcrumbs: [
        {
            text: 'Cathy`s Croissants',
            type: CONST.BREADCRUMB_TYPE.STRONG,
        },
        {
            text: 'Chats',
        },
    ],
};

const AllBreadcrumbsNormal = Template.bind({});
AllBreadcrumbsNormal.args = {
    breadcrumbs: [
        {
            text: 'Settings',
        },
        {
            text: 'Profile',
        },
    ],
};

export default story;
export {Default, CustomPromptAndTooltip, AllBreadcrumbsNormal};
