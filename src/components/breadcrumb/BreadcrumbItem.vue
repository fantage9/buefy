<template>
    <li
        v-bind="classAndStyle"
        :class="{ 'is-active': active }"
    >
        <component
            :is="tag"
            v-bind="$attrs"
        >
            <slot />
        </component>
    </li>
</template>

<script>
import config from '../../utils/config'

export default {

    name: 'BBreadcrumbItem',

    inheritAttrs: false,

    props: {
        tag: {
            type: String,
            default: () => {
                return config.defaultBreadcrumbTag
            }
        },
        active: Boolean
    },
    computed: {
        classAndStyle() {
            return {
                class: this.$attrs.class,
                style: this.$attrs.style
            }
        }
    }
}
</script>
