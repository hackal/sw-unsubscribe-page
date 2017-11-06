<template>
    <div>
        <div class="header">
            <a href="https://www.sophiawebster.com" target="_blank">
                <img src="src/assets/sophia-webster.png">
            </a>
        </div>
        <div class="wrapper">
            <preferences v-if="tab == 'preferences'" :email.sync="email" :name.sync="name" :surname.sync="surname" :tab.sync="tab"></preferences>
            <profile v-if="tab == 'profile'" :email="email" :name="name" :surname="surname"></profile>
            <unsubscribe v-if="tab == 'unsubscribe'" :email.sync="email" :tab.sync="tab"></unsubscribe>
            <survey v-if="tab == 'survey'"></survey>
        </div>
    </div>
</template>

<script>
import Preferences from './components/Preferences.vue'
import Profile from './components/Profile.vue'
import Unsubscribe from './components/Unsubscribe.vue'
import Survey from './components/Survey.vue'

export default {
    name: 'app',
    components: { Preferences, Profile, Unsubscribe, Survey },
    data () {
        return {
            email: '',
            name: '',
            surname: '',
            tab: 'preferences'
        }
    },
    mounted() {
        this.email = 'my.mail@example.com'
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: #fff4f6;
    padding: 95px 10px 0px;
    line-height: 150%;
    font-family: Arial;
}
.wrapper {
    background: #ffffff;
    max-width: 600px;
    width: 100%;
    margin: 0 auto 10px;
    border-radius: 6px;
    padding: 20px;
    color: #333333;
}
.header {
    padding: 10px;
    max-width: 290px;
    margin: 0 auto 30px;
}
img {
    display: block;
    margin: 0 auto;
    max-width: 270px;
    width: 100%;
    
}
h2 {
    font-size: 22px;
    line-height: 28px;
    margin: 0 0 22px 0;
}
label {
    line-height: 150%;
    font-family: Helvetica;
    font-size: 16px;
    color: #5d5d5d;
    margin-top: 8px;
    font-weight: bold;
    display: block;
}
input[type="text"], input[type="email"], textarea {
    color: #5d5d5d;
    font-size: 14px;
    display: block;
    margin: 3px 0 12px 0;
    padding: 10px;
    background: #fff;
    width: 100%;
    border: 2px solid #d0d0d0;
    border-radius: 3px;
    -webkit-appearance: none;
}
input:focus, textarea:focus {
    outline: none;
    border-color: #5d5d5d;
}
p.error {
    color: #e85c41;
    padding: 0 0 10px;
    line-height: 16px;
    font-size: 14px;
}
input.error {
    border-color: #e85c41;
}
button:disabled, button:disabled:hover {
    background: #cccccc;
}

button {
    text-align: center;
    margin: 12px 5px 12px 0;
    -webkit-appearance: none;
    border: none;
    background: #5d5d5d;
    color: #ffffff;
    font-size: 16px;
    line-height: 42px;
    height: 42px;
    padding: 0 22px;
    border-radius: 3px;
    font-weight: 500;
}
button:hover {
    background: #444444;
}
a {
    color: #ff48b0;
    text-decoration: underline;
}

a:hover {
    cursor: pointer;
}
.small {
    font-size: 14px;
}
</style>
