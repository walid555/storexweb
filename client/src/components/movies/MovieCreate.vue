<script setup>
import PostTitle from '@/components/movies/MovieTitle.vue';
import { reactive, ref } from 'vue';
import { createUrl, pathMain } from '@/config/URIPath';


const post = reactive({
    _id: '',
    title: '',
    description: ''
});

const postEnv = process.env.VUE_BACKEND_POSTS_URI;
const title = ref('This is an movie create page');

async function postSave() {
    const data = {
        title: post.title,
        description: post.description
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    // console.log(requestOptions);
    await fetch(createUrl, requestOptions)
    .then(response => {
        response.json()
        window.location.href = `${pathMain}posts`;
    })
    .then(json => post.value = json);
}



</script>

<template>
<div>
<PostTitle :title="title" />

            <!-- <form @submit.prevent="editSave(post._id, event)"> DATA CHECK CONTROL AFTER -->
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="title" placeholder="Post Title" v-model="post.title">
                <label for="title">Post Title</label>
            </div>
            <div class="form-floating">
                <textarea class="form-control" placeholder="Post Description" id="description" style="height: 100px"
                    v-model="post.description"></textarea>
                <label for="description">Post Description</label>
                <div class="container">
                    <div class="row">
                        <div class="d-grid gap-2 mt-4">
                            <button class="btn btn-success" type="button" @click="postSave">New Create Movie</button>
                        </div>
                        <div class="d-grid gap-2 mt-4">
                            <router-link to="/posts" class="btn btn-warning">Cancel</router-link>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </form> -->
</div>
</template>

