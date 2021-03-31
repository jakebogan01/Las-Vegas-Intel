<template>
    <Nav :login="login" />
    <section class="destinations">
        <!-- <img id="background" src="@/assets/images/svg/destination_background.svg" role="presentation" loading="eager"> -->
        <main class="accordion">
            <h2>Resort Vacation Award Destinations</h2>
            <vue-collapsible-panel-group accordion>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        USA Vacation Locations - 4 Days / 3 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Atlanta</h3>
                            <img src="@/assets/images/jpg/vaca_1.jpg" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Atlantic City</h3>
                            <img src="@/assets/images/png/vaca_2.png" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Branson</h3>
                            <img src="@/assets/images/jpg/vaca_3.jpg" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Chicago</h3>
                            <img src="@/assets/images/jpg/vaca_4.jpg" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Daytona Beach</h3>
                            <img src="@/assets/images/jpg/vaca_5.jpg" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Gatlinburg</h3>
                            <img src="@/assets/images/jpg/vaca_6.jpg" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Las Vegas</h3>
                            <img src="@/assets/images/jpg/vaca_7.jpg" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Miami</h3>
                            <img src="@/assets/images/png/vaca_8.png" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Myrtle Beach</h3>
                            <img src="@/assets/images/jpg/vaca_9.jpg" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>New Orleans</h3>
                            <img src="@/assets/images/png/vaca_10.png" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Orlando</h3>
                            <img src="@/assets/images/jpg/vaca_11.jpg" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Phoenix</h3>
                            <img src="@/assets/images/png/vaca_12.png" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>San Antonio</h3>
                            <img src="@/assets/images/png/vaca_13.png" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>San Diego</h3>
                            <img src="@/assets/images/png/vaca_14.png" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Williamsburg</h3>
                            <img src="@/assets/images/png/vaca_15.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Hawaii Vacation Locations 6 Days/5 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Waikiki</h3>
                            <img src="@/assets/images/png/vaca_16.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Argentina Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Buenos Aires</h3>
                            <img src="@/assets/images/png/vaca_17.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Australia Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Brisbane</h3>
                            <img src="@/assets/images/png/vaca_18.png" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Gold Coast</h3>
                            <img src="@/assets/images/png/vaca_19.png" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Melbourne</h3>
                            <img src="@/assets/images/png/vaca_20.png" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Sydney</h3>
                            <img src="@/assets/images/png/vaca_21.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Austria Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Vienna</h3>
                            <img src="@/assets/images/png/vaca_22.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Brazil Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Rio De Janiero</h3>
                            <img src="@/assets/images/png/vaca_23.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Canada Vacation Locations 4 Days/3 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Toronto</h3>
                            <img src="@/assets/images/png/vaca_24.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Columbia Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Cartagena</h3>
                            <img src="@/assets/images/png/vaca_25.png" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Medellin</h3>
                            <img src="@/assets/images/png/vaca_26.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Dominican Republic Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Punta Cana</h3>
                            <img src="@/assets/images/png/vaca_27.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Fiji Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Denarau</h3>
                            <img src="@/assets/images/jpg/vaca_28.jpg" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Korotogo</h3>
                            <img src="@/assets/images/jpg/vaca_29.jpg" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        France Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Paris</h3>
                            <img src="@/assets/images/png/vaca_30.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Greece Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Athens</h3>
                            <img src="@/assets/images/png/vaca_31.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Hungary Vaction Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Budapest</h3>
                            <img src="@/assets/images/png/vaca_32.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        India Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Goa</h3>
                            <img src="@/assets/images/png/vaca_33.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Indonesia Vacation Locations 8 Days/7 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Bali</h3>
                            <img src="@/assets/images/png/vaca_34.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Israel Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Jerusalem</h3>
                            <img src="@/assets/images/png/vaca_35.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Italy Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Rome</h3>
                            <img src="@/assets/images/png/vaca_36.png" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Venice</h3>
                            <img src="@/assets/images/png/vaca_37.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Mexico Vacation Locations 6 Days/5 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Cancun</h3>
                            <img src="@/assets/images/jpg/vaca_38.jpg" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Mazatlan</h3>
                            <img src="@/assets/images/jpg/vaca_39.jpg" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Puerto Vallarta</h3>
                            <img src="@/assets/images/png/vaca_40.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        New Zealand Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Queenstown</h3>
                            <img src="@/assets/images/png/vaca_41.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Phillipines Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Boracay</h3>
                            <img src="@/assets/images/png/vaca_42.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Russia Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Moscow</h3>
                            <img src="@/assets/images/png/vaca_43.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        South Africa Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Cape Town</h3>
                            <img src="@/assets/images/png/vaca_44.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Spain Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Barcelona</h3>
                            <img src="@/assets/images/png/vaca_45.png" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Tenerife</h3>
                            <img src="@/assets/images/png/vaca_46.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Sweden Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Stockholm</h3>
                            <img src="@/assets/images/png/vaca_47.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Thailand Vacation Locations 8 Days / 7 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Bangkok</h3>
                            <img src="@/assets/images/png/vaca_48.png" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Koh Samui</h3>
                            <img src="@/assets/images/jpg/vaca_49.jpg" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Phuket</h3>
                            <img src="@/assets/images/jpg/vaca_50.jpg" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Turkey Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Bodrum</h3>
                            <img src="@/assets/images/png/vaca_51.png" alt="" loading="lazy">
                        </div>
                        <div class="vaca">
                            <h3>Istanbul</h3>
                            <img src="@/assets/images/png/vaca_52.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        United Arab Emirates 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Dubai</h3>
                            <img src="@/assets/images/png/vaca_53.png" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
                <vue-collapsible-panel :expanded="true">
                    <template #title>
                        Vanuatu Vacation Locations 5 Days/4 Nights
                    </template>
                    <template #content>
                        <div class="vaca">
                            <h3>Vanuatu</h3>
                            <img src="@/assets/images/jpg/vaca_54.jpg" alt="" loading="lazy">
                        </div>
                    </template>
                </vue-collapsible-panel>
            </vue-collapsible-panel-group>
        </main>
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

            const login = ref(false)

            return{login}
        }
    }
</script>