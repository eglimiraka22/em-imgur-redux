import React from 'react'
type Props = {
    label: string
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({ label, checked, onChange }: Props) => {
    return (
        <label 
        htmlFor="toogleA"
        className="flex items-center cursor-pointer"
      >
        <div className="relative z-10">
          <input checked={checked} onChange={(e) => onChange(e)} id="toogleA" type="checkbox" className="sr-only" />
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <div className={`dot ${checked ? 'translate-x-full bg-green-500' : 'bg-gray-500'}  absolute w-6 h-6  rounded-full shadow -left-1 -top-1 transition`}></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium">
          Viral Images
        </div>
      </label>
    )
}

export default Checkbox