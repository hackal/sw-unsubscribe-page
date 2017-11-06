<template>
    <div>
        <h2>Update your preferences</h2>

        <label for="email-preferences">Email Address</label>
        <input if="email-preferences" type="email" :class="{ 'error': error }"@input="$emit('update:email', $event.target.value)" :value="email" />

        <p class="error" v-if="error">Please enter valid email</p>

        <label for="first-name-preferences">First Name</label>
        <input id="first-name-preferences" type="text" @input="$emit('update:name', $event.target.value)" :value="name" />

        <label for="last-name-preferences">Last Name</label>
        <input id="last-name-preferences" type="text" @input="$emit('update:surname', $event.target.value)" :value="surname" />

        <button @click="updateProfile">Update Profile</button> <span class="small">or <a @click.prevent="$emit('update:tab', 'unsubscribe')">Unsubscribe</a></span>
    </div>
</template>

<script>
import { validateEmail } from '../helpers/helpers.js'

export default {
    props: ['email', 'name', 'surname', 'tab'],
    data() {
        return {
            error: false
        }
    },
    methods: {
        updateProfile() {
            this.error = false;

            if (validateEmail(this.email)) {
                this.$emit('update:tab', 'profile');

                // exponea track
            } else {
                this.error = true;
            }
        },
        unsubscribe() {
        }
    }
}
</script>
