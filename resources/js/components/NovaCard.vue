<template>
  <CardContainer type="nova">NOVA CARD</CardContainer>
</template>

<script>
import CardContainer from "./CardContainer";

export default {
  props: ["card"],
  components: {
    CardContainer
  },
};
</script>
