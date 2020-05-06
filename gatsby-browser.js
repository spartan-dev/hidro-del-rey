import React from 'react'
import GlobalContextProvider from './src/context/storeContext'

export const wrapRootElement = ({element}) =>{
return <GlobalContextProvider>{element}</GlobalContextProvider>
}