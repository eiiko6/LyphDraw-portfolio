<template>
    <div class="content">

        <div class="background"></div>

        <h1 class="title">Official artworks</h1>

        <div class="cards">

            <a href="#" class="card">
                <div class="card-bg"></div>

                <div class="card-content">
                    <div class="popup">
                    <h2>Click to see</h2>
                    </div>

                    <div class="true-content">
                        <h2>Artwork Title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, veniam.</p>
                    </div>
                </div>
            </a>

            <a href="#" class="card">
                <div class="card-bg"></div>

                <div class="card-content">
                    <div class="popup">
                    <h2>Click to see</h2>
                    </div>

                    <div class="true-content">
                        <h2>Artwork Title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, veniam.</p>
                    </div>
                </div>
            </a>

            <a href="#" class="card">
                <div class="card-bg"></div>

                <div class="card-content">
                    <div class="popup">
                    <h2>Click to see</h2>
                    </div>

                    <div class="true-content">
                        <h2>Artwork Title</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, veniam.</p>
                    </div>
                </div>
            </a>

            <div class="footer"></div>

        </div>

    </div>
</template>

<script>

</script>

<style scoped>

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

    .card:hover {
        transform: scale(1.01);
    }
    .card:hover .card-bg {
        transform: scale(1.2);
        filter: brightness(1) blur(0);
    }
    .card:hover .true-content {
        transition: .2s ease-out;
        opacity: 0;
    }

    .card:hover .popup {
        opacity: 1;
        transform: scale(2);
    }

    .card {
        position: relative;
        width: 400px;
        height: 500px;
        border: 2px solid #ffffff80;
        border-radius: 15px;
        margin: 20px;
        align-self: flex-start;
        overflow: hidden;
        font-size: 25px;
        transition: .2s ease-out;
    }

    .card-bg {
        transition: .2s ease-out;
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(./src/temp/artwork.png);
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        position:absolute;
        filter: brightness(0.3) blur(5px);
    }

    .card-content {
        position: relative;
        transition: .2s ease-out;
    }

    .card-content .true-content {
        margin-top: 15%;
    }

    .popup {
        margin-top: 55%;
        transition: .2s ease-out;
        opacity: 0;
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
    }

    .title {
        margin-left: 30px;
        margin-right: 30px;
    }

    h2 {
        margin: 0;
        margin-bottom: 15px;
    }

    p {
        margin: 0;
    }

</style>
