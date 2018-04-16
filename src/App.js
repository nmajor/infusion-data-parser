import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infusion_xid: '',
      infusion_type: '',
      infusion_name: '',
      ProductId: '',
      PayTotal_A: '',
      PlanCount_A: '',
    };
    console.log('build');

    this.parseHtml = this.parseHtml.bind(this);
  }
  parseHtml(evt) {
    const value = evt.target.value
    const infusion_xid = $($.parseHTML(value)).find("[name='infusion_xid']")[0].value;
    const infusion_type = $($.parseHTML(value)).find("[name='infusion_type']")[0].value;
    const infusion_name = $($.parseHTML(value)).find("[name='infusion_name']")[0].value;
    const ProductId = $($.parseHTML(value)).find("[name='ProductId']")[0].value;
    const PayTotal_A = $($.parseHTML(value)).find("[name='PayTotal_A']")[0].value;
    const PlanCount_A = $($.parseHTML(value)).find("[name='PlanCount_A']")[0].value;
    const key = $($.parseHTML(value)).find("[name='key']")[0].value;

    const rx = /formId=(.*)"/;
    const arr = rx.exec(value);
    let formId = '';
    if (arr) {
      formId = arr[1];
    }

    this.setState({
      infusion_xid,
      infusion_type,
      infusion_name,
      ProductId,
      PayTotal_A,
      PlanCount_A,
      key,
      formId,
    });
  }
  renderInputHtml() {
    const {
      infusion_xid,
      infusion_type,
      infusion_name,
      ProductId,
      PayTotal_A,
      PlanCount_A,
      key,
    } = this.state;

    if (!infusion_xid) return;

    return [
      `<input value="${infusion_xid}" type="hidden" name="infusion_xid" id="infusion_xid">`,
      <br />,
      `<input value="${infusion_type}" type="hidden" name="infusion_type" id="infusion_type">`,
      <br />,
      `<input value="${infusion_name}" type="hidden" name="infusion_name" id="infusion_name">`,
      <br />,
      `<input type="hidden" name="CAttempt" id="CAttempt">`,
      <br />,
      `<input value="true" type="hidden" name="NotLegacy" id="NotLegacy">`,
      <br />,
      `<input value="${ProductId}" type="hidden" name="ProductId" id="ProductId">`,
      <br />,
      `<input value="${PayTotal_A}" type="hidden" name="PayTotal_A" id="PayTotal_A">`,
      <br />,
      `<input value="${PayTotal_A}" type="hidden" name="baseTotal" id="baseTotal">`,
      <br />,
      `<input value="${PlanCount_A}" type="hidden" name="PlanCount_A" id="PlanCount_A">`,
      <br />,
      `<input value="${key}" type="hidden" name="key" id="key">`,
    ];
  }
  renderFormId() {
    const { formId } = this.state;

    if (formId) {
      return (
        <div>
          <br />
          <br />
          <br />
          var FORM_ID = {formId}
        </div>
      );
    }
  }
  renderValues() {
    if (!this.state.infusion_xid) return null;

    return (<div>
      <div style={{ textAlign: 'left' }}>
        <h3>Hidden Attributes</h3>
        <p>Replace the section that says: "CHANGE THESE FIELDS BELOW" with this code:</p>
        {this.renderInputHtml()}
      </div>
      <div style={{ textAlign: 'left' }}>
        <h3>Form ID</h3>
        <p>Find the comment that says "CHANGE FORM ID" and replace the FORM_ID value with this:</p>
        {this.renderFormId()}
      </div>
    </div>);
  }
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h3>Paste in the whole page html:</h3>
            <textarea onChange={this.parseHtml} />
            {this.renderValues()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
