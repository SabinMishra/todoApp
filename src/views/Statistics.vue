<template>
    <div>
        <v-container>
            <v-card  flat class="pa-1" >

                <v-layout row wrap class="text-center">
                    <v-flex xs12 sm4 md4 ><span class="uppercase font-weight-bold grey--text text-center" >Total Tasks <span class="black--text ">{{total}}</span></span></v-flex>
                    <v-flex xs12 sm4 md4><span class="uppercase font-weight-bold green--text" >Completed <span class="black--text">{{completed}}</span></span></v-flex>
                    <v-flex xs12 sm4 md4><span class="uppercase font-weight-bold red--text" >Cancelled <span class="black--text">{{cancelled}}</span></span></v-flex>
                
                </v-layout>
                </v-card>
                <v-btn flat class="mt-5" @click="displayStats" >See in details</v-btn>

                <v-card flat class="pl-3 mt-10"> 
                
                 <v-layout row wrap v-for="task in stat" :key="task.title"  :class="`${task.status}`" >
                    <v-flex xs12 sm6 md6 >
                        <div class="grey--text font-weight-bold ">About Task</div>
                        <div class="font-weight-black">{{task.title}}</div>
                        <div>Type: {{task.type}}</div>
                        <div>Description: {{task.comments}}  </div>
                        
                        
                    </v-flex>

                    <v-flex xs6 sm3 md3>
                        <div class="grey--text">Place</div>
                        <div>{{task.place}}</div>
                    </v-flex>

                    <v-flex xs6 sm3 md3>
                        <div row><div class="grey--text display" >Date and Time</div> <v-chip class="ml-2 " :class="`${task.status}`">{{task.status}}</v-chip></div>
                        
                        <div>{{task.date}}</div>
                        <div>{{task.time}}</div>
                        
                                                
                    </v-flex>
                    <hr>
                    
                    
                </v-layout>
                
                

            </v-card>
            

            
            
            
        </v-container>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex' 
    export default {
        data(){
            return{
                inset:false
            }
        },
        computed:{
            ...mapGetters([
                'cancelled',
                'completed',
                'total',
                'stat'
                
                
            ])
            
            
        },
       methods :{
           ...mapMutations(['displayStats'])
       }
    }
</script>

<style scoped>

.completed{
    border-left: 5px solid #3cd1c2;   
}

.cancelled{
    border-left: 5px solid tomato;
}

.pending{
    border-left: 5px solid orange;
}

.display{
    display: inline;
}

.v-chip.completed{
    background-color: #3cd1c2;
    border-left: solid white;
}
.v-chip.cancelled{
    background-color: tomato;
    border-left: solid white;
}
.v-chip.pending{
    background-color: orange;
    border-left: solid white;
}
</style>