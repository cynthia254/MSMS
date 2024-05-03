<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
    crossorigin="anonymous"
  />
  <div class="user-registration">
    <div class="container register">
      <div class="row">
        <div class="col-md-9 register-right">
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <h3 class="register-heading">Merchant Registration</h3>
              <div class="row register-form">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name *"
                      value=""
                      v-model="formdata.firstName"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last Name *"
                      value=""
                      v-model="formdata.lastName"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Company Name *"
                      value=""
                      v-model="formdata.companyName"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password *"
                      value=""
                      v-model="formdata.password"
                    />
                  </div>
                  <div class="form-group">
                    <select
                      class="form-control"
                      v-model="formdata.categoryName"
                    >
                      <option class="hidden" selected disabled>
                        Select Category
                      </option>
                      <option
                        v-for="category in this.allcategory"
                        v-bind:value="category.categoryName"
                        :key="category.categoryID"
                      >
                        {{ category.categoryName }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Your Email *"
                      value=""
                      v-model="formdata.emailAdress"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      minlength="10"
                      maxlength="10"
                      name="txtEmpPhone"
                      class="form-control"
                      placeholder="Your Phone *"
                      value=""
                      v-model="formdata.phoneNumber"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="url"
                      name="txtEmpURL"
                      class="form-control"
                      placeholder="Company's Website"
                      value=""
                      v-model="formdata.companyWebsite"
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Confirm Password *"
                      value=""
                      v-model="formdata.confirmPassword"
                    />
                  </div>
                  <div class="form-group">
                    <select class="form-control" v-model="formdata.countryName">
                      <option class="hidden" selected disabled>
                        Select Country
                      </option>
                      <option>Kenya</option>
                      <option>Uganda</option>
                      <option>Tanzania</option>
                      <option>Canada</option>
                      <option>United States of America</option>
                      <option>United Kingdom</option>
                      <option>South Africa</option>
                    </select>
                  </div>
                  <div class="verification-container">
                    <div
                      class="verification-slider"
                      :class="{ verified: isVerified }"
                      @mousedown="startVerification"
                      @touchstart="startVerification"
                      @mouseup="endVerification"
                      @touchend="endVerification"
                      @mousemove="moveVerification"
                      @touchmove="moveVerification"
                    >
                      <span
                        class="slider-handle"
                        :style="{ left: sliderPosition }"
                      ></span>
                    </div>
                    <p>{{ verificationText }}</p>
                  </div>
                  <input
                    @click="CreatingMerchants()"
                    type="submit"
                    class="btnRegister"
                    value="Submit"
                    style="background-color: orange"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert2";
import AppMixins from "../components/Mixins/shared";
export default {
  name: "RegistrationPage",
  mixins: [AppMixins],
  data() {
    return {
      isVerified: false,
      verificationText: "Slide to Verify",
      startX: 0,
      sliderPosition: "0",
      isCustomerTabActive: false,
      formdata: {
        firstName: "",
        lastName: "",
        emailAdress: "",
        phoneNumber: "",
        password: "",
        companyWebsite: "",
        categoryName: "",
        companyName: "",
        countryName: "",
        confirmPassword: "",
      },
      allcategory: {},
    };
  },
  methods: {
    onTabClick(tab) {
      if (tab === "Customer") {
        this.isCustomerTabActive = true;
      } else {
        this.isCustomerTabActive = false;
      }
    },
    async CreatingMerchants() {
      var body = {
        firstName: this.formdata.firstName,
        lastName: this.formdata.lastName,
        emailAdress: this.formdata.emailAdress,
        password: this.formdata.password,
        confirmPassword: this.formdata.confirmPassword,
        categoryName: this.formdata.categoryName,
        companyName: this.formdata.companyName,
        country: this.formdata.countryName,
        phoneNumber: this.formdata.phoneNumber,
        companyWebsite: this.formdata.companyWebsite,
      };

      console.log("Brand new: ", body);
      var response = await this.addingMerchants(body);
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
    },
    async gettingAllUsers() {
      const response = await this.GettingAllPlatformUsers();
      this.allplatformusers = response.body;

      console.log("allplatformusers: ", this.allplatformusers);
      return response;
    },
    async getAllCategories() {
      const response = await this.GettingAllCategories();
      this.allcategory = response.body;

      console.log("allcategories: ", this.allcategory);
      return response;
    },
    startVerification(event) {
      event.preventDefault();
      this.startX =
        event.type === "mousedown" ? event.clientX : event.touches[0].clientX;
      window.addEventListener("mousemove", this.moveVerification);
      window.addEventListener("touchmove", this.moveVerification);
    },
    moveVerification(event) {
      if (!this.startX) return;
      const x =
        event.type === "mousemove" ? event.clientX : event.touches[0].clientX;
      const offsetX = x - this.startX;
      this.sliderPosition = `${Math.min(270, Math.max(0, offsetX))}px`;
      if (offsetX >= 270) {
        this.isVerified = true;
        this.verificationText = "Verified!";
        window.removeEventListener("mousemove", this.moveVerification);
        window.removeEventListener("touchmove", this.moveVerification);
      }
    },
    endVerification() {
      if (!this.isVerified) {
        this.sliderPosition = "0";
      }
      window.removeEventListener("mousemove", this.moveVerification);
      window.removeEventListener("touchmove", this.moveVerification);
      this.startX = 0;
    },
  },
  created() {
    this.getAllCategories();
  },
};
</script>
<style>
.register {
  margin-top: 3%;
  padding: 3%;
  overflow: hidden;
  .register-form {
    padding: 10%;
    margin-top: 10%;
    @media (max-width: 991px) {
      margin-top: 16%;
    }
    @media (max-width: 667px) {
      margin-top: 20%;
    }
  }
  .nav-tabs {
    margin-top: 3%;
    border: none;
    background: #0062cc;
    border-radius: 1.5rem;
    width: 28%;
    float: right;
    @media (max-width: 991px) {
      width: 33%;
      margin-top: 8%;
    }
    .nav-link {
      padding: 2%;
      height: 34px;
      font-weight: 600;
      color: #fff;
      border-top-right-radius: 1.5rem;
      border-bottom-right-radius: 1.5rem;
      &:hover {
        border: none;
      }
      &.active {
        width: 100px;
        color: black;
        border: 2px solid #f8f9fa;
        border-top-left-radius: 1.5rem;
        border-bottom-left-radius: 1.5rem;
      }
    }
  }
}
.verification-container {
  position: relative;
  width: 300px; /* Adjust as needed */
  margin: 20px auto;
}

.verification-slider {
  width: 100%;
  height: 30px;
  background-color: #ccc;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
}

.verification-slider.verified {
  background-color: #4caf50;
}

.slider-handle {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.register-left {
  text-align: center;
  color: #fff;
  margin-top: 4%;
  input {
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    width: 60%;
    background: #f8f9fa;
    font-weight: bold;
    color: black;
    margin-top: 30%;
    margin-bottom: 3%;
    cursor: pointer;
  }
  img {
    margin-top: 15%;
    margin-bottom: 5%;
    width: 25%;
    animation: mover 1s infinite alternate;
  }
  p {
    font-weight: lighter;
    padding: 12%;
    margin-top: -9%;
  }
}
.register-right {
  background: #fff;
  border-top-left-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
}
@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
.btnRegister {
  float: right;
  margin-top: 10%;
  border: none;
  padding: 2%;
  background: #383d41;
  color: white;
  font-weight: 600;
  width: 50%;
  cursor: pointer;
}
.register-heading {
  text-align: center;
  margin-top: 8%;
  margin-bottom: -15%;
  color: #383d41;
  @media (max-width: 991px) {
    font-size: 1.5rem;
  }
}
.company-verification-container {
  display: flex;
  align-items: center; /* Align items vertically */
}
.user-registration {
  box-sizing: border-box;
  overflow: hidden;
  display: block;
  position: absolute;
  background: white;
  color: grey;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 70%;
  box-shadow: 15px 5px 80px -20px #fff;
  margin-top: 50px;
  height: auto;
}
</style>
