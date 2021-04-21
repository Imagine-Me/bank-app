<template>
  <div
    class="w-12 h-12 my-2 bg-gray-200 rounded-full flex justify-center items-center cursor-pointer hover:bg-primary group"
    :class="{ 'bg-primary': isActive }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
    },
  },
};
</script>