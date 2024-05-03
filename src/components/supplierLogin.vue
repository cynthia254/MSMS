<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    crossorigin="anonymous"
  />
  <div class="container" style="justify-content: center">
    <div class="row justify-content-center">
      <!-- Right Side Form -->
      <div
        class="col-lg-6 d-flex align-items-center justify-content-center right-side"
      >
        <div class="form-2-wrapper">
          <div class="logo text-center">
            <h2>MSMS</h2>
          </div>
          <h2 class="text-center mb-4">Sign Into Your Account</h2>
          <form @submit.prevent="Authenticatinguser()">
            <div class="mb-3 form-box">
              <input
                type="email"
                class="form-control"
                name="email"
                placeholder="Enter Your Email"
                required
                v-model="formdata.email"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Enter Your Password"
                required
                v-model="formdata.password"
              />
            </div>
            <div class="mb-3 d-flex">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="rememberMe"
                />
                <label class="form-check-label" for="rememberMe"
                  >Remember me</label
                >
                <a
                  href="forget-3.html"
                  class="text-decoration-none float-end"
                  style="margin-left: 100px"
                  >Forget Password</a
                >
              </div>
            </div>
            
              <button
                type="submit"
                class="login-btn w-100 mb-3"
                style="background: orange"
                @click="Authenticatinguser()"
              >
                Login
              </button>
          </form>

          <!-- Register Link -->
          <p class="text-center register-test mt-3">
            Don't have an account?
            <router-link to="/becomemerchant">Register here</router-link>
            
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert2";
import AppMixins from "../components/Mixins/shared";
import axios from  'axios';
export default {
  name: "SupplierRegistration",
  mixins: [AppMixins],
  data() {
    return {
      
      formdata: {
       email: "",
       password:"",
      },
   
    };
  },
  methods:{
    async Authenticatinguser() {
  var body = {
    userEmail: this.formdata.email,
    password: this.formdata.password,
  };

  console.log("User is: ", body);
  var response = await this.authenticatinguser(body);
  if (response.code === "200") {
      // Set Authorization header for future requests
      console.log("token is ",response.body.token)
      axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.body.token;
          localStorage.setItem("token", `Bearer ${response.body.token}`);
console.log(`Authorization header value: ${axios.defaults.headers.common["Authorization"]}`);


    if (response.body.merchant && response.body.merchant.role === "Supplier") {

      // Redirect to the dashboard page for suppliers
      this.$router.push({
        path: '/dashboard',
        replace: true
      });
    } else if (response.body.platformUser && response.body.platformUser.role === "Admin") {
      // Redirect to the admin registration page for admins
      this.$router.push({
        path: "/adminRegistration",
        replace: true
      });
    } else {
      // For example, redirect to a default page
      this.$router.push({
        path: "/",
        replace: true
      });
    }

    swal.fire({
      heightAuto: false,
      html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
      iconHtml:
        '<div class="custom-icon-container"><span class="custom-checkmark">&#10004;</span></div>', // Custom HTML structure
      confirmButtonText: "OK",
      customClass: {
        popup: "custom-popup",
        content: "custom-content", // Apply custom styles to the content
      },
    });

  } else {
    swal.fire({
      html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
    });
  }
}


  }
};
</script>

<style>
.form-2-wrapper {
  background: #ffff;
  padding: 50px;
  border-radius: 8px;
}
input.form-control {
  padding: 11px;
  border: none;
  border: 2px solid #405c7cb8;
  border-radius: 30px;
  background-color: transparent;
  font-family: Arial, Helvetica, sans-serif;
}
input.form-control:focus {
  box-shadow: none !important;
  outline: 0px !important;
  background-color: transparent;
}
button.login-btn {
  background: #b400ff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 30px;
}
.register-test a {
  color: #000;
}
</style>
