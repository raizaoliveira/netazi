<template>
    <nav>
        <v-toolbar app dark>
            <v-toolbar-title to="{ name : 'home'}">
                 <router-link :to="{ name : 'home'}">Home</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn fab depressed  dark color="yellow" to="about">
                        <v-icon> account_box </v-icon>
                </v-btn>
                <v-btn fab depressed  dark color="purple" to="system">
                    <v-icon> favorite </v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar> 
    </nav>
</template>

<script>
export default {
    
}
</script>