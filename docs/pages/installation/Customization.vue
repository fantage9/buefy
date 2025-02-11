<template>
    <div>
        <div class="media">
            <div class="media-left">
                <h3 class="subtitle">1</h3>
            </div>
            <div class="media-content">
                <h3 class="subtitle">Install Buefy via npm</h3>
                <CodeView code="npm install @fantage9/buefy-vue3" lang="bash" expanded/>
                <p class="content">Or clone the repository: <a href="https://github.com/fantage9/buefy" target="_blank">https://github.com/fantage9/buefy</a></p>
            </div>
        </div>

        <div class="media">
            <div class="media-left">
                <h3 class="subtitle">2</h3>
            </div>
            <div class="media-content">
                <h3 class="subtitle">Set your variables with Sass</h3>
                <b-message type="is-info">
                    <div class="content">
                        <p><b>Tip:</b> You can see <a href="http://bulma.io/documentation/overview/variables/" target="_blank">all of Bulma's variables</a>.</p>
                        <p>There's also two other variables created by Buefy:</p>
                        <ol>
                            <li><code>$speed-slow: 150ms !default</code></li>
                            <li><code>$speed-slower: 250ms !default</code></li>
                        </ol>
                    </div>
                </b-message>
                <div class="example is-paddingless">
                    <CodeView :code="sass || pre" lang="sass" expanded/>
                </div>

            </div>
        </div>

        <div class="media">
            <div class="media-left">
                <h3 class="subtitle">3</h3>
            </div>
            <div class="media-content">
                <h3 class="subtitle">Import and use Buefy</h3>
                <b-message type="is-warning">
                    Please note that <code class="javascript">import '@fantage9/buefy-vue3/dist/buefy.css'</code> from the <router-link to="/documentation/start">start section</router-link> has been omitted.
                </b-message>
                <CodeView :code="importing || pre" lang="javascript" expanded/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sass: `
                // Import Bulma's core
                @import "bulma/sass/utilities/_all";

                // Set your colors
                $primary: #8c67ef;
                $primary-light: findLightColor($primary);
                $primary-dark: findDarkColor($primary);
                $primary-invert: findColorInvert($primary);
                $twitter: #4099FF;
                $twitter-invert: findColorInvert($twitter);

                // Lists and maps
                $custom-colors: null !default;
                $custom-shades: null !default;
                
                // Setup $colors to use as bulma classes (e.g. 'is-twitter')
                $colors: mergeColorMaps(
                    (
                        "white": (
                            $white,
                            $black,
                        ),
                        "black": (
                            $black,
                            $white,
                        ),
                        "light": (
                            $light,
                            $light-invert,
                        ),
                        "dark": (
                            $dark,
                            $dark-invert,
                        ),
                        "primary": (
                            $primary,
                            $primary-invert,
                            $primary-light,
                            $primary-dark,
                        ),
                        "link": (
                            $link,
                            $link-invert,
                            $link-light,
                            $link-dark,
                        ),
                        "info": (
                            $info,
                            $info-invert,
                            $info-light,
                            $info-dark,
                        ),
                        "success": (
                            $success,
                            $success-invert,
                            $success-light,
                            $success-dark,
                        ),
                        "warning": (
                            $warning,
                            $warning-invert,
                            $warning-light,
                            $warning-dark,
                        ),
                        "danger": (
                            $danger,
                            $danger-invert,
                            $danger-light,
                            $danger-dark,
                        ),
                    ),
                    $custom-colors
                );

                // Links
                $link: $primary;
                $link-invert: $primary-invert;
                $link-focus-border: $primary;

                // Import Bulma and Buefy styles
                @import "bulma/bulma";
                @import "@fantage9/buefy-vue3/src/scss/buefy";
                `,
                importing: `
                import { createApp } from 'vue'
                import Buefy from '@fantage9/buefy-vue3'

                const app = createApp()

                app.use(Buefy)
                `
            }
        }
    }
</script>
