import React, { Component } from 'react'


export class Insurance extends Component {
    state = {
        response: '',
        name: '',
        email: '',
        password: '',
        responseToPost: '',
    };

    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/Auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password: this.state.password, email: this.state.email, name: this.state.name }),
        });
        const body = await response.text();
        this.setState({ responseToPost: body });
    };


    // document.getElementById('.img-btn').addEventListener('click', function()
    // 	{
    // 		document.getElementById('.cont').classList.toggle('s-signup')
    // 	}
    // );

    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col-md-4 py-5 bg-primary text-white text-center ">
                        <div className="card-body">
                            <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" style={{ width: '30%' }} />
                            <h2 className="py-3">New Insurance</h2>
                        </div>
                    </div>
                    <div className="col-md-8 py-5 border">
                        <h4 className="pb-4">Please fill with your details</h4>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input id="Full Name" name="Full Name" placeholder="Social Number" className="form-control" type="text" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input id="Full Name" name="Full Name" placeholder="First Name" className="form-control" type="text" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email address" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input id="Mobile No." name="Mobile No." placeholder="Mobile No." className="form-control" required="required" type="text" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Insurance Amount" />
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Previous insurance number" />
                                </div>
                                <div className="form-group col-md-12">
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Previous insurance id" />
                                </div>
                                <div className="form-group col-md-12">
                                    <select id="inputState" class="form-control">
                                        <option selected>Previous insurance company</option>
                                        <option> New Buyer</option>
                                        <option> Auction</option>
                                        <option> Complaint</option>
                                        <option> Feedback</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-12">
                                    <textarea id="comment" name="comment" cols="40" placeholder="Comment" rows="5" className="form-control"></textarea>
                                </div>
                            </div>

                            <div className="form-row">
                                <button type="button" className="btn btn-danger col-md-12">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
// document.getElementById('.img-btn').addEventListener('click', function()
// 	{
// 		document.getElementById('.cont').classList.toggle('s-signup')
// 	}
// );

export default Insurance
