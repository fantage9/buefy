<template>
    <div>
        <div class="block">
            <CodeView title="Full bundle" :code="usageBundle || pre" lang="javascript" expanded/>
        </div>

        <div class="block">
            <CodeView title="Individual components" :code="usageComponents || pre" lang="javascript" expanded/>
        </div>

        <ApiView :data="api"/>
    </div>
</template>

<script>
    import api from './api/constructor-options'

    export default {
        data() {
            return {
                api,
                usageBundle: `
                app.use(Buefy, {
                    defaultIconPack: 'fas',
                    // ...
                })`,
                usageComponents: `
                import { ConfigProgrammatic, Table, Input } from '@fantage9/buefy-vue3'

                app.use(Table)
                app.use(Input)
                ConfigProgrammatic.setOptions({
                    defaultIconPack: 'fas',
                    // ...
                })`
            }
        }
    }
</script>
