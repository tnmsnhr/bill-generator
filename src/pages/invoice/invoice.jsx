import React, { useCallback, useState } from 'react'
import './invoice.scss'
import { debounce } from '../../utils/debounce'
import { connect } from 'react-redux'
import { updateFormDataStart } from '../../redux/form/form.actions'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const Invoice = (props) => {
    const [formData, setFormData] = useState({})

    console.log('formData----', formData)

    const printHandler = e => {
        e.preventDefault()
        const documentToPrint = document.querySelector('.preview')
        html2canvas(documentToPrint, { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {
            const imageWidth = 300
            const imageHeight = canvas.height * imageWidth / canvas.width
            const imageData = canvas?.toDataURL('image/png')
            const pdf = jsPDF({
                orientation: 'portrait',
                unit: 'pt',
                format: [imageHeight, imageWidth]
            })
            pdf.addImage(imageData, 'PNG', 0, 0, imageWidth, imageHeight)
            pdf.save('prank.pdf')
        })

    }

    const submitHandler = (e) => {
        e?.preventDefault()
        console.log(e?.target?.elements, e?.target?.date?.value)
    }

    const onChangeValue = (e) => {
        const updateFormData = { ...formData }
        const { name, value } = e?.target
        updateFormData[name] = value
        console.log('after onchange', updateFormData)
        props?.onValueChange(updateFormData)
        setFormData(updateFormData)
    }

    return (
        <div className='invoice'>
            <form className='invoice-form' onSubmit={submitHandler}>
                <div className='form-group'>
                    <div className='form-control'>
                        <label>Date</label>
                        <input name="date" onChange={onChangeValue} />
                    </div>
                    <div className='form-control'>
                        <label>Time</label>
                        <input name="time" onChange={onChangeValue} />
                    </div>
                    <div className='form-control'>
                        <label>Rate</label>
                        <input name="rate" onChange={onChangeValue} />
                    </div>
                    <div className='form-control'>
                        <label>Amount</label>
                        <input name="amount" onChange={onChangeValue} />
                    </div>
                </div>
                <div className='form-group'>
                    <div className='form-control'>
                        <label>Product</label>
                        <input name="product" onChange={onChangeValue} />
                    </div>
                    <div className='form-control'>
                        <label>Nozzle No.</label>
                        <input name="nozzleNo" onChange={onChangeValue} />
                    </div>
                </div>

                <div className='form-group'>
                    <div className='form-control'>
                        <label>Receipt No.</label>
                        <input name="receiptNo" onChange={onChangeValue} />
                    </div>
                    <div className='form-control'>
                        <label>Local ID</label>
                        <input name="localId" onChange={onChangeValue} />
                    </div>
                </div>

                <div className='form-group-btn'>
                    <button className='btn btn-primary'>Submit</button>
                    <button className='btn btn-dark' onClick={printHandler}>Print</button>
                    <a className='btn btn-dark' id='download' onClick={printHandler}>Download</a>                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    form: state?.data
})

const mapDispatchToProps = dispatch => ({
    onValueChange: data => dispatch(updateFormDataStart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Invoice)