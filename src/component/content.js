/* eslint-disable no-unused-vars */
import React from "react";
import '../component/content.css';
import { Form, Button } from "react-bootstrap";
import API_ENDPOINT from "../globals/api-endPoint";
import Detail from "./detail";

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            resi: [],
            jasa_kirim: [],
            status: [],
            penerima: [],
            pengirim: [],
            history: []
        }
    
        this.handleChangeResi = this.handleChangeResi.bind(this);
        this.handleChangeJasa = this.handleChangeJasa.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChangeResi(event){
        this.setState({resi: event.target.value})
    }
    
    handleChangeJasa(event){
        this.setState({jasa_kirim: event.target.value})
    }
    
    handleSubmit(event){
        const myResi = this.state.resi
        const myJasa = this.state.jasa_kirim
    
        fetch(API_ENDPOINT.TRACKING(myResi, myJasa))
        .then(response => response.json())
        .then(response => this.setState({ 
            penerima: response.data.detail.receiver,
            status: response.data.summary.status,
            pengirim: response.data.detail.shipper,
            history: response.data.history,
        }))
        event.preventDefault();
    }
    
    render(){

        const { status, pengirim, penerima, history } = this.state;
        console.log(history)

        return(
            <React.Fragment>
                <div className="container">
                    <div className="container-content">
                        <h2>Cek Resi</h2>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="nomorResi">Nomor Resi</Form.Label>
                                <Form.Control id="nomorResi" placeholder="Nomor Resi" value={this.state.resi} onChange={this.handleChangeResi} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="jasaKirim">Pilih Jasa Kirim</Form.Label>
                                <Form.Select id="jasaKirim" onChange={this.handleChangeJasa}>
                                    <option >Pilih Jasa Kirim</option>
                                    <option value="jne">JNE</option>
                                    <option value="pos">Pos Indonesia</option>
                                    <option value="jnt">JNT</option>
                                    <option value="sicepat">Si Cepat</option>
                                    <option value="tiki">Tiki</option>
                                    <option value="anteraja">AnterAja</option>
                                    <option value="wahana">Wahana</option>
                                    <option value="ninja">Ninja</option>
                                    <option value="lion">Lion</option>
                                    <option value="pcp">PCP Express</option>
                                    <option value="jet">JET Express</option>
                                    <option value="rex">REX Express</option>
                                    <option value="first">First Logistics</option>
                                    <option value="ide">ID Express</option>
                                    <option value="spx">Shopee Express</option>
                                    <option value="kgx">KGXpress</option>
                                    <option value="sap">SAP Express</option>
                                    <option value="jxe">JX Express</option>
                                    <option value="rpx">RPX</option>
                                </Form.Select>
                            </Form.Group>
                            <Button type="submit" value="Submit">Submit</Button>
                        </Form>
                    </div>

                    <Detail status={status} pengirim={pengirim} penerima ={penerima} history={history}/>
                </div>
            </React.Fragment>
        )
    }
}

export default Content;
