<template>
    <div>
        <v-container>
            
            <h1 class=" mb-5" >Your Tasks</h1>
            <v-card flat > 
                
                 <v-layout row wrap v-for="task in task" :key="task.title" class="my-4 ml-5 mt-1" >
                    <v-flex xs12 sm6 md6>
                        <div class="grey--text font-weight-bold ">About Task</div>
                        <div class="font-weight-black">{{task.title}}</div>
                        <div>Type: {{task.type}}</div>
                        <div>Description: {{task.comments}}  </div>
                        
                        <div><v-btn text @click="remove(task.title)" small class="ma-2 ml-n1 font-weight-light">Remove</v-btn>
                        <v-btn text @click="completed(task.title)" small class="font-weight-light">Completed</v-btn></div>
                    </v-flex>

                    <v-flex xs6 sm3 md3>
                        <div class="grey--text">Place</div>
                        <div>{{task.place}}</div>
                    </v-flex>

                    <v-flex xs6 sm3 md3>
                        <div class="grey--text">Date and Time</div>
                        <div>{{task.date}}</div>
                        <div>{{task.time}}</div>
                        
                                                
                    </v-flex>
                    <v-divider></v-divider>
                    
                </v-layout>
                
                

            </v-card>
        </v-container>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
    export default {
        data(){
            return{
                dark:true
            }
        },
     computed:{
         task(){return this.$store.state.tasks}
     },
     methods:{
         ...mapMutations(['remove','completed'])
     }  
    }
</script>

<style lang="scss" scoped>

</style>