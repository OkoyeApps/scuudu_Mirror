import React from 'react'
import OculusSm from '../../assets/images/OculusHeadset-sm.png'

function SignUpSection() {
    return (
        <section class="row mx-0 last-1">
            <div class="col-md-4 d-flex justify-content-center align-items-center">
                <div class="">
                    <img src={OculusSm} />
                </div>
            </div>
            <div class="col-md-4 d-flex justify-content-center align-items-center">
                <h2 class="titles" style={{ color: "black" }}>Let's stay<br /> in touch</h2>
            </div>
            <div class="col-md-4 d-flex justify-content-center align-items-center">
                <div>
                    <p>Sign up for smiles in your inbox: tips on oral care, plastic-free living plus new products, and
                        giveaways. </p>
                    <form class="inline-form pt-4">
                        <input type="email" placeholder="Email" class="subscriber-email mr-3" />
                        <button class="sub-btn">Subscribe</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUpSection
