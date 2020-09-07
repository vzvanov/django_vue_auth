<template>
  <div class="row">
    <p>The data below is added/removed from the SQLite Database using Django's ORM and Rest Framework.</p>
    <div class="row">
      <div v-if="isLogin" class="col s6 offset-s3">
        <h3>New message</h3>
        <form @submit.prevent="sendMessage">

          <div class="input-field col s6 offset-s3">
            <select  ref="select" v-model="subject">
              <option value="" disabled selected></option>
              <option 
                v-for="(sbj, idx) of subjectList"
                :key="idx"
                :value=sbj
              >
                {{sbj}}
              </option>

            </select>
            <label>Subject</label>
          </div>

          <div class="row">
            <div class="input-field col s6 offset-s3">
              <textarea v-model="msgBody" id="msgBody" type="text" class="validate materialize-textarea" required></textarea>              <label for="msgBody">Message body</label>
              <span class="helper-text" data-error="Message body is required"></span> 
            </div>
          </div>

          <button class="btn" type="submit" :disabled="!subject || !msgBody">Send message</button>

        </form>
      </div>
      <div v-else class="row">
        <p>You need to log in to add/remove messages</p>
      </div>
    </div>
    <h3>Messages on Database</h3>
    <div v-if="messages.length === 0" class="row">
      <p>No messages</p>
    </div>
    <div v-else class="col s6 offset-s3" >
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Subject</th>
            <th>Body</th>
            <th>Author</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(msg, idx) of messages"
            :key="idx"
            >
            <td>{{idx + 1}}</td>
            <td>{{msg.subject}}</td>
            <td>{{msg.body}}</td>
            <td v-if="msg.author">{{msg.author.username}}</td>
            <td v-else > --- </td>
            <td><button v-if="isLogin" class="rm" type="submit" @click="deleteMessage(msg.pk)">&times</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "Messages",

  data() {
    return {
      subject: "",
      msgBody: "",
      select: null,
      subjectList: [
        "Message",
        "Сongratulation",
        "Notice"
      ]
    }
  },

  computed: mapState({
      messages: state => state.messages.messages,
      isLogin: state => state.auth.isLogin,
      token_key: state => state.auth.token_key
  }),

  methods: {

    sendMessage () {
      const data = {
        msg: {
          subject: this.subject,
          body: this.msgBody,
          author: "anydata"      
        },
        token_key: this.token_key  
      }
      this.$store.dispatch('messages/addMessage', data)
      this.msgBody = ''
    },

    deleteMessage(msgId) {
      this.$store.dispatch('messages/deleteMessage', msgId)
    },

  },

  created() {
    this.$store.dispatch('messages/getMessages')
  },

  mounted() {
    this.select = M.FormSelect.init(this.$refs.select, {});

  },
  destroyed() {

      if (this.select && this.select.destroy) {
        this.select.destroy()
      }
    },

}

</script> 

<style scoped>

  .rm {
 		background: red;
		color: #fff;
		border-radius: 50%;
		font-weight: bolt;
		border: 5px solid red;   
  }

</style>