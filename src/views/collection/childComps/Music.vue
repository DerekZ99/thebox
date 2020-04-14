<template>
  <div class="music">
    <span
      @click="prevClick()"
      class="songBtn"
      :class="audioIndex == 0 ? 'animated rollOut' : 'animated rollIn'"
      >上一首</span
    >
    <audio :src="audioUrl[audioIndex]" controls></audio>
    <span
      @click="nextClick()"
      class="songBtn"
      :class="audioIndex == 2 ? 'animated rollOut' : 'animated rollIn'"
      >下一首</span
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      audioUrl: [
        require("../../../assets/mp3/migosBeat.mp3"),
        require("../../../assets/mp3/savageBeat.mp3"),
        require("../../../assets/mp3/Bank Account.mp3")
      ],
      audioIndex: 0
    };
  },
  methods: {
    prevClick() {
      if (this.audioIndex > 0) {
        this.audioIndex--;
      }
    },
    nextClick() {
      if (this.audioIndex < 2) {
        this.audioIndex++;
      }
    }
  }
};
</script>

<style scoped>
audio {
  height: 30px;
}
.songBtn {
  position: relative;
  top: -10px;
  display: inline-block;
  margin: 0 20px 0;
  padding: 10px;
  border-radius: 15px;
  background-color: #f1f3f4;
}
.songBtn:hover {
  background-color: #e5e7e8;
  cursor: pointer;
}
</style>
