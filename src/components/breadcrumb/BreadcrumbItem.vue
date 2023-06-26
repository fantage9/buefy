<template>
    <li
        v-bind="classAndStyle"
        :class="{ 'is-active': active }"
    >
        <component
            :is="tag"
            v-bind="attrs"
        >
            <slot />
        </component>
    </li>
</template>

<script>
import config from '../../utils/config'
import AttrsMixin from '../../utils/AttrsMixin'

export default {
    name: 'BBreadcrumbItem',
    mixins: [AttrsMixin],
    inheritAttrs: false,
    props: {
        tag: {
            type: String,
            default: () => {
                return config.defaultBreadcrumbTag
            }
        },
        active: Boolean
    }
}
</script>
