const INCREMENTAR = 'contador/incrementar'
const REDUZIR = 'contador/reduzir'

const initialState = 0

export const incrementar = () => ({type:INCREMENTAR})
export const reduzir = () => ({type:REDUZIR})

const reducer = (state = initialState, action ) =>{


}