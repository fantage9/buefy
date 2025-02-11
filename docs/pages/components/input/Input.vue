<template>
    <div>
        <Example :component="ExSimple" :code="ExSimpleCode" vertical/>

        <Example :component="ExHorizontal" :code="ExHorizontalCode" vertical/>

        <Example :component="ExTypesStates" :code="ExTypesStatesCode" title="Types and states" vertical/>

        <Example :component="ExIcons" :code="ExIconsCode" title="Icons" vertical/>

        <Example :component="ExValidation" :code="ExValidationCode" title="Validation" vertical>
            <p>Automatic HTML5 validation on-blur.</p>
            <div class="tags has-addons">
                <span class="tag is-success">Since</span>
                <span class="tag is-info">0.7.2</span>
            </div>
            <p>You can use <code>use-html5-validation</code> prop to disable the default HTML5 validation.</p>
        </Example>

        <Example :component="ExPassword" :code="ExPasswordCode" title="Password" vertical>
            <p>You can use the <code>password-reveal</code> prop to add a button that reveals password.</p>
        </Example>

        <Example :component="ExLazy" :code="ExLazyCode" title="Lazy" vertical>
            <p>You could make the binding lazy, comparable with <code>v-model.lazy</code>, see <a href="https://vuejs.org/v2/guide/forms.html#lazy">.lazy modifier</a>. 
            As <code>v-model.lazy</code> won't work with custom components like Buefy, you could use this property.</p>
        </Example>

        <Example :component="ExSizes" :code="ExSizesCode" title="Sizes" vertical/>

        <Example :component="ExFilter" :code="ExFilterCode" title="Filter" vertical>
            <p>You could transform or restrict input values on the fly.</p>
        </Example>

        <ApiView :data="api"/>
        <VariablesView :data="variables"/>
    </div>
</template>

<script>
    import api from './api/input'
    import variables from './variables/input'

    import ExSimple from './examples/ExSimple'
    import ExSimpleCode from '!!raw-loader!./examples/ExSimple'

    import ExHorizontal from './examples/ExHorizontal'
    import ExHorizontalCode from '!!raw-loader!./examples/ExHorizontal'

    import ExTypesStates from './examples/ExTypesStates'
    import ExTypesStatesCode from '!!raw-loader!./examples/ExTypesStates'

    import ExIcons from './examples/ExIcons'
    import ExIconsCode from '!!raw-loader!./examples/ExIcons'

    import ExValidation from './examples/ExValidation'
    import ExValidationCode from '!!raw-loader!./examples/ExValidation'

    import ExPassword from './examples/ExPassword'
    import ExPasswordCode from '!!raw-loader!./examples/ExPassword'

    import ExSizes from './examples/ExSizes'
    import ExSizesCode from '!!raw-loader!./examples/ExSizes'

    import ExLazy from './examples/ExLazy'
    import ExLazyCode from '!!raw-loader!./examples/ExLazy'

    import ExFilter from './examples/ExFilter'
    import ExFilterCode from '!!raw-loader!./examples/ExFilter'

    export default {
        data() {
            return {
                api,
                variables,
                ExSimple,
                ExHorizontal,
                ExTypesStates,
                ExIcons,
                ExValidation,
                ExPassword,
                ExSizes,
                ExSimpleCode,
                ExHorizontalCode,
                ExTypesStatesCode,
                ExIconsCode,
                ExValidationCode,
                ExPasswordCode,
                ExSizesCode,
                ExLazy,
                ExLazyCode,
                ExFilter,
                ExFilterCode
            }
        }
    }
</script>
