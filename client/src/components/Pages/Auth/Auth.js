import React, { Component } from 'react'


export class Auth extends Component {
    state = {
        response: '',
        name: '',
        email: '',
        password: '',
        responseToPost: '',
    };
    //   componentDidMount() {
    //     this.callApi()
    //       .then(res => this.setState({ response: res.express }))
    //       .catch(err => console.log(err));
    //   }
    //   callApi = async () => {
    //     const response = await fetch('/Auth');
    //     const body = await response.json();
    //     if (response.status !== 200) throw Error(body.message);
    //     return body;
    //   };
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
            <div className="container" style={{ marginTop: '10%' }}>
                <div className="row">
                    <div className="col-md-4 py-5 bg-primary">
                        <div className="card-body">
                            <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" style={{ width: '30%' }} />
                            <h2 className="py-3">Login</h2>
                        </div>
                    </div>
                    <div className="col-md-8 py-5 border">
                        <h4 className="pb-4">Please fill with your details</h4>
                        <form>

                            <div className="form-group col-md-12">
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email Adress" />
                            </div>
                            <div className="form-group col-md-12">
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Password" />
                            </div>


                            <div className="form-row">
                                <button type="button" className="btn btn-primary col-md-12">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}
// document.getElementById('.img-btn').addEventListener('click', function()
// 	{
// 		document.getElementById('.cont').classList.toggle('s-signup')
// 	}
// );

export default Auth
