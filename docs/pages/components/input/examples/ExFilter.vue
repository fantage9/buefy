<template>
    <section>
        <b-field label="Filter: only numbers">
            <b-input v-model="name" :filter="inputFilter"></b-input>
        </b-field>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                name: ''
            }
        },
        methods: {
            inputFilter (value) {
                return value.replace(/[^0-9]/g, '')
            }
        }
    }
</script>
