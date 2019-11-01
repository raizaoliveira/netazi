<template>
    <div class="hello">

        <h1>{{ hellomsg }}</h1>
        <h2>See the sources here: </h2>

        <h3>This site contains more stuff :)</h3>
        <ul>
            <li>HowTo call REST-Services:</li>
            <li><router-link to="/callservice">/callservice</router-link></li>
            <li>HowTo to interact with the Spring Boot database backend:</li>
            <li><router-link to="/system">/user</router-link></li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        props: { hellomsg: { type: String, required: true } }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
