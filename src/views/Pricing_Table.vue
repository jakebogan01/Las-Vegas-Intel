<template>
    <Nav :login="login" />
    <section class="pricing">
        
    </section>
    <Footer />
</template>

<script>
    import Nav from "@/components/Nav"
    import Footer from "@/components/Footer"
    import { ref } from 'vue'

    export default {
        name: 'Contact',
        components: {Nav,Footer},
        setup(props,context){
            document.body.scrollTop

            const login = ref(true)

            document.body.addEventListener('scroll', function (ev) {
                if(document.body.scrollTop >= 10){
                    //scrolls down
                    login.value = false
                }else if(document.body.scrollTop <= 10){
                    //scrolls up
                    login.value = true
                }
            }, true)

            return{login}
        }
    }
</script>