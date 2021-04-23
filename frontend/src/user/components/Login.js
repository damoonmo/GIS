import React from 'react'

const Login = () => {
    return (
    <div className="page main-signin-wrapper">
        <div className="row signpages text-center">
            <div className="col-md-12">
            <div className="card">
                <div className="row row-sm">
                <div className="col-lg-6 col-xl-5 d-none d-lg-block text-center bg-primary details">
                    <div className="mt-5 pt-4 p-2 pos-absolute">
                    <img src="assets/img/brand/logo-light.png" className="header-brand-img mb-4" alt="logo" />
                    <div className="clearfix" />
                    <img src="assets/img/svgs/user.svg" className="ht-100 mb-0" alt="user" />
                    <h5 className="mt-4 text-white">حساب کاربری برای خود بسازید</h5>
                    <span className="tx-white-6 tx-13 mb-5 mt-xl-0">برای ایجاد ، کشف و ارتباط با جامعه جهانی ثبت نام کنید</span>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-7 col-xs-12 col-sm-12 login_form ">
                    <div className="container-fluid">
                    <div className="row row-sm">
                        <div className="card-body mt-2 mb-2">
                        <img src="assets/img/brand/logo.png" className=" d-lg-none header-brand-img text-left float-left mb-4" alt="logo" />
                        <div className="clearfix" />
                        <form>
                            <h5 className="text-right mb-4">به حساب خود وارد شوید</h5>

                            <div className="form-group text-right">
                            <label>نام کاربری</label>
                            <input className="form-control" placeholder="ایمیل خود را وارد کنید" type="text" />
                            </div>
                            <div className="form-group text-right">
                            <label>کلمه عبور</label>
                            <input className="form-control" placeholder="رمز ورود خود را وارد کنید" type="password" />
                            </div>
                            <button className="btn ripple btn-main-primary btn-block">ورود</button>
                        </form>
                        <div className="text-right mt-5 ml-0">
                            <div className="mb-1"><a href="#">رمز عبور خود را فراموش کرده اید؟</a></div>
                            <div>حساب ندارید؟ <a href="#">اینجا ثبت نام کنید</a></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>


        
    )
}

export default Login
