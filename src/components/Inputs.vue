<template>
    <body>
        <main>
            <div class="parent">
                <div class="c1">
                    <h1>Box 1</h1>
                </div>
                <div class="c2">
                    <h1>Box 2</h1>
                </div>
            </div>
        </main>
    </body>
</template>
<script>
export default {
    data() {
        return{
            in_Percent: false,
            rows: "",
            cols: "",
            img_width: "",
            img_height: "",
            checkedArray: [],
            imageArray: [
                "https://i.imgur.com/zyXQMZ8.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png",
                "https://upload.wikimedia.org/wikipedia/de/b/bb/Png-logo.png",
                "https://i.imgur.com/ZKMnXce.png",
                "https://thiscatdoesnotexist.com/"
                ],
        } 
    },
    methods: {

    }
}
</script>
    
<style scoped>
    .parent{
        position: absolute;

        top: 400px;
        background: turquoise;
        width: 400px;
        height: 400px;
    }
    .c1 { /* Canvas */
        position: absolute;

        background: red;
        width: 400px;
        height: 400px;
    }
    .c2 { /* Lable */
        position: relative;

        background: blue;
        width: 400px;
        height: 25px;
        
        top: 375px; /*canvas Element height - 25 oder so*/
    }
</style>