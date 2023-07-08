<template>
    <div class="content" id="content">
        <h2>Warning: this website is a work in progress. Most of it is temporary.</h2>
        <button class="close" onclick="this.parentElement.style.display='none';">X</button>
    </div>
</template>

<style scoped>
    .content {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: #ff6464;
    }

    h2 {
        margin-left: 100px;
    }

    button {
        background-color: transparent;
        border: solid #ffffffde 2px;
        position: absolute;
        margin-left: 25px;
        top: 18%;
        height: 50px;
        width: 50px;
        transition: .2s ease-out;
    }

    button:hover {
        border: solid #ffffff3f 2px;
    }
</style >

<script>

</script>