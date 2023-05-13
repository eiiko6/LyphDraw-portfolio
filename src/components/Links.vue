<template>
    <div class="content">
        <div class="background"></div>
        <h1>This is the links page.</h1>
        <div class="links">
            <div class="insta-card">
                <div class="bg"></div>
                <a href="#"><img src="https://raw.githubusercontent.com/mxstoto6/LyphDraw-portfolio/20c534bbec8dbba2117de29574a99754b03cf0bb/icons8-insta.svg" alt="insta"></a>
            </div>
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
        max-width: 80%;
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
        position:absolute;
        filter: blur(4px) opacity(0.5);
    }

    .insta-card { /*very unstable !*/
        background-color: aliceblue;
        backdrop-filter: opacity(0.2);
    }

</style>
