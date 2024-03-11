<template>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<div class="container" style="justify-content: center;">
  <div class="row justify-content-center">
  

    <!-- Right Side Form -->
    <div class="col-lg-6 d-flex align-items-center justify-content-center right-side">
      <div class="form-2-wrapper">
        <div class="logo text-center">
          <h2>MSMS</h2>
        </div>
        <h2 class="text-center mb-4">Sign Into Your Account</h2>
        <form action="#">
          <div class="mb-3 form-box">
            <input type="email" class="form-control" id="email" name="email" placeholder="Enter Your Email" required>
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" id="password" name="password" placeholder="Enter Your Password" required>
          </div>
          <div class="mb-3 d-flex">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="rememberMe">
              <label class="form-check-label" for="rememberMe">Remember me</label>
              <a href="forget-3.html" class="text-decoration-none float-end" style="margin-left: 100px;">Forget Password</a>
            </div>

          </div>
         <router-link to="/dashboard"><button type="submit" class=" login-btn w-100 mb-3" style="background: orange;">Login</button></router-link>
          
        </form>

        <!-- Register Link -->
        <p class="text-center register-test mt-3">Don't have an account? <a href="register-3.html" class="text-decoration-none">Register here</a></p>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "SupplierRegistration",
};
</script>

<style>


.form-2-wrapper {
    background: #ffff;
    padding: 50px;
    border-radius: 8px;
}
input.form-control{
    padding: 11px;
    border: none;
    border: 2px solid #405c7cb8;
    border-radius: 30px;
    background-color: transparent;
    font-family: Arial, Helvetica, sans-serif;
   
   
}
input.form-control:focus{
    box-shadow: none !important;
    outline: 0px !important;
    background-color: transparent;
}
button.login-btn{
    background: #b400ff;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 30px;
}
.register-test a{
    color: #000;
}

</style>
