<template>
    <div class="content">
        <div class="card">
            <a :href="file" target="_blank">
                <div class="card-bg" :style="'background-image: url(' + preview + ');'"></div>

                <div class="card-content">
                    <div class="popup">
                        <h2>Click to see</h2>
                    </div>

                    <div class="true-content">
                        <h2>{{ name }}</h2>
                        <p>{{ description }}</p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'name',
        'description',
        'date',
        'preview',
        'file'
    ]
}
</script>

<style scoped>

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
        background-size: cover;
        background-position: center;
        filter: brightness(0.3) blur(3px);
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
