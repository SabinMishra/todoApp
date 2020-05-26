<template>
    <div>
        <v-container class="pt-10">
         

            
        
            

              <v-card flat>
            <v-card-title><h1>Add a new Task</h1></v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field label="Title" v-model="task.title"  prepend-icon="directions_run"></v-text-field>
                    <v-text-field label="Place" v-model="task.place" prepend-icon="place"></v-text-field>
                    
                    <v-menu offset-y>
                    <template v-slot:activator="{on}">
                    <v-text-field label="Date" prepend-icon="date_range" v-on="on" :value="task.date"></v-text-field>
                    </template>
                    <v-date-picker v-model="task.date"></v-date-picker>
                    </v-menu>

                    <v-menu offset-y>
                        <template v-slot:activator="{on}">
                            <v-text-field label="Time"  v-on="on" :value="task.time"></v-text-field>
                        </template>
                        <v-time-picker v-model="task.time" format="24hr"></v-time-picker>
                        
                    </v-menu>


                    <v-col class="d-flex ml-n3" cols="12" sm="6">
                        <v-select :items="select" label="Type of task" standard v-model="task.type"></v-select>
                    </v-col>
                   
                    <v-textarea label="Add Comment" v-model="task.comments"></v-textarea>

                    </v-form>

                <v-dialog v-model="dialog" persistent max-width="340">
                    <template v-slot:activator="{ on }"><v-btn depressed color="#8091c2" @click="addTask(task)" v-on="on"><v-icon>add</v-icon><span class="font-weight-black">Add Task</span></v-btn></template>
                        <v-card>
                            <v-card-title class="headline">Save task?</v-card-title>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="green darken-1" text @click="dialog = false">Go back</v-btn>
                                <v-btn color="green darken-1" text @click="addTask" to="/">Yes</v-btn>
                            </v-card-actions>
                        </v-card>
                    
                </v-dialog>
            </v-card-text>
        </v-card>






<!-- 
 <v-dialog v-model="dialog" persistent max-width="290">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->

    </v-container>

    </div>
</template>

<script>
import { mapMutations } from 'vuex';
    export default {
        data(){
            return{
                select:['Personal','Work'],
                dialog:false,
                task:{title:null,
                    place:null,
                    date:null,
                    time:null,
                    type:null,
                    comments:null,
                    status:'pending'
            }
            }
        },
        
        methods:{
            ...mapMutations(['addTask'])
            // addTask(){
            //     this.$store.state.tasks.push(this.task);
            //     this.$store.state.task.id++;
            //     console.log(this.$store.state.tasks)
            // }
        }
    }
</script>

<style lang="scss" scoped>

</style>