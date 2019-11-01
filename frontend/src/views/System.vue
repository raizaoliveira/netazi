<template>
    <a v-on:click="retrieveSystem">Click me!</a>

    <h4 v-if="showRetrievedSystem">Retrieved System {{retrievedSystem.name}} {{retrievedSystem.description}} {{retrievedSystem.status}}</h4>
    <div class="system">
        <v-container class="my-5">
            <v-card flat class="pa-3" v-for="project in projects" :key="project.title">
                <v-layout row wrap :class="`pa-3 project ${project.status}`">
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Nome</div>
                        <div>{{ project.title}} </div>
                    </v-flex>
                    <v-flex xs12 md6>
                        <div class="caption grey--text">Função</div>
                        <div>{{ project.description}} </div>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-container>

    </div>
</template>

<script>
    import api from "../components/backend-api";
    export default {
        data() {
            return {
                projects: [{'title': 'Patrimônio', 'description': 'Gestão de bens mobiliários e imobiliários', 'status': 'complete'}, {'title': 'Almoxarifado', 'description': 'Gestão de estoque e almoxarido', 'status': 'ongoing'}],
                response: [],
                errors: [],
                system: {
                    name: '',
                    description: '',
                    status: ''
                },
                showResponse: false,
                retrievedSystem: {},
                showRetrievedSystem: false
            }
        },
        methods:{
            handleClick: function() {
                alert('test')
            },
            retrieveSystem () {
                api.getSystem().then(response => {
                    // JSON responses are automatically parsed.
                    this.retrievedSystem = response.data;
                    this.showRetrievedSystem = true
                })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        }
    }



</script>

<style>
    .project.complete {
        border-left: 4px solid #3cd1c2;
    }

    .project.ongoing {
        border-left: 4px solid orange;
    }

    .project.overdue {
        border-left: 4px solid tomato;
    }
</style>