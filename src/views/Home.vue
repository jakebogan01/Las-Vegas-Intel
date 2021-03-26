<template>
    <Nav />
<!--
hero***
-->
    <section class="hero">
<!--
hero video***
-->
        <div class="hero_video flex flex_ai_c flex_jc_c">
            <video autoplay loop muted playsinline>
                <source src="@/assets/videos/mp4/las_vegas_video.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
            </video>
<!--
hero title***
-->
        <div class="hero_title">
            <div class="style_1">
                <img src="@/assets/images/svg/title_style_1.svg" alt="">
            </div>
            <div class="style_2">
                <img src="@/assets/images/svg/title_style_2.svg" alt="">
            </div>
            <h1>Meanwhile, In Vegas...</h1>
        </div>
<!--
hero border***
-->
            <div class="hero_border"></div>
        </div>
<!--
hero search***
-->
        <div class="hero_search">
            <div class="search_title">
                <h2>Travel More, But Where To?</h2>
            </div>
            <div class="search_form">
                <form class="flex flex_dr_c flex_ai_c flex_jc_c">
                    <div class="input one">
                        <input type="text" placeholder="Near You">
                        <button><div class="background"></div><i class="fas fa-search"></i></button>
                    </div>
                    <div class="input two">
                        <input type="text" placeholder="Zip Code">
                        <button><div class="background"></div><i class="fas fa-globe-americas"></i></button>
                    </div>
                    <button class="search_btn">Search<div class="background"></div></button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    import Nav from "@/components/Nav"

    export default {
        name: 'Home',
        components:{Nav},
        setup(){
            console.log('%c Hey guys, like what you see?', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
        }
    }
</script>