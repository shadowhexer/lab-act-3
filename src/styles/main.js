export default{
  data() {
    return {
      newTask: "",
      todos: [],
      date: null,
      interval: null,
      time: null,
      isTodoExist: false,
    };
  },

  // Credits from: https://stackoverflow.com/questions/64914757/realtime-clock-with-vue-js
  beforeDestroy() {
    // prevent memory leak
    clearInterval(this.interval)
  },

  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format(),
      this.date = Intl.DateTimeFormat("en-GB", { dateStyle: 'full'}).format()
    }, 1000)
  },

  computed: {
    isExist() {
      return this.isTodoExist ? "Task already exists." : "";
    }
  },

  methods: {
    addTask() {
      const value = this.newTask && this.newTask.trim();
      if (!value) {
        return;
      }

      const isExists = this.todos.find((todo) => todo.title === value);

      if (!isExists) {
        this.todos.push({
          title: this.newTask,
          done: false,
          date: this.taskDate() + " "+ this.taskMonth(), 
        });

        this.newTask = "";
        this.isTodoExist = false;

      } else {
        this.isTodoExist = true;
      }
    },

    taskDate() {
      const date = new Date();
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      return days[date.getDay()] + ", " + date.getDate();
    },

    taskMonth() {
      const date = new Date();
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      return month[date.getMonth()] + " " + date.getFullYear();
    },

    removeTask(index) {
      this.todos.splice(index, 1);
    },
  },
};