/* eslint-disable react/prop-types */

const Stats = ({totalCount}) => {
  return (
    <div className='bg-white p-5 text-center space-y-5 rounded shadow-md'>
      <h1 className='text-2xl font-semibold'>Total Count: {totalCount}</h1>
    </div>
  )
}

export default Stats
