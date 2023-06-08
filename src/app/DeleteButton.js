import {ACTIONS} from './page'

export default function DeleteButton( { dispatch, del }) {
    return (
        <button onClick={() => dispatch( {type: ACTIONS.DELETE_DIGIT, payload: {del} })}>{del}</button>
    )
}