<template>
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">
  <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
    
  <div
    class=""
    style="
      display: flex;
      justify-content: space-between;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      width: 90%;
      margin-left: 30px;
      align-items: flex-start;
    "
  >
    <div class="users-list">
      <!-- Users list content goes here -->
      <h4>Users List</h4>
      <!-- Users list content -->
    </div>
    <div class="" style="margin-bottom: 20px">
      <button class="button">
        <i class="fa-solid fa-plus"></i>
        <span @click="showModal = true">Add new user</span>
      </button>
    </div>
  </div>

  <div
    class="table-responsive"
    style="margin-left: 20px; width: 95%; margin-top: 20px"
  >
    <table
      id="example"
      class="table table-striped table-bordered"
      style="margin-top: 10px"
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email Adress</th>
          <th>Roles</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody v-for="(users, index) in allplatformusers" v-bind:key="users.userID">
    <tr>
          <td>{{index + 1}}</td>
          <td>{{ users.firstName + ' ' + users.lastName }}</td>
          <td>{{users.emailAdress}}</td>
          <td>{{users.role}}</td>
          <td style="display: flex; justify-content: space-between">
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"
                />
                <path
                  d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"
                />
              </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-download"
              viewBox="0 0 16 16"
            >
              <path
                d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"
              />
              <path
                d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path
                d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
              />
            </svg>

            <!-- Add more buttons for other actions -->
          </td>
          <!-- Add more data here -->
        </tr>
       
      </tbody>
      <tfoot>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email Adress</th>
          <th>Roles</th>
          <th>Actions</th>
          <!-- Add more footers if needed -->
        </tr>
      </tfoot>
    </table>
  </div>

  <!-- Modal section -->
  <transition name="popup">
    <div class="popup-mask" v-if="showModal">
      <div class="popup-wrapper">
        <div class="popup-dialog">
          <div class="popup-content" style="max-height: 90vh; overflow-y: auto;">
           
            <div class="popup-header" style="display: flex; justify-content: space-between;">
  <h4 class="popup-title">Add User</h4>
  <button @click="showModal = false" type="btn" class="popup-title">
    &times;
  </button>
</div>
<div class="popup-body">
  <form>
    <div class="form-group d-flex">
  <label for="firstName" class="mr-2" style="width: 120px;">First Name:</label>
  <input
    type="text"
    class="form-control"
    id="firstName"
    placeholder="Enter First Name"
    v-model="formdata.firstName"
    required
    style="flex: 1; max-width: 200px;"
  />
</div>
<div class="form-group d-flex">
  <label for="lastName" class="mr-2" style="width: 120px;">Last Name:</label>
  <input
    type="text"
    class="form-control"
    id="lastName"
    placeholder="Enter Last Name"
    v-model="formdata.lastName"
    required
    style="flex: 1; max-width: 200px;"
  />
</div>
<div class="form-group d-flex">
  <label for="email" class="mr-2" style="width: 120px;">Email:</label>
  <input
    type="email"
    class="form-control"
    id="email"
    placeholder="Enter email address"
    v-model="formdata.email"
    required
    style="flex: 1; max-width: 200px;"
  />
</div>
<div class="form-group d-flex">
  <label for="password" class="mr-2" style="width: 120px;">Password:</label>
  <input
    type="password"
    class="form-control"
    id="password"
    placeholder="Enter password"
    v-model="formdata.password"
    required
    style="flex: 1; max-width: 200px;"
  />
</div>
<div class="form-group d-flex">
  <label for="confirmPassword" class="mr-2" style="width: 120px;">Confirm Password:</label>
  <input
    type="password"
    class="form-control"
    id="confirmPassword"
    placeholder="Confirm password"
    v-model="formdata.confirmPassword"
    required
    style="flex: 1; max-width: 200px;"
  />
</div>


    <button
      type="submit"
      class="btn btn-primary"
      @click.prevent="AddingUsers()"
    >
      Add User
    </button>
  </form>
</div>

          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import swal from "sweetalert2";
import 'datatables.net-bs4/js/dataTables.bootstrap4.min.js';
import 'datatables.net';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import 'datatables.net-bs4';

import $ from "jquery";
import AppMixins from "../components/Mixins/shared"
export default {
  name: "AdminRegistration",
  mixins: [AppMixins],

  data() {
    return {
      showModal: false,
      formdata: {
        firstName: "",
        lastName: "",
        email: "",
        password:"",
        confirmPassword:"",
        
      },
      allplatformusers:{},
    };
  },
  mounted() {
    // Initialize DataTable
    $(document).ready(function () {
      $("#example").DataTable({
        paging: true,
        searching: true,
      });
    });
  },
  methods: {
      

    async AddingUsers() {
  
  var body={
    firstName:this.formdata.firstName,
    lastName:this.formdata.lastName,
    emailAdress:this.formdata.email,
    password:this.formdata.password,
    confirmPassword:this.formdata.confirmPassword,
  }

  

 console.log("Brand new: ", body);
 var response = await this.addingPlatformUsers(body);

if (response.code === "200") {
  swal.fire({
    heightAuto: false,
    html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
  });
} else {
  swal.fire({
    html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
  });
}
// Close the modal
this.showModal = false;
    },
 
async gettingAllUsers(){

const response= await this.GettingAllPlatformUsers();
this.allplatformusers=response.body;





console.log("allplatformusers: ", this.allplatformusers);
return response;

},
  },
  created(){
    this.gettingAllUsers();
  },

};
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300..700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@400..700&display=swap");

:root {
  --color-black: #41423d;
  --color-neutral-100: #f5f4f0;
  --color-neutral: #dfddd0;
  --color-primary-100: #f0f7f5;
  --color-primary-200: #e0eeeb;
  --color-primary-300: #cfe5e0;
  --color-primary: #3f9783;
  --color-primary-500: #327969;
  --color-white: #fbfcfa;
  --text-font-family: "Inter", sans-serif;
  --title-font-family: "Lora", serif;
  --title-font-weight: 500;
}

.button {
  background: var(--color-primary);
  border: 0;
  border-radius: 0.25rem;
  color: var(--color-white);
  cursor: pointer;
  font: inherit;
  font-weight: 500;
  height: 3rem;
  line-height: 3rem;
  padding: 0 2rem;

  /* grid */
  align-items: center;
  display: grid;
  gap: 0.75rem;
  grid-auto-flow: column;
}

/* Your styles here... */
.popup-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.popup-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.popup-dialog {
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.popup-header {
  padding: 15px;
  border-bottom: 1px solid #e9ecef;
}

.popup-title {
  margin: 0;
}

.popup-body {
  padding: 15px;
}

.popup-content {
  border: none;
}



.table-wrapper {
  margin-bottom: 20px;
}
</style>
