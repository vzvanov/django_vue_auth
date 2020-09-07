import api from '@/services/api'

// https://www.npmjs.com/package/axios

export default {
  fetchLogin(user) {
    return api.post(`auth/login/`, user)
              .then(response => response.data)
              .catch(function (error) {
                let msg = ''
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  for (let i = 0; i< error.response.data['non_field_errors'].length; i++) {
                    msg = msg + error.response.data['non_field_errors'][i] + '\n'
                  }
                } 
                msg = msg + error.message
                alert(msg)
              })
  },
  
  fetchRegistration(user) {
    return api.post(`auth/registration/`, user)
              .then(response => response.data)
              .catch(function (error) {
                console.log(error);
              })
  },

}