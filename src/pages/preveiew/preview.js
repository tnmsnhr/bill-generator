import React from 'react'
import './preview.scss'
import { connect } from 'react-redux'

const Preview = (props) => {
    const { formData: { date, time, rate, amount, product, nozzleNo, recieptNo, localId } } = props?.data
    return (
        <div className='preview-container'>
            <h1>Preview</h1>
            <div className='preview'>
                <div className='company-info'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDE_1H-FP8ugyLFB89nglb2qmnP3vyLldZdckqsFNwpXAmxFlt" />
                    <p className='welcome'>Welcomes You</p>
                    <p>Madhu enterprices <br />kodihalli</p>
                    <p>bangalore, 560008</p>
                    <p>Tel . No. : 9448470200</p>
                </div>
                <div className='bill-details'>
                    <p>
                        <span className='property'>
                            <span>Receipt No.</span>
                            <span>:</span>
                        </span>
                        <span className='value'>{recieptNo}</span>
                    </p>

                    <p>
                        <span className='property'>
                            <span>Local ID</span>
                            <span>:</span>
                        </span>
                        <span className='value'>{localId}</span>
                    </p>

                    <p>
                        <span className='property'>
                            <span>FIP No. </span>
                            <span>:</span>
                        </span>
                        <span className='value'>{nozzleNo}</span>
                    </p>

                    <p>
                        <span className='property'>
                            <span>Nozzle No . </span>
                            <span>:</span>
                        </span>
                        <span className='value'>{nozzleNo}</span>
                    </p>

                    <p>
                        <span className='property'>
                            <span>Product </span>
                            <span>:</span>
                        </span>
                        <span className='value'>{product}</span>
                    </p>

                </div>
                <div>
                    <p>
                        <span className='property'>
                            <span>Preset Type</span>
                            <span>:</span>
                        </span>
                        <span className='value'>Preset Not Entered</span>
                    </p>
                    <p>
                        <span className='property'>
                            <span>Rate(Rs/L)</span>
                            <span>:</span>
                        </span>
                        <span className='value'>{rate}</span>

                    </p>
                    <p>
                        <span className='property'>
                            <span>Volume(L)</span>
                            <span>:</span>
                        </span>
                        <span className='value'>00006.00</span>
                    </p>
                    <p>
                        <span className='property'>
                            <span>Amount(Rs)</span>
                            <span>:</span>
                        </span>
                        <span className='value'>{amount}</span>
                    </p>
                    <p>
                        <span className='property'>
                            <span>Atot</span>
                            <span>:</span>
                        </span>
                        <span className='value'>000029837289.97</span>
                    </p>
                    <p>
                        <span className='property'>
                            <span>Vtot</span>
                            <span>:</span>
                        </span>
                        <span className='value'>0000037509.530</span>
                    </p>
                </div>

                <div className='vehicle-details'>
                    <p>
                        <span className='property'>
                            <span>Vehicle No</span>
                            <span>:</span>
                        </span>
                        <span className='value'>Not Entered</span>
                    </p>
                    <p>
                        <span className='property'>
                            <span>Mobile No</span>
                            <span>:</span>
                        </span>
                        <span className='value'>Not Entered</span>
                    </p>
                </div>

                <div className='date-time'>
                    <p>
                        <span className='property'>
                            <span>Date</span>
                            <span>:</span>
                        </span>
                        <span className='value'>{date}</span>
                    </p>
                    <p>
                        <span className='property'>
                            <span>Time</span>
                            <span>:</span>
                        </span>
                        <span className='value'>{time}</span>
                    </p>
                </div>

                <div className='gst-info'>
                    <p>
                        <span className='property'>
                            <span>CST No</span>
                            <span>:</span>
                        </span>
                        <span className='value'></span>
                    </p>
                    <p>
                        <span className='property'>
                            <span>LST No</span>
                            <span>:</span>
                        </span>
                        <span className='value'></span>
                    </p>
                    <p>
                        <span className='property'>
                            <span>VAT No</span>
                            <span>:</span>
                        </span>
                        <span className='value'>29AAYPM6493MIZD</span>
                    </p>
                    <p>
                        <span className='property'>
                            <span>ATTNDT ID</span>
                            <span>:</span>
                        </span>
                        <span className='value'>Not Available</span>
                    </p>
                    <p>
                        <span className='property'>
                            <span>FCC DATE</span>
                            <span>:</span>
                        </span>
                        <span className='value'>Not Available</span>
                    </p>
                    <p>
                        <span className='property'>
                            <span>FCC TIME</span>
                            <span>:</span>
                        </span>
                        <span className='value'>Not Available</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    data: state?.data
})

export default connect(mapStateToProps)(Preview)