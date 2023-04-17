import { configureStore } from '@reduxjs/toolkit'
import { developerReduser } from './information/developers'
import ticketReducer from './information/ticket'

export default configureStore ({
    reducer:{
        developer: developerReduser,
        ticked: ticketReducer,
    }
})