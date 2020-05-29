import React from 'react'

function SubscribeStrip() {
    return (
        <div>
            <section className="row mx-0 sub-strip px-6">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <h2 className="small-titles">Let's stay in touch</h2>
                </div>
                <div className="col-md-6  d-flex justify-content-center align-items-center">
                    <div>
                        <p className="sub-text-strip">By subscribing to our newsletter, you will join the list of those who are first to get the latest
updates about our intriguing activities.</p>

                        <form className="inline-form">
                            <input type="email" placeholder="Email" class="subscriber-email mr-3 sub-text-strip" />
                            <button class="sub-btn py-1 mt-2">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SubscribeStrip
