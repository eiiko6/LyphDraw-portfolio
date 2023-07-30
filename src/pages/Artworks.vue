<!-- Doing this one-by-one is really bad. I'll make a better alternative with some js later i guess... -->

<template>
    <div class="content">

        <div class="background"></div>

        <h1 class="title">Official artworks</h1>

        <div class="cards">

            <Artwork v-for="artwork in artworks" :name="artwork.name" :description="artwork.description" :preview="artwork.preview" :file="artwork.file"/>
            <div class="footer"></div>

        </div>

    </div>
</template>

<script>
    import Artwork from '../components/Artwork.vue'
    import artworks from '../assets/artworks.json'

    export default {
        components: {
            Artwork
        },
        data() {
            return {
                artworks: artworks.artworks
            }
        }
    }
</script>

<style scoped>

    .bg1 {
        background-image: url(https://github.com/eiiko6/LyphDraw-portfolio/blob/assets/artworks/Braixen%20x%20Doublade-small.png?raw=true);
    }

    .background {
        z-index: -1;
        margin: 0;
        padding: 0;
        top:0px;
        right:0px;
        bottom:0px;
        left:0px;
        background: url(https://images.unsplash.com/photo-1682695794816-7b9da18ed470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        filter: blur(4px) opacity(0.5);
        height: 250vh; /*Adjust manually*/
        position: fixed;
        min-height: 100%;
        height: auto;
    }

    .footer {
        top: 0;
        left: 0;
        margin: 0;
        height: 50px;
        width: 100%;
    }

    .content {
        margin: auto;
        padding: 0;
        top:0px;
        right:0px;
        bottom:0px;
        left:0px;
        text-align: center;
    }

    .cards {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        flex-wrap: wrap;
        margin-top: 50px;
    }
</style>
