import React, { useEffect, useState } from 'react'
import CreatableSelect from 'react-select/creatable'

export const InputSelectFallas = ({fallas,setProducto,producto}) => {
    const [options, setOption] = useState([])

    const handleArrayOption = ()=>{
       const fails = fallas.map(item=>(       
          {
          value:item.producto, 
          label:item.producto
        }
        ))
        setOption(fails)
    }

    useEffect(()=>{
      handleArrayOption()
    },[])

    const handleOnChangeSelect = (e)=>{
       setProducto(e?.value)
    }
    
  return (
    <>
     <CreatableSelect isClearable options={options} onChange={handleOnChangeSelect} defaultValue={producto} />
    </>
  )
}
