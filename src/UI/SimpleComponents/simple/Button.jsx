import React from 'react'
import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate()
  return (
    <div>
      <button className=' h-[50px] border rounded-sm border-[#4E9DD3] px-20' 
      onClick={() => {
      navigate(`/news`);
    }}>
      Показать ещё
      </button>
    </div>
  )
}

export default Button