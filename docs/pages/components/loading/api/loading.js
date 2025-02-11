export default [
    {
        props: [
            {
                name: '<code>v-model</code>',
                description: 'Whether loading is active or not, use the <code>modelValue</code> property to make it one-way binding',
                type: 'Boolean',
                values: '—',
                default: '<code>false</code>'
            },
            {
                name: '<code>animation</code>',
                description: 'Custom animation (transition name)',
                type: 'String',
                values: '—',
                default: '<code>fade</code>'
            },
            {
                name: '<code>is-full-page</code>',
                description: 'Loader will overlay the full page',
                type: 'Boolean',
                values: '—',
                default: '<code>true</code>'
            },
            {
                name: '<code>can-cancel</code>',
                description: `Can close Loading by pressing escape or clicking outside`,
                type: 'Boolean',
                values: '—',
                default: '<code>false</code>'
            },
            {
                name: '<code>on-cancel</code>',
                description: `Callback function to call after user canceled (pressed escape / clicked outside)`,
                type: 'Function',
                values: '—',
                default: '—'
            }
        ],
        slots: [
            {
                name: 'default',
                description: 'Loading icon',
                props: '—'
            },
        ],
        events: [
            {
                name: '<code>close</code>',
                description: 'Triggers when user closed/canceled or called programmatically from the injected component',
                parameters: '—'
            }
        ]
    }
]
