import React from 'react'
import "./_index.scss"
interface IInput {
  icon?:string,
  placeholder:string,
  label:string,
  type?:string,
  name:string
}
const index = ({icon,label,placeholder,type="text",name}:IInput) => {
  return (
    <div className='form-input'>
      <div className="icon-container"><img src={icon} alt="icon input" /></div>
      <div className="label-input">
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} placeholder={placeholder}/>
      </div>
    </div>
  )
}

export default index
