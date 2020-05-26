<template>
    <div>
        <v-toolbar app>
            <v-app-bar-nav-icon @click="drawer=true"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-black">Todo</span>
                <span>App</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <div><v-icon>work</v-icon></div>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app>
            <v-list>
                <v-list-item @click="drawer = false" ><v-icon>keyboard_backspace</v-icon></v-list-item>
               
                <v-list-item v-for="item in listItems" :key="item.route" link :to="item.route">
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{item.title}}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        
    



    </div>
</template>

<script>
    export default {
        data(){
            return{
                drawer:false,
                listItems:[{icon:'work', title:'Tasks', route:'/'},
                        {icon:'create', title:'Add Task', route:'/addTask'},
                        {icon:'timeline', title:'Statistics', route:'/stats'}]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>