import React from 'react'

export const Payment = () => {
    return (
        <>
            <div class="container-payment">
                <div class=" my-2 media-center">
                    <div class="row">
                        <div class="margin-reserv">
                            <a href="/" class="text-decoration-none href">
                                <i class="reserv-back fa-solid fa-chevron-left"></i>
                                <span class="span-reserv">Payment</span>
                            </a>
                        </div>
                    </div>
                </div>


                <div class=" my-2 media-center">
                    <div class="row">
                        <div class="col-xl-5">
                            <img src="../assets/images/vehicle-detail.png" alt="Bike" class="payment-img src mt-1" />
                        </div>
                        <div class="col-xl-7">
                            <h2><b>Fixie - Gray Only </b> </h2>
                            <h5 class="text-secondary"><b>Yogyakarta</b></h5><br />
                            <h5 class="text-danger"><b>No Prepayment</b></h5><br /><br />
                            <h4 class="code-payment">#FG1209878YZS</h4>
                            <buttton class="btn btn-copy btn-info fw-bold" type="button">Copy Booking Code</buttton>
                        </div>
                    </div>
                </div>

                <div class=" my-5 ">
                    <div class="row">
                        <div class="col-xl-5">
                            <form action="">
                                <fieldset disabled="disabled">
                                    <div>
                                        <input type="text" id="disabledTextInput"
                                            class="bg-transparent border-2 border-secondary form-control quantity-payment"
                                            placeholder="Quantity : 2 Bikes" />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div class="col-xl-7">
                            <form action="">
                                <fieldset disabled="disabled">
                                    <div>
                                        <input type="text" id="disabledTextInput"
                                            class="bg-transparent border-2 border-secondary form-control quantity-date"
                                            placeholder="Reservation Date    :     Jan 18 - 20 2021" />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                <div class=" my-5 ">
                    <div class="row">
                        <div class="col-xl-5">
                            <form action="">
                                <fieldset disabled="disabled">
                                    <div class="bg-transparent fw-bold border-2 border-secondary form-control quantity-detail">
                                        <label class="text-dark" for="">Order Details : </label><br />
                                        <label class="text-secondary pt-4" for="">1 Bike : Rp. 78.000</label><br />
                                        <label class="text-secondary pt-1" for="">1 Bike : Rp. 78.000</label><br />
                                        <label class="text-dark pt-5" for="">Total : Rp. 156.000 </label>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div class="col-xl-7">
                            <form action="">
                                <fieldset disabled="disabled">
                                    <div class="bg-transparent fw-bold border-2 border-secondary form-control quantity-identity">
                                        <label class="text-dark" for="">Identity : </label><br />
                                        <label class="text-secondary pt-4" for="">Samantha Doe (+6290987682)</label><br />
                                        <label class="text-secondary pt-1" for="">samanthadoe@mail.com</label><br />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>

                <div class=" my-5 ">
                    <div class="row">
                        <div class="d-grid col-xl-3 d-flex text-center">
                            <label class="label-payment" for=""><br />
                                <h2 class="fw-bold ">Payment Code : </h2>
                            </label>
                        </div>
                        <div class="col-xl my-2">
                            <div
                                class="d-grid bg-transparent position-relative  fw-bold border-2 border-secondary form-control quantity-code">
                                <label class=" text-dark" for="">#FG1209878YZS </label><br />
                                <buttton class="btn btn-copy-copy btn-info fw-bold" type="button">Copy
                                </buttton>
                            </div>
                        </div>
                        <div class="col-xl">
                            <div class="mb-3 d-grid">
                                <select class="form-select bg-transparent border-2 form-select-payment mx-9">
                                    <option class="d-none">Select Payment</option>
                                    <option value="Bekasi">Cash</option>
                                    <option value="Bandung">Transfer</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-xl-12 mt-5 mb-5">
                            <div class="d-grid gap-2">
                                <button class="btn-lg btn-pay-before btn-primary me-5" type="button">Pay before : 59:30</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment 