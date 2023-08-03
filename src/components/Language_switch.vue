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
    button {
        transition: ease-out .2s;
        background: none;
        color: #ffffffde;
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
        background-color: #ffffff1e;
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
