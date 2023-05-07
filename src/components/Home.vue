<template>
    <div class="content">
        <div class="background"></div>
        <h1>This is the homepage.</h1>
        <p>We can add a bio and a huge banner here.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nobis consequatur deleniti obcaecati, laborum ullam laboriosam eaque quae corporis cupiditate sunt expedita dolorem optio debitis officiis at et provident repudiandae error. Molestias ipsam quo dolorem perspiciatis esse, incidunt voluptatum ducimus alias repellat autem modi nostrum quis aut. Doloremque inventore laboriosam consectetur repellendus accusamus dolorum distinctio a fuga sit itaque, animi repellat nostrum, voluptatibus quis cupiditate non nesciunt quisquam tempore praesentium maiores? Vel harum, delectus ab voluptas natus nobis, aliquam rerum necessitatibus saepe molestiae dolorum molestias. Consectetur asperiores aspernatur corrupti delectus, dolorum sed numquam repellendus cum deserunt, sequi voluptates, nam qui.</p>
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

</style>
