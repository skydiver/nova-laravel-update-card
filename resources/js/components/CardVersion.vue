<template>
  <div class="flex mt-2 px-3 items-center" :class="cssClass">
    <span class="mr-1">{{ label }}</span>
    <strong>{{ version}}</strong>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    version: {
      type: String,
      default: ""
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    alignment: {
      type: String,
      default: "left"
    }
  },
  computed: {
    cssClass() {
      return `${this.cardWidth} ${this.boxAlignment}`;
    },
    cardWidth() {
      if (this.fullWidth) {
        return "w-full";
      }
      return "w-1/2";
    },
    boxAlignment() {
      if (this.fullWidth) {
        return "justify-center";
      }
      if (this.alignment === "right") {
        return "justify-end";
      }
      return "justify-start";
    }
  }
};
</script>
