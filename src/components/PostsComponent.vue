<template>
    <div class="container">
        <div class="row mb-4" v-for="post in posts" :key="post.id">
            <div class="col-4">
                <img :src="post.image" class="img-fluid"/>
            </div>
            <div class="col-8">
                <h2>{{post.title}}</h2>
                <p v-html="post.description"></p>
                <div class="row">
                    <div class="col-8"></div>
                    <div class="input-group col-4">
                        <input class="form-control blog-input" v-model="quantities[post.id]" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" @click="handleClick(post)">{{$t('buy')}}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'PostComponent',
    data(){
        return {
            posts: [],
            quantities:[]
        }
    },
    mounted(){
        axios.get('posts').then(
            response =>{
                console.log(response.data);
                this.posts = response.data;
            }
        )
    },
    methods:{
        handleClick(post){
            // post.quantity_left = this.quantities[post.id];
            console.log(post);
            axios.patch('posts/'+post.id,{
                post
            }).then(response=>{
                    console.log(response.data);
                    alert(this.$i18n.t('congratulation'));
            }).catch(error=>{
                    const res = error.response.data;
                    console.log(res);
                    alert(this.$i18n.t('not_enough'));
            })
        },

    }
}
</script>

<style>

</style>