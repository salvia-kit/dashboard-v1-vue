<template>
  <ul class="mt-6 md:pl-6">
    <li>
      <div class="mb-10">
        <div class="font-medium mb-4 pl-5 text-gray-500 text-lg lg:pl-6">
          {{ name }}
        </div>
        <slot />
      </div>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  name: {
    type: String,
    default: '',
  },
});
</script>
