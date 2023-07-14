<template>
    <div class="content">
        <div class="background"></div>
        <h1 class="title">Find LyphDraw on social medias!</h1>
        <div class="links">

            <div class="card">
                <div class="card-bg"></div>

                <div class="card-content">
                    <img src="https://github.com/eiiko6/LyphDraw-portfolio/blob/assets/icons8-instagram-384.png?raw=true" alt="insta">
                    <h2>Instagram</h2>
                    <p>LyphDraw has been active on Instagram since December 2022.</p>
                    <div class="button"><a class="link" href="https://www.instagram.com/lyph_draw/" target="_blank">Go to Instagram</a></div>
                </div>
            </div>

            <div class="card">
                <div class="card-bg"></div>

                <div class="card-content">
                    <img src="https://github.com/eiiko6/LyphDraw-portfolio/blob/assets/icons8-twitch-384.png?raw=true" alt="twitch">
                    <h2>Twitch</h2>
                    <p>LyphDraw streams his drawing process from time to time.</p>
                    <div class="button"><a class="link" href="https://www.twitch.tv/evan27draw" target="_blank">Go to Twitch</a></div>
                </div>
            </div>

            <div class="footer"></div>

        </div>
    </div>
</template>

<script>

</script>

<style scoped>

    .content {
        margin: auto;
        padding: 0;
        top:0px;
        right:0px;
        bottom:0px;
        left:0px;
        text-align: center;
    }
    .footer {
        top: 0;
        left: 0;
        margin: 0;
        height: 50px;
        width: 100%;
    }

    .links {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80vh;
        flex-wrap: wrap;
        margin-top: 50px;
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

    .card {
        position: relative;
        width: 250px;
        height: 350px;
        border: 2px solid #ffffff80;
        border-radius: 15px;
        margin: 20px;
        align-self: flex-start;
    }

    .card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backdrop-filter: blur(12px);
        opacity: 0.8;
        z-index: -1;
        background-color: #00000023;
    }

    .card-bg {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .card-content {
        position: relative;
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

    img {
        height: 150px;
        opacity: 0.7;
    }

    .title {
        margin-left: 30px;
        margin-right: 30px;
    }

</style>
