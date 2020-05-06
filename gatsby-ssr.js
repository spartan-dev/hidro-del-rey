// const React = require("react")
// const GlobalContextProvider = require("./src/context/storeContext").default
import React from 'react'
import {GlobalContextProvider} from './src/context/storeContext'
export const wrapRootElement = ({element}) => {
<GlobalContextProvider>{element}</GlobalContextProvider>
}