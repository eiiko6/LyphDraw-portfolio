<template>
    <div class="content">
        <!--<div class="warning-banner">
            <h2>Warning: this website is a work in progress. The graphics are mainly temporary.</h2>
            <button></button>
        </div>-->

        <div class="background"></div>
        <div class="img"><img class="pfp" src="https://github.com/eiiko6/LyphDraw-portfolio/blob/assets/pfp-small.png?raw=true" alt="pfp"></div>
        <h1>-> LyphDraw</h1>
        <p>LyphDraw is a passionate self-taught artist. He has made a large amount of drawings, either classical or digital. His styles are mainly manga/anime, cartoon and semi-realistic illustrations, and he can work with caricatures sometimes. LyphDraw loves experimenting, as seen in the various colors and backgrounds in his artworks.</p>
        <div class="button"><router-link class="link" to="/LyphDraw-portfolio/Artworks">Go to artworks</router-link></div>
        <div class="footer"></div>
    </div>
</template>

<script>

</script>

<style scoped>

    .content {
        margin: auto;
        margin-top: 120px;
        padding: 0;
        top:0px;
        right:0px;
        bottom:0px;
        left:0px;
        max-width: 80%;
    }

    .footer {
        top: 0;
        left: 0;
        margin: 0;
        height: 50px;
        width: 100%;
    }

    p {
        font-size: 20px;
    }

    h1 {
        font-size: 60px;
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

    .pfp {
        min-width: 250px;
        width: 30%;
        height: auto;
        max-width: 350px;
    }

    .img {
        margin-top: 50px;
    }

    @media screen and (max-width: 730px) {
        .img {
        margin-top: 140px;
        }

        p {
            font-size: 18px;
        }

        h1 {
            font-size: 50px;
        }
    }

    .link {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #2e2e2e;
        cursor: pointer;
        transition: border-color 0.25s;
        color: #ff8080;
    }

    .link:hover {
        border-color: #ff646497;
        color: #ff6464;
    }

    .link:focus,
    .link:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
    }

    .button {
        margin-top: 40px;
    }

</style>
