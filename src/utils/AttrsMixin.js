export default {
    props: {
        attrsDeep: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        /**
         * $attrs without class and style when attrsDeep false
         */
        attrs() {
            if (this.attrsDeep) {
                return this.$attrs
            } else {
                const returnObj = {}
                for (const attr in this.$attrs) {
                    if (attr !== 'class' && attr !== 'style') {
                        returnObj[attr] = this.$attrs[attr]
                    }
                }
                return returnObj
            }
        },
        classAndStyle() {
            return {
                class: this.$attrs.class,
                style: this.$attrs.style
            }
        }
    }
}
