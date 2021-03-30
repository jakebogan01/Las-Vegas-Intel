<template>
    <Nav :login="login" />
    <section class="contact flex flex_ai_c flex_jc_c">
        <div class="contact_form">
            <h2>Contact Us</h2>
            <p>Stay in touch, have a question or concern? Fill out the form below!</p>
            <form>
                <input type="text" name="name" placeholder="Name" required><br>
                <input type="text" name="email" placeholder="Email" required><br>
                <input type="tel" name="phone" placeholder="Phone Number" required><br>
                <textarea name="message" cols="30" rows="4" placeholder="Message" required></textarea><br>
                <button class="submit">Submit</button>
            </form>
        </div>
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