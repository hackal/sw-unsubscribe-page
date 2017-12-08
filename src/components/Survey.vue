<template>
    <div>
        <h2>Unsubscribe Successful</h2>
        <p class="small">You will no longer receive email marketing from this list.</p>
        <p class="success" v-if="success">Thanks for the feedback</p>
        <p class="error" v-if="error"><strong>There were errors recording your feedback, please try again later</strong></p>
        <p><strong>If you have a moment, please let us know why you unsubscribed:</strong></p>

        <div class="fieldset" v-for="choice in choices" :key="safe(choice.question)">
            <input :id="safe(choice.question)" type="radio" v-model="selection" v-bind:value="choice.value">
            <label :for="safe(choice.question)">{{ choice.question }}</label>
        </div>
        <div v-if="selection == 'other'">
            <textarea :class="{ 'text-field-error': textError }" v-model="reason"></textarea>
            <p v-if="textError" class="error small"><strong>This field is required</strong></p>
        </div>

        

        <button :disabled="disable" @click="submit">Submit</button>
        <a href="https://www.sophiawebster.com" target="_blank" class="small">return to our website</a>
    </div>
</template>

<script>
import { selectorSafe } from '../helpers/helpers.js'

export default {
    data() {
        return {
            success: false,
            error: false,
            disable: false,
            reason: '',
            selection: '',
            textError: false,
            choices: [
                { question: 'I no longer want to receive these emails', value: 'I no longer want to receive these emails' },
                { question: 'I never signed up for this mailing list', value: 'I never signed up for this mailing list' },
                { question: 'The emails are inappropriate', value: 'The emails are inappropriate' },
                { question: 'The emails are spam and should be reported', value: 'The emails are spam and should be reported' },
                { question: 'Other (fill in reason below)', value: 'other' }
            ]
        }
    },
    methods: {
        submit() {
            this.error = false;
            this.textError = false;

            if (this.selection !== '') {
                if (this.selection === 'other') {
                    if (this.reason !== '') {
                        this.success = true;
                        this.disable = true;
                        // track this.selection & this.reason
                    } else {
                        this.textError = true;
                    }
                } else {
                    // track this.selection
                    this.disable = true;
                    this.success = true;
                    this.selection = '';
                }

                
            } else {
                this.error = true;
            }
        },
        safe(name) {
            return selectorSafe(name)
        }
    }
}
</script>

<style>
.success {
    background: #e4f3d4;
    border: 2px solid #5ca000;
    font-size: 14px;
    color: #4e7e0e !important;
    margin: 10px 0;
    padding: 10px;
}
.fieldset {
    position: relative;
    margin: 9px 0 0 0;
    border-radius: 3px;
}

.fieldset:hover {
    background: rgba(0,0,0,.05);
}
.fieldset label {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    padding: 4px 0 4px 34px;
}
input[type="radio"], input[type="checkbox"] {
    position: absolute;
    left: 4px;
    top: 4px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #fff;
    -webkit-appearance: none;
    border: 2px solid #d0d0d0;
}
input[type="radio"]:checked:after, input[type="checkbox"]:checked:after {
    content: ' ';
    position: absolute;
    width: 12px;
    height: 12px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: #444444;
    display: block
}

textarea {
    margin-top: 20px;
}

.text-field-error {
    border-color: #e85c41;
}

</style>
