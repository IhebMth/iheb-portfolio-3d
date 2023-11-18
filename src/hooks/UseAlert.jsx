import React, { useState } from 'react'

function UseAlert() {
  const [alert, setAlert] = useState({
    show: false,
    text: '', 
    type: 'danger'
  })
  
  const showAlert = ({text, type = 'danger'}) => {
    setAlert({
    show: false,
    text, 
    type,
    })
  }

  const hideAlert = () => {
    setAlert({
    show: false,
    text: '', 
    type: 'danger'
    })
  }
    return { alert, showAlert, hideAlert}
}

export default UseAlert
