import React from "react";
import { Table } from "react-bootstrap";
import './detail.css';

function Detail(props) {
    const tracking = props.history;

    return(
        <React.Fragment>
            <div className="detail">
                <h1>Detail</h1>
                <Table>
                    <tbody>
                        <tr>
                            <td>Status : </td>
                            <td>{ props.status }</td>
                        </tr>
                        <tr>
                            <td>Pengirim :</td>
                            <td>{props.pengirim}</td>
                        </tr>
                        <tr>
                            <td>Penerima :</td>
                            <td>{props.penerima}</td>
                        </tr>
                    </tbody>
                </Table>
                
                <h2>History</h2>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Tanggal</th>
                        <th>Deskripsi</th>
                        <th>Lokasi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tracking.map((track, index) => 
                            <tr key={index}>
                                <td>{track.date}</td>
                                <td>{track.desc}</td>
                                <td>{track.location}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </React.Fragment>
    )
}

export default Detail;