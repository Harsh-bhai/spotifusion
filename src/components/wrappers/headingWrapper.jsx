import React from 'react'

const HeadingWrapper = ({heading, desc, children}) => {
  return (
    <div>
        <div className="m-6">
            <h1 className="text-4xl  font-bold mb-4 text-green-600">
                {heading}
              </h1>
            {desc && <p className="">
                {desc}
            </p>}
        </div>

        {children}
    </div>
  )
}

export default HeadingWrapper