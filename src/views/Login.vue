<template>
    <Nav :login="login" />
    <section ref="test" class="login flex flex_ai_c flex_jc_c">
        <div class="login_signup">
            <h2>Sign Up</h2>
            <p>Sign up with an account, and travel the world!</p>
            <form>
                <input type="text" name="name" placeholder="Name" required><br>
                <input type="text" name="email" placeholder="Email" required><br>
                <input type="password" name="password" placeholder="Password" required><br>
                <button class="submit">Submit</button>
            </form>
            <p class="login_info">Already a member? <span class="info">Login!</span></p>
        </div>
    </section>
    <Footer />
</template>

<script>
    import Nav from "@/components/Nav"
    import Footer from "@/components/Footer"
import { ref } from 'vue'

    export default {
        name: 'Login',
        components:{Nav,Footer},
        setup(props,context){
            
            const login = ref(true)
            const test = ref(null)

            document.body.addEventListener('scroll', function (ev) {
                if(document.body.scrollTop >= 80){
                    //scrolls down
                    login.value = false
                }else if(document.body.scrollTop <= 80){
                    //scrolls up
                    login.value = true
                }
            }, true)
            
            return{login,test}
        }
    }
</script>