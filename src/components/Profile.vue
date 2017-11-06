<template>
    <div>
        <h2>Profile Updated</h2>
        <p class="small">Your profile information has been updated. For your records, here is a copy of the information you submitted to us..</p>
        <table>
            <tr>
                <td><strong>Email Address:</strong></td>
                <td>{{ email }}</td>
            </tr>
            <tr>
                <td><strong>First Name:</strong></td>
                <td>{{ name }}</td>
            </tr>
            <tr>
                <td><strong>Last Name</strong></td>
                <td>{{ surname }}</td>
            </tr>
        </table>
        <button>return to our website</button>
    </div>
</template>

<script>
export default {
    props: ['email', 'name', 'surname'],
    data() {
        return {}
    }
}
</script>

<style>
</style>
