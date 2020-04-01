import React from 'react'

function SubscribeStrip() {
    return (
        <div>
            <section className="row mx-0 sub-strip">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <h2 className="small-titles">Let's stay in touch</h2>
                </div>
                <div className="col-md-6  d-flex justify-content-center align-items-center pr-6">
                    <div>
                        <p className="sub-text-strip">Sign up for smiles in your inbox: tips on oral care, plastic-free<br /> living plus new products, and giveaways.</p>

                        <form className="inline-form mt-4">
                            <input type="email" placeholder="Email" class="subscriber-email mr-3 sub-text-strip" />
                            <button class="sub-btn px-5 py-1">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SubscribeStrip
