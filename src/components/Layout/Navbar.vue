<template>
    <!--
    <div class="navbar">
        <img src="https://i.imgur.com/ZiYgxSU.jpg" class="logo">
        <strong>Malte Gutwald</strong>
        <router-link to="/">Über mich</router-link>
        <router-link to="/skills">Fähigkeiten</router-link>
    </div>
    -->
    <div>
        <ul>
            <li><img src="https://i.imgur.com/ZiYgxSU.jpg" class="logo"></li>
            <li><router-link to="/"><b>Über mich</b></router-link></li>
            <li><router-link to="/skills"><b>Fähigkeiten</b></router-link></li>
        </ul> 
    </div>        
   
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
    ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #3e6e03;
    }
    li router-link {
        display: inline;
        background-color: #3e6e03;
    }
    li {
        float: left;
    }
    li a {
        display: block;
        width: 120px;
        height: 100px;
    }
    li b:hover {
        color: #000;
    }
    li a:hover {
        color: #000;
    }
    b{
        color: #fff;
        font-size: 20px;
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .c{
        padding-top: 1.5rem;
        float: right;

        
    }
    .logo {
        padding-top: 5px;
        padding-left: 5px;
        padding-right: 5px;
        padding-bottom: 5px;

        border-radius: 22%;
        height: 100px;
    }
</style>