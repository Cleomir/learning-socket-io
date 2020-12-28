<template>
  <div>
    <button @click="clickButton">Send message</button>
  </div>
</template>

<script>
export default {
  sockets: {
    connect() {
      console.log("Socket connected");
    },
    message(data) {
      console.log("Message from server: ", data);
    },
  },
  methods: {
    clickButton() {
      console.log("Sending message");
      this.$socket.emit("message", "hello from client");
    },
  },
};
</script>

<style scoped></style>
