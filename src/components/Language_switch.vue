<template>
    <div class="content">
        <button><p>Lang: {{ lang }}</p></button>
    </div>
</template>

<script>
    export default {
        props: [
            'lang'
        ]
    }
</script>

<style scoped>
    .content {
        background-color: #00000023;
        color: #fff;
        border-bottom-left-radius: 8px;
    }

    .content::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backdrop-filter: blur(15px);
        opacity: 0.8;
        z-index: -1;
        background-color: #00000023;
        border-bottom-left-radius: 8px;
    }

    button {
        color: #fff;
        transition: ease-out .2s;
        background: none;
        border-radius: 0;
        border: none;
        border-bottom-left-radius: 8px;
        border-bottom: solid #ffffffde 1px;
        border-left: solid #ffffffde 1px;
    }

    button:hover {
        border: none;
        border-bottom: solid #ffffffde 1px;
        border-left: solid #ffffffde 1px;
    }

    button:hover {
        background-color: #ffffff2e;
    }

    p {
        transition: ease-out .2s;
        margin: 0;
        height: fit-content;
        width: fit-content;
        top: 0;
    }

    button:hover p {
        transform: translateY(-4px);
    }
</style>
