<template>
    <div>
        <h2>Unsubscribe</h2>
        <p class="small">We're sorry to see you go! Enter your email address to unsubscribe from this list.</p>
        <label for="email-unsubscribe">Email Address</label>
        <input id="email-unsubscribe" type="email" :class="{ 'error': error }" @input="$emit('update:email', $event.target.value)" :value="email" />
        <p class="error" v-if="error">Please enter valid email</p>
        <button @click="unsubscribe">Unsubscribe</button>
    </div>
</template>


<script>
import { validateEmail } from '../helpers/helpers.js'

export default {
    props: ['email', 'tab'],
    data() {
        return {
            error: false
        }
    },
    methods: {
        unsubscribe() {
            this.error = false;

            if (validateEmail(this.email)) {
                this.$emit('update:tab', 'survey');

                // exponea track
            } else {
                this.error = true;
            }
        }
    }
}
</script>

<style>
</style>
