import React from 'react'
import { Paper } from '@mui/material'
import Progress from 'components/Progress'
import APIManager from 'services/Api'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserError, fetchUserRequest } from 'store/users/actions';
import Chart from "react-google-charts";

const StatsUser = () => {
  const [users, setUsers] = React.useState()
  const dispatch = useDispatch()
  const userReducer = useSelector(state => state.userReducer)
  React.useEffect(
    () => {
      const fetchAllUsers = async () => {
        dispatch(fetchUserRequest())
        const response = await APIManager.getUsersAdmin()
        if (response.error) {
          dispatch(fetchUserError(response.error))
        } else {
          dispatch(fetchUserRequest(response))

          setUsers(response)
        }
      }
      fetchAllUsers()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  )


  return (
    <>

      {userReducer &&

        users &&

        <Chart
          width={'300px'}
          height={'400px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ['année', '2020', '2021', '2022'],
            ['2020', 15, 0, 0],
            ['2021', users.length, 0, 0],
            ['2022', 0, 0, 0]
          ]}
          options={{
            chart: {
              title: 'Nombre d\'inscris sur le site',
              subtitle: 'cette année',
            }
          }
          }
          // For tests
          rootProps={{ 'data-testid': '2' }}
        />
      }
    </>
  )
}

export default StatsUser
