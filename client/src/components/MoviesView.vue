<script setup>
import PostIndexVue from '@/components/movies/MovieIndex.vue';
import PostTitleVue from '@/components/movies/MovieTitle.vue';
import PostTitle from '@/components/movies/MovieTitle.vue';
import { ref } from 'vue';

const title = ref('This is an movies list page');
</script>

<template>
    <div>
        <PostTitleVue :title="title" />
        <PostIndexVue />
    </div>
</template>
