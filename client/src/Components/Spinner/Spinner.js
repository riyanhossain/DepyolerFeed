import React from 'react'
import { RotateLoader } from 'react-spinners'

export default function Spinner() {
  return (
    <div style={{height: '100px', width: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <RotateLoader color="#00A8E8" />
    </div>
  )
}
