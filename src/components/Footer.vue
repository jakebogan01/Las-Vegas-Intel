<template>
    <section class="footer">
        <div class="footer_links flex flex_dr_c flex_ai_c flex_jc_c">
            <div class="one links">
                <h5>Website</h5>
                <ul>
                    <li><router-link :to="{name:'Pricing'}">Become A Member Today!</router-link></li>
                </ul>
            </div>
            <div class="two links">
                <h5>Search</h5>
                <ul>
                    <li><a href="#">Browse Catagories</a></li>
                    <li><a href="#">Browse Locations</a></li>
                </ul>
            </div>
            <div class="three links">
                <h5>Support</h5>
                <ul>
                    <li><router-link :to="{name:'Login',params:{msg}}">Password Retrieval</router-link></li>
                    <li><router-link :to="{name:'Contact'}">Contact Us</router-link></li>
                    <li><router-link :to="{name:'Privacy'}">Privacy Policy</router-link></li>
                    <li><router-link :to="{name:'Terms'}">Terms Of Use</router-link></li>
                </ul>
            </div>
        </div>
        <div class="footer_copyright">
            <span>© 2021 Las Vegas Intel All Rights Reserved. Terms of Use | Privacy Policy</span>
        </div>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'hello'
            }
        }
    }
</script>