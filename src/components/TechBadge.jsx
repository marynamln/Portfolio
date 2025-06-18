import { useState } from 'react'
import '../App.scss'

function TechBadge({badge}) {

  return (
    <>
        <div className='pr-badge'>
            {badge}
        </div>
    </>
  )
}

export default TechBadge