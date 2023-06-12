import formActionTypes from './form.types';

const INITIAL_STATE = {
    formData: {},
    error: null
}

const formReducer = (state = INITIAL_STATE, action) => {
    console.log('reducer-called', action.type, state)

    switch (action.type) {

        case formActionTypes.UPDATE_FORM_DATA_SUCCESS:
            return {
                ...state,
                formData: action.payload,
                error: null
            }

        default:
            return state;
    }
}

export default formReducer;