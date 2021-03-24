<template>
<!--
header***
-->
    <header class="header">
        <nav class="header_nav flex flex_jc_sb flex_ai_c">
<!--
logo***
-->
            <a href="/" class="header_logo flex flex_ai_c">
                <img aria-label="Logo" src="@/assets/images/svg/logo.svg" loading="eager" alt="Logo">
            </a>
<!--
mobile menu icon***
-->
            <a href="#" ref="mobileToggle" @click="toggleOn" class="header_mobile_toggle">
                <span></span>
                <span></span>
                <span></span>
            </a>
<!--
nav links***
-->
            <div class="header_links">
                <ul class="flex">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Intel</a></li>
                    <li><a href="#">Benefits</a></li>
                    <li><a href="#">Rewards</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">More</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    import { ref } from 'vue'

    export default {
        setup(){
            
            const mobileToggle = ref(null)
            
            const toggleOn = ()=>{
                if(!mobileToggle.value.classList.contains('header_open')){
                    mobileToggle.value.classList.add('header_open')
                }else{
                    mobileToggle.value.classList.remove('header_open')
                }
            }

            return{toggleOn,mobileToggle}
        }
    }
</script>