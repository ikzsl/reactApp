import React from 'react';

export default class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        acceptRules: false,
        address: '',
        city: '',
        country: '',
        email: '',
        password: '',
      };
    }
  
    handleChange = (e) => {
      const { target } = e;
      const value = target.name === 'acceptRules' ? e.target.checked : e.target.value;
      const { name } = target;
      this.setState({
        [name]: value,
      });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.setState({ view: 'table' });
    };
  
    handleViewTable = () => {
      this.setState({ view: 'table' });
    }
  
    handleViewForm = () => {
      this.setState({ view: 'form' });
    }
  
    render() {
      const {
        acceptRules,
        address,
        country,
        city,
        email,
        password,
      } = this.state;
      const form = (
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4" className="col-form-label">Email</label>
              <input type="email" name="email" className="form-control" id="inputEmail4" placeholder="Email" value={email} onChange={this.handleChange} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4" className="col-form-label">Password</label>
              <input type="password" name="password" className="form-control" id="inputPassword4" placeholder="Password" value={password} onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress" className="col-form-label">Address</label>
            <textarea type="text" className="form-control" name="address" id="inputAddress" placeholder="1234 Main St" value={address} onChange={this.handleChange} />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity" className="col-form-label">City</label>
              <input type="text" className="form-control" name="city" id="inputCity" value={city} onChange={this.handleChange} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputCountry" className="col-form-label">Country</label>
              <select id="inputCountry" name="country" className="form-control" value={country} onChange={this.handleChange}>
                <option>Choose</option>
                <option value="argentina">Argentina</option>
                <option value="russia">Russia</option>
                <option value="china">China</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <label className="form-check-label" htmlFor="rules">
                <input id="rules" type="checkbox" name="acceptRules" className="form-check-input" checked={acceptRules} onChange={this.handleChange} />
                Accept Rules
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
  
        </form>
      );
  
  
      const itemsFragment = Object.entries(this.state)
        .filter((item) => item[0] !== 'view')
        .map((item) => (
          <tr key={item[0]}>
            <td>{item[0]}</td>
            <td>{item[1].toString()}</td>
          </tr>
        ));
  
  
      const table = (
        <div>
          <button type="button" onClick={this.handleViewForm}>Back</button>
          <table className="table">
            <tbody>{itemsFragment}</tbody>
          </table>
        </div>
  
      );
  
      const { view } = this.state;
      return view === 'table' ? table : form;
    }
  }

// Hexlet  React - формы  Решение учителя

/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */

// import React from 'react';

// // BEGIN
// export default class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       form: {
//         email: '',
//         password: '',
//         city: '',
//         country: '',
//         address: '',
//         acceptRules: false,
//       },
//       submittingState: 'fillingForm',
//     };
//   }

//   handleChangeField = ({ target }) => {
//     const { form } = this.state;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     this.setState({ form: { ...form, [target.name]: value } });
//   }

//   handleBackToForm = () => {
//     this.setState({ submittingState: 'fillingForm' });
//   }

//   handleSubmitForm = () => {
//     this.setState({ submittingState: 'submitted' });
//   }

//   renderRow = (key) => {
//     const { form } = this.state;
//     return (
//       <tr key={key}>
//         <td>{key}</td>
//         <td>{form[key].toString()}</td>
//       </tr>
//     );
//   };

//   renderResult() {
//     const { form } = this.state;
//     const keys = Object.keys(form).sort();
//     return (
//       <div>
//         <button type="button" onClick={this.handleBackToForm}>Back</button>
//         <table key="fieldsValues" className="table">
//           <tbody>
//             {keys.map(this.renderRow)}
//           </tbody>
//         </table>
//       </div>
//     );
//   }

//   renderForm() {
//     const { form } = this.state;

//     return (
//       <form onSubmit={this.handleSubmitForm}>
//         <div className="form-row">
//           <div className="form-group col-md-6">
//             <label htmlFor="inputEmail4" className="col-form-label">Email</label>
//             <input
//               type="email"
//               name="email"
//               onChange={this.handleChangeField}
//               value={form.email}
//               className="form-control"
//               id="inputEmail4"
//               placeholder="Email"
//             />
//           </div>
//           <div className="form-group col-md-6">
//             <label htmlFor="inputPassword4" className="col-form-label">Password</label>
//             <input
//               type="password"
//               onChange={this.handleChangeField}
//               value={form.password}
//               name="password"
//               className="form-control"
//               id="inputPassword4"
//               placeholder="Password"
//             />
//           </div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="inputAddress" className="col-form-label">Address</label>
//           <textarea type="text" name="address" value={form.address} onChange={this.handleChangeField} className="form-control" id="inputAddress" placeholder="1234 Main St" />
//         </div>
//         <div className="form-row">
//           <div className="form-group col-md-6">
//             <label htmlFor="inputCity" className="col-form-label">City</label>
//             <input type="text" name="city" onChange={this.handleChangeField} value={form.city} className="form-control" id="inputCity" />
//           </div>
//           <div className="form-group col-md-6">
//             <label htmlFor="inputCountry" className="col-form-label">Country</label>
//             <select id="inputCountry" name="country" onChange={this.handleChangeField} className="form-control" value={form.country}>
//               <option>Choose</option>
//               <option value="argentina">Argentina</option>
//               <option value="russia">Russia</option>
//               <option value="china">China</option>
//             </select>
//           </div>
//         </div>
//         <div className="form-group">
//           <div className="form-check">
//             <label className="form-check-label" htmlFor="rules">
//               <input id="rules" name="acceptRules" className="form-check-input" onChange={this.handleChangeField} type="checkbox" checked={form.acceptRules} />
//               Accept Rules
//             </label>
//           </div>
//         </div>
//         <button type="submit" className="btn btn-primary">Sign in</button>
//       </form>
//     );
//   }

//   render() {
//     const { submittingState } = this.state;
//     switch (submittingState) {
//       case 'fillingForm':
//         return this.renderForm();
//       case 'submitted':
//         return this.renderResult();
//       default:
//         throw new Error(`'${submittingState}' - unknown state`);
//     }
//   }
// }