import api from '@/services/api'

export default {
  fetchMessages() {
    return api.get(`messages/`)
              .then(response => response.data)
  },

  // https://www.npmjs.com/package/axios

  postMessage(data) {
    var instance = api
    instance.defaults.headers.common['Authorization'] = "Token " + data.token_key
    return instance.post(`messages/`, data.msg)
              .then(function(response) {
                let toastHTML = '<span>Message published</span>';
                M.toast({html: toastHTML, classes: 'teal lighten-2'});
                return response.data
              })
  },
  deleteMessage(msgId) {
    return api.delete(`messages/${msgId}`)
              .then(function(response) {
                let toastHTML = '<span>Message deleted</span>';
                M.toast({html: toastHTML, classes: 'teal lighten-2'});               
                return response.data
              })
  }
}