import formActionTypes from './form.types';

export const updateFormDataStart = (formData) => ({
    type: formActionTypes.UPDATE_FORM_DATA_START,
    payload: formData
})

export const updateFormDataSuccess = (formData) => {
    console.log('action creator updateFormDataSuccess---')
    return {
        type: formActionTypes.UPDATE_FORM_DATA_SUCCESS,
        payload: formData
    }
}