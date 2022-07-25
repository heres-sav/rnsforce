/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {
  useState
} from 'react';
import type {Node} from 'react';
import { AuthContext } from './src/Context';
import MainNavigator from './src/navigation/MainNavigator';
import { toast } from './src/services/utils/commonUtils';

const CLIENT_ID = '3MVG9wt4IL4O5wvL821Jnt99_1l7DUDkHoQxw7gYm4dCRC93ZYm2BsRpO3RVApF97qO2WJ6m.7S8QccRMreUT'
const CLIENT_SECRET = '2102490021A20D9862BDC143AB84AA5E1041CE42992F30E2403FEBD419822FA2'

const App: () => Node = () => {
  const [access, setAccess] = useState({})
  const [loading, setLoading] = useState(false)

  return (
    <AuthContext.Provider
      value={{
        loading,
        access,
        handleLogIn: async (
          username,
          password,
          token,
          callback
        ) => {
          setLoading(true)
          let bodyString = ''
          bodyString += 'username=' + username + '&'
          bodyString += 'password=' + password + token + '&'
          bodyString += 'grant_type=password&'
          bodyString += 'client_id=' + CLIENT_ID + '&'
          bodyString += 'client_secret=' + CLIENT_SECRET
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: bodyString
          }
          const response = await 
          fetch('https://login.salesforce.com/services/oauth2/token', requestOptions)
          .then(async response => {
            const data = await response.json()
            console.log(data)
            setLoading(false)
            if(response.status === 200) {
              setAccess(data)
              toast("Logged in successfully")
            }
            else {
              toast("Please check your credentials and try again")
              callback("Please check your credentials and try again")
            }
          })
          .catch(error => {
            setLoading(false)
            toast("Not able to send authentication request, please check your connection")
            callback("Not able to send authentication request, please check your connection")
          })
        },
        logout: () => setAccess({})
      }}>
      <MainNavigator/>
    </AuthContext.Provider>
  );
};

export default App;
