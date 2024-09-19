<style>
  .done {
  text-decoration: line-through;
}
</style>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height mx-auto" max-width="750">
      <div class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>
        <h1 class="text-h2 font-weight-bold">To-Do List</h1>
        <v-subheader class="headline">{{date}} <br> {{ time }}</v-subheader>
      </div>

      <div class="py-4">
        <v-row>
          <v-col cols="12">
            <v-card class="py-4 px-4" color="blue" rounded="lg" variant="outlined">
              <!-- @submit.prevent="addTask" Important in form submitting -->
              <v-form ref="validateForm" @submit.prevent="addTask">
                <v-row>

                  <v-col cols="10">
                    <v-text-field
                      v-model="newTask"
                      id="newTask"
                      name="newTask"
                      label="Add task...."
                      @keyup.enter="addTask"
                      :hint="isExist"
                      :counter="20"
                      maxLength="20"
                    ></v-text-field>
                  </v-col>

                  <v-col>
                    <v-btn align-self="right" class="ma-3" fab color="blue" style="border-radius:50px;" @click="addTask">
                      <v-icon class="white--text">mdi-pencil-plus-outline</v-icon>
                    </v-btn>
                  </v-col>

                </v-row>
              </v-form>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols=12>

            <v-card class="py-4" color="blue" rounded="lg" variant="outlined">
              <v-card class="py-3 px-4" color="surface-variant" variant="filled">
                <v-list-subheader class="subheader">{{ todos.length }} Task(s)</v-list-subheader>
              </v-card>

              <v-list subheader two-line flat>
                <v-list-subheader class="subheading" v-if="todos.length == 0">You have no tasks, add some.</v-list-subheader>

                <v-list-item-group>
                  <v-list-item v-for="(todo, i) in todos" :key="i">

                    <template #default="{ active, toggle }">
                      <v-row class="px-1" style="max-height: 5rem;">

                        <v-col cols="1">
                          <v-list-item-action>
                            <v-checkbox v-model="todo.done" @click="toggle"></v-checkbox>
                          </v-list-item-action>
                        </v-col>

                        <v-col class="pa-2 ma-2 px-1">
                        <v-list-item-content>
                            <v-list-item-title :class="{ done: todo.done }">{{ todo.title }}</v-list-item-title>
                            <v-list-item-subtitle style="font-size: 78%;">Added on: {{ todo.date }}</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-col>
                      
                        <v-col align="end" class="ma-3">
                          <v-btn fab color="red" style="border-radius:50px;" v-if="todo.done" @click="removeTask(i)">
                            <v-icon class="white--text">mdi-close</v-icon>
                          </v-btn>
                        </v-col>

                      </v-row>
                    </template>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-responsive>
  </v-container>
</template>

<script src="@/styles/main.js"></script>
