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
                <a href="#">Home</a>
                <div class="sub1">
                    <a class="sub_intel" href="#">Intel</a>
<!--
intel sub menu***
-->
                    <div class="intel_menu">
                        <a href="#">Foodie Intel</a>
                        <a href="#">Recommendations | Reviews</a>
                        <a href="#">Travel Intel</a>
                        <a href="#">Destination Intel</a>
                        <a href="#">Entertainment &#38; Music Intel</a>
                        <a href="#">Generous Intel | Generous Empire</a>
                        <a href="#">Cruise Intel</a>
                        <a href="#">Casinos Intel</a>
                        <a href="#">World's Intel | Business | Lifestyle | VIP</a>
                        <a href="#">World's Business Intel</a>
                    </div>
                </div>
                <div class="sub2">
                    <a class="sub_benefits" href="#">Benefits</a>
<!--
benefits sub menu***
-->
                    <div class="benefits_menu">
                        <a href="#">Complimentary Vacation Destinations</a>
                        <a href="#">Manage Your Complimentary Vacation</a>
                        <a href="#">Complimentary Vacation Terms &#38; Conditions</a>
                        <a href="#">Dining Club | Dining Advantage Offers</a>
                    </div>
                </div>
                <div class="sub3">
                    <a class="sub_more" href="#">More</a>
<!--
more sub menu***
-->
                    <div class="more_menu">
                        <a href="#">Member Plans &#38; Pricing</a>
                        <a href="#">Member Profiles</a>
                        <a href="#">Travel Intel Magazine</a>
                        <a href="#">Suncoast Magazine</a>
                        <a href="#">Stories</a>
                        <a href="#">World's Travel Agency</a>
                        <a href="#">Offers</a>
                        <a href="#">Giveaways</a>
                        <a href="#">Events</a>
                        <a href="#">Event Calendar</a>
                        <a href="#">Founders Card Membership</a>
                        <a href="#">Generous Vacations Printable Certificates</a>
                        <a href="#">Foodie Intel Media Kit</a>
                        <a href="#">Foodie Intel Media Kit Magazine</a>
                        <a href="#">Videos</a>
                        <a href="#">Photos</a>
                        <a href="#">Audio</a>
                    </div>
                </div>
                <a href="#">Rewards</a>
                <a href="#">Contact</a>
                <a href="#">Login</a>
            </div>
        </nav>
    </header>
<!--
mobile menu***
-->
    <div class="header_mobile_menu flex flex_dr_c flex_ai_c flex_jc_c" v-if="toggled_mobile_menu">
        <div class="container">
            <a href="#">Home</a>
            <a @click="intel" href="#">Intel</a>
<!--
intel mobile sub menu***
-->
            <div class="mobile_menu flex flex_dr_c flex_ai_c flex_jc_c" v-if="sub_intel">
                <div class="container">
                    <a @click="exit" href="#"><i class="fas fa-caret-left"></i> Back</a>
                    <a href="#">Foodie Intel</a>
                    <a href="#">Recommendations | Reviews</a>
                    <a href="#">Travel Intel</a>
                    <a href="#">Destination Intel</a>
                    <a href="#">Entertainment &#38; Music Intel</a>
                    <a href="#">Generous Intel | Generous Empire</a>
                    <a href="#">Cruise Intel</a>
                    <a href="#">Casinos Intel</a>
                    <a href="#">World's Intel | Business | Lifestyle | VIP</a>
                    <a href="#">World's Business Intel</a>
                </div>
            </div>
            <a @click="benefits" href="#">Benefits</a>
<!--
benefits mobile sub menu***
-->
            <div class="mobile_menu flex flex_dr_c flex_ai_c flex_jc_c" v-if="sub_benefits">
                <div class="container">
                    <a @click="exit" href="#"><i class="fas fa-caret-left"></i> Back</a>
                    <a href="#">Complimentary Vacation Destinations</a>
                    <a href="#">Manage Your Complimentary Vacation</a>
                    <a href="#">Complimentary Vacation Terms &#38; Conditions</a>
                    <a href="#">Dining Club | Dining Advantage Offers</a>
                </div>
            </div>
            <a @click="more" href="#">More</a>
<!--
more mobile sub menu***
-->
            <div class="mobile_menu flex flex_dr_c flex_ai_c flex_jc_c" v-if="sub_more">
                <div class="container">
                    <a @click="exit" href="#"><i class="fas fa-caret-left"></i> Back</a>
                    <a href="#">Member Plans &#38; Pricing</a>
                    <a href="#">Member Profiles</a>
                    <a href="#">Travel Intel Magazine</a>
                    <a href="#">Suncoast Magazine</a>
                    <a href="#">Stories</a>
                    <a href="#">World's Travel Agency</a>
                    <a href="#">Offers</a>
                    <a href="#">Giveaways</a>
                    <a href="#">Events</a>
                    <a href="#">Event Calendar</a>
                    <a href="#">Founders Card Membership</a>
                    <a href="#">Generous Vacations Printable Certificates</a>
                    <a href="#">Foodie Intel Media Kit</a>
                    <a href="#">Foodie Intel Media Kit Magazine</a>
                    <a href="#">Videos</a>
                    <a href="#">Photos</a>
                    <a href="#">Audio</a>
                </div>
            </div>
            <a href="#">Rewards</a>
            <a href="#">Contact</a>
            <a href="#">Login</a>
            <a @click="close" href="#"><i class="fas fa-times"></i> Exit</a>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue'

    export default {
        setup(){
            
            const toggled_mobile_menu = ref(false)
            const mobileToggle = ref(null)
            const sub_intel = ref(false)
            const sub_benefits = ref(false)
            const sub_more = ref(false)
            
            const toggleOn = ()=>{
                if(!mobileToggle.value.classList.contains('header_open')){
                    mobileToggle.value.classList.add('header_open')
                    toggled_mobile_menu.value = true
                }
            }

            const intel = ()=>{
                sub_intel.value = true
            }

            const benefits = ()=>{
                sub_benefits.value = true
            }

            const more = ()=>{
                sub_more.value = true
            }

            const exit = ()=>{
                sub_intel.value = false
                sub_benefits.value = false
                sub_more.value = false
            }

            const close = ()=>{
                toggled_mobile_menu.value = false
                mobileToggle.value.classList.remove('header_open')
            }

            return{toggleOn,mobileToggle,intel,sub_intel,exit,sub_benefits,benefits,more,sub_more,close,toggled_mobile_menu}
        }
    }
</script>