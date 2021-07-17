import React, { useEffect, useContext } from 'react'
import { fetchGetTodoData } from '../apis/index'
import { Store } from '../store/index'
import { COMMENTS_DATA } from '../actions/index'
import Card from '../components/Cardsecond'

const SecondPage = () => {
  const { globalState, setGlobalState } = useContext(Store)
  useEffect(() => {
    fetchGetTodoData().then(res => {
      setGlobalState({
        type: COMMENTS_DATA,
        data: res.data
      })
    })
    //eslint-disable-next-line
  }, [])
  console.log(globalState)



  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          globalState.comments_data.map((comments, index) => {
            return (
              <Card user={comments} key={index} />
            )
          })
        }
      </div>

    </div>
  )
}

export default SecondPage