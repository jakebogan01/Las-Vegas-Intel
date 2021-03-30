<template>
    <Nav :showVideo="showVideo" :login="login" :home="home"/>
<!--
hero***
-->
    <section class="hero">
<!--
hero video***
-->
        <div class="hero_video flex flex_ai_c flex_jc_c">
            <video autoplay loop muted playsinline v-if="showVideo">
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
                    <button class="search_btn">Search</button>
                </form>
            </div>
        </div>
<!--
home info***
-->
        <main class="home_info flex flex_dr_c flex_ai_c flex_jc_c">
            <div class="home_info_left">
                <h3>Join For The Free Giveaways!<br>Stay For The Benefits & Impact The World</h3>
                <p>You will love our extraordinary giveaways! Every member receives a FREE Travel Award every year for complimentary luxury resort accommodations. Exclusive member benefits include travel, hospitality, dining, entertainment and retail discounts. Enjoy the world's best VIP programs. Discover great travel stories, rewards, offers, events and all the intel. Share your unique travel experiences. Stories are shared throughout our media and digital magazines. Help us impact Very Inspiring People's global causes. Sponsors support Giving Empire. Let's build the world's largest Giving Empire!</p>
            </div>
            <div class="home_info_right">
                <h3>Share Unique Stories & Brand Stories.<br>Make a Global Impact</h3>
                <p>The World's Travel Club and The Travel Intel is the ultimate travel online community. We connect consumers, influencers, brands, travel industry professionals and media on a global scope. Our publicity reach includes valuable incentives, compelling magazines, digital series shows, videos and global ad campaigns. Share your Brand Story and expand your digital footprint. We encourage others to discover new experiences and share their incredible stories. We invite all creators to share their unique stories through articles and media. Take advantage of World's Business Club and World's Marketing Club. Use the giveaways to grow your business and charity relations. Your support sponsors Generous Empire and our mission to give millions of dollars to worthy causes. This mutually beneficial relationship is a WIN, WIN, WIN!</p>
            </div>
        </main>
        <Footer />
    </section>
</template>

<script>
    import Nav from "@/components/Nav"
    import Footer from "@/components/Footer"
    import { onMounted, onUnmounted, ref } from 'vue'

    export default {
        name: 'Home',
        components:{Nav,Footer},
        setup(props,context){
            
            document.body.scrollTop

            const showVideo = ref(true)
            const login = ref(true)
            const home = ref(true)

            document.body.addEventListener('scroll', function (ev) {
                if(document.body.scrollTop >= 10){
                    //scrolls down
                    login.value = false
                }else if(document.body.scrollTop <= 10){
                    //scrolls up
                    login.value = true
                }
            }, true)

            const a = onMounted(()=>{
                window.addEventListener('resize', handleResize);
                handleResize();
            })

            const b = onUnmounted(()=>{
                window.removeEventListener('resize', handleResize)
            })

            const handleResize = ()=>{
                if(window.innerWidth <= 859){
                    showVideo.value = false
                }else{
                    showVideo.value = true
                }
            }

            return{login, home, handleResize, a, b, showVideo}
        }
    }
</script>