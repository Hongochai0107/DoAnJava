import React from "react";

const InfoPayment =() => (
<section className="section-content padding-y">
<div className="container" style={{width:"780px"}}>

<div className="card mb-4">
      <div className="card-body">
      <h4 className="card-title mb-3">Delivery info</h4>

	  <div className="form-row">
			<div className="form-group col-sm-6">
				<label className="js-check box active">
					<input type="radio" name="dostavka" value="option1" checked/>
					<h6 className="title">Standart delivery</h6>
					<p className="text-muted">Free by airline within 20 days</p>
				</label> 
			</div>
			<div className="form-group col-sm-6">
				<label className="js-check box">
					<input type="radio" name="dostavka" value="option1"/>
					<h6 className="title">Fast delivery</h6>
					<p className="text-muted">Extra 20$ will be charged </p>
				</label>
			</div>
		</div> 

	<div className="form-row">
		<div className="col form-group">
			<label>First name</label>
		  	<input type="text" className="form-control" placeholder=""/>
		</div> 
		<div className="col form-group">
			<label>Last name</label>
		  	<input type="text" className="form-control" placeholder=""/>
		</div> 
	</div> 

	<div className="form-row">
		<div className="col form-group">
			<label>Email</label>
		  	<input type="email" className="form-control" placeholder=""/>
		</div> 
		<div className="col form-group">
			<label>Phone</label>
		  	<input type="text" className="form-control" placeholder=""/>
		</div> 
	</div> 

	<div className="form-row">
		<div className="form-group col-md-6">
		  <label>Country</label>
		  <select id="inputState" className="form-control">
		    <option> Choose...</option>
		      <option>Uzbekistan</option>
		      <option>Russia</option>
		      <option selected="">United States</option>
		      <option>India</option>
		      <option>Afganistan</option>
		  </select>
		</div>
		<div className="form-group col-md-6">
		  <label>City</label>
		  <input type="text" className="form-control"/>
		</div> 
	</div>
	<div className="form-group">
		<label>Adress</label>
       <textarea className="form-control" rows="2"></textarea>
    </div> 

      </div> 
    </div>  


		<div className="card mb-4">
      <div className="card-body">
      <h4 className="card-title mb-4">Payment</h4>
      <form  style={{width:"380px"}}>
			<div className="form-group">
			<label htmlFor="username">Name on card</label>
			<input type="text" className="form-control" name="username" placeholder="Ex. John Smith" required=""/>
			</div> 

			<div className="form-group">
			<label htmlFor="cardNumber">Card number</label>
			<div className="input-group">
				<input type="text" className="form-control" name="cardNumber" placeholder=""/>
				<div className="input-group-append">
					<span className="input-group-text">
						<i className="fab fa-cc-visa"></i> &nbsp; <i className="fab fa-cc-amex"></i> &nbsp; 
						<i className="fab fa-cc-mastercard"></i> 
					</span>
				</div>
			</div> 
			</div> 

			<div className="row">
				<div className="col-md flex-grow-0">
					<div className="form-group">
						<label className="hidden-xs">Expiration</label>
						<div className="form-inline" style={{width:"220px"}}>
							<select className="form-control" style={{width:"100px"}}>
								<option>MM</option>
								<option>01 - Janiary</option>
								<option>02 - February</option>
								<option>03 - February</option>
							</select>
							<span style={{width:"20px"}} ></span>
							<select className="form-control" style={{width:"100px"}}>
								<option>YY</option>
								<option>2018</option>
								<option>2019</option>
							</select>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="form-group">
						<label data-toggle="tooltip" title="3 digits code on back side of the card">CVV <i className="fa fa-question-circle"></i></label>
						<input className="form-control" required="" type="text"/>
					</div> 
				</div>
			</div>
			<button className="subscribe btn btn-primary btn-block" type="button"> Confirm  </button>
		</form>
      </div> 
    </div> 




</div> 
</section>
);

export default InfoPayment