<!-- Doing this one-by-one is really bad. I'll make a better alternative with some js later i guess... -->

<template>
    <div class="content">

        <div class="background"></div>

        <h1 class="title">Official artworks</h1>

        <div class="cards">

            <Artwork :name="artworks[0].name" :description="artworks[0].description" :preview="artworks[0].preview" :file="artworks[0].file"/>

            <div class="footer"></div>

        </div>

    </div>
</template>

<script>
import Artwork from '../components/Artwork.vue'
// import artworks from '../assets/artworks.json' //

const artworks = [
    {
        "id": "1",
        "name": "Braixen x Doublade",
        "description": "A Pokémon fusion between Braixen and Doublade.",
        "date": "Apr 21, 2023",
        "preview": "https://github.com/eiiko6/LyphDraw-portfolio/blob/assets/artworks/Braixen%20x%20Doublade-small.png?raw=true",
        "file": "https://cdn.discordapp.com/attachments/851501348775657543/1130235790161629284/Braixen_x_Doublade.png"
    },
    {
        "id": "2",
        "name": "fromage",
        "description": "aaa",
        "date": "aa",
        "preview": "aaa",
        "file": "aa"
    }
]

export default {
    components: {
        Artwork
    },
    data() {
        return {
            artworks
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
