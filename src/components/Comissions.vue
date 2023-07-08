<template>
    <div class="content">
        <div class="background"></div>
        <h1 class="title">You can comission LyphDraw <br> from the following platforms:</h1>
        <div class="links">

            <div></div>

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

    @media screen and (max-width: 730px) {
    .title {
      font-size: 40px;
    }
  }

</style>
