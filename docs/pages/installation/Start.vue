<template>
    <div>
        <p :id="slugifyTitle('Icons')" class="title">
            <router-link :to="`#${slugifyTitle('Icons')}`">#</router-link>
            Icons
        </p>
        <p class="subtitle">Several components use icons, you might want to add a pack</p>
        <CodeView title="Material Design Icons CDN" :code="materialIcons" expanded/>
        <CodeView title="Font Awesome 5 CDN" :code="fontAwesome5" expanded/>
        <div class="content">
            <blockquote>
                <p>Refer to its documentation for latest release / CDN.</p>
                <p>Please note that Buefy doesn't include icon packs. You have to import it as you prefer (NPM, CDN, etc.).</p>
                <p>
                    If you opted for Font Awesome, you should update your
                    <router-link to="/documentation/constructor-options">constructor options</router-link>.
                </p>
            </blockquote>
        </div>

        <hr>

        <b-message type="is-warning" size="is-medium">
            For any installation and usage method, you need
            <strong><a href="https://vuejs.org" target="_blank">Vue.js</a> version 3.0+</strong>.
        </b-message>

        <div class="media">
            <div class="media-left">
                <p :id="slugifyTitle('NPM or Yarn')" class="title">
                    <router-link :to="`#${slugifyTitle('NPM or Yarn')}`">#</router-link>
                    1
                </p>
            </div>
            <div class="media-content">
                <p class="title">NPM or Yarn <em>(recommended)</em></p>
                <p class="subtitle is-spaced">After creating a project with vue-cli or custom-made (usually Webpack)</p>
                <p class="title is-4">Installation</p>
                <CodeView code="npm install @fantage9/buefy-vue3" lang="bash" expanded/>

                <hr>

                <div class="title is-4">Usage</div>
                <b-message type="is-success">
                    <div class="content">
                        Even though this is going to import <strong>ALL</strong> components to your application,
                        Buefy full bundle is optimized and still pretty small:
                        <ul>
                            <li><strong>script</strong> is <strong>48KB</strong> min+gzip</li>
                            <li><strong>style</strong> is <strong>39KB</strong> min+gzip (with bulma included)</li>
                        </ul>
                    </div>
                </b-message>
                <CodeView title="Full bundle" :code="importingBundle || pre" lang="javascript" expanded/>
                <CodeView title="Individual components as Vue plugins" :code="importingComponentsAsVuePlugins || pre" lang="javascript" expanded/>
                <b-message type="is-info">
                    To include individual styles, see <router-link to="/documentation/customization">Customization</router-link> section.
                </b-message>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                importingBundle: `
                import { createApp } from 'vue'
                import Buefy from '@fantage9/buefy-vue3'
                import '@fantage9/buefy-vue3/dist/buefy.css'

                const app = createApp()

                app.use(Buefy)
                `,
                importingComponentsAsVuePlugins: `
                import { createApp } from 'vue'
                import { Table, Input } from '@fantage9/buefy-vue3'
                import '@fantage9/buefy-vue3/dist/buefy.css'

                const app = createApp()

                app.use(Table)
                app.use(Input)
                `,
                materialIcons: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@5.8.55/css/materialdesignicons.min.css">',
                fontAwesome5: '<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">'
            }
        },
        methods: {
            slugifyTitle(title) {
                if (!title) return ''
                return title.toLowerCase()
                    .replace(/\s+/g, '-') // Replace spaces with -
                    .replace(/[^\w-]+/g, '') // Remove all non-word chars
                    .replace(/--+/g, '-') // Replace multiple - with single -
                    .replace(/^-+/, '') // Trim - from start of text
                    .replace(/-+$/, '') // Trim - from end of text
            }
        }
    }
</script>
