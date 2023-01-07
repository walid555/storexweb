<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: 'This is an movie api page',
    }
});

</script>
<template>
<div class="mb-2">
    <h1>{{title}}</h1>
    <div class="d-grid gap-2 mt-4">
        <router-link to="/post-create" class="btn btn-primary">New Movie Add</router-link>
    </div>
</div>
</template>
