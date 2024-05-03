<template>
    <link href='https://fonts.googleapis.com/css?family=Inter:500,700' rel='stylesheet'>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>

  
   
  <div class="" style="width: 95%; margin-left: 25px; margin-top: 60px">
    <div class="table-wrapper">
                  <div
                    class="table-title"
                    style="background:white; height: 50px;box-shadow: 3px 2px 3px rgba(0, 0, 0, .2);border-radius: 12px;height: 71px;"
                  >
                    <div class="row">
                      <div class="col-sm-6">
                        <h2 style="font-size: 1.50rem; color: var(--grey, #1E1E1E);
text-align: center;

/* H3 */
font-size: 16px;
font-style: normal;
font-weight: 700;
margin-top:10px;
line-height: normal; height: 1.81rem; border-width: 0.06rem; margin-left: 34px; top: 1.25rem; padding-top: 0.88rem; padding-bottom: 0.88rem; padding-left: 1.19rem; padding-right: 1.19rem; gap: 59.19rem;font-family:inter;white-space: nowrap;width: fit-content;">
                          DEVICE LIST
                        </h2>
                      </div>
                  
              <div class="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-end">
                <button
                  @click="showModal = true"
                  type="button"
                  name="addPurchase"
                  id="addPurchase"
                  class="btn btn-sm rounded-0"
                  style="  width: 150px;
                margin-left: 200%;
                margin-top: 10px;
                border-radius: 4px;
                font-family: inter;
                display: flex;
                align-items: center;background:#FF8C22;color: white;font-size: 15px;height: 34px;margin-top: 20px;
                "
                >
                <h2 style="margin-left: 30px;color: white;font-size: 14px;margin-top: 8px;font-family: inter;">Add Device</h2> 
               
                </button>
              </div>
           
                <div
                  id="purchaseModal"
                  class="modal-mask fixed-top"
            
                  style="
                    position: fixed;
                    width: 100%;
                    margin-left: 0px;
                    margin-top: 0px;
                    align-content: center;
                    align-items: center;
                  "
                >
                  <div
                    class="modal-wrapper"
                    style="vertical-align: middle; display: table-cell"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      style="
                        align-content: center;
                        margin-top: 40px;
                        margin-left: 300px;
                      "
                    >
                      <div
                        class="modal-content"
                        style=" width: 50%;
                                  margin-left: 120px;
                                  margin-top: 95px;
                                  background: #f5f5f5;
                                  border-radius: 18px;
                                  height:100%;"
                      >
                        <div class="modal-header">
                          <h4 class="modal-title" style="margin-left: 40px;margin-top: 20px; font-family: inter;font-size: 22px;">
                           
                            Add Device
                          </h4>
                          <button
                            @click="showModal = false"
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            style="margin-right: 30px"
                          ></button>
                        </div>
                        <div
                          class="modal-body"
                          style="
                            width: 60%;
                            margin-left: 50px;
                            vertical-align: middle;
                            align-content: center;
                          "
                        >
                          <form  id="purchaseForm" ref="myForm">
                          

                            <div class="form-group">
                              <label style="font-family: inter;font-size: 16px;">Device Name</label>
                              <div class="input-group">
                                <input 
                                  type="text"
                                  v-model="this.formdata.partName"

                                  class="form-control rounded-0"
                                  required
                                  placeholder="eg.Batteries,F20"
                                  style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5"
                                 
                                />
                              </div>
                            </div>
                            <div class="form-group">
                              <label style="font-family: inter;font-size: 16px;">Device Description</label>
                              <div class="input-group">
                                <input 
                                  type="text"
                                  v-model="this.formdata.partDescription"

                                  class="form-control rounded-0"
                                  required
                                  placeholder="Specifications"
                                  style="font-family: inter;font-size: 13px;color: gray;background:#f5f5f5"
                                 
                                />
                              </div>
                            </div>

                            <div class="form-group">
                              <input @click.prevent="CreateBrand()"
                                type="submit"
                               
                                class="btn btn-success btn-sm"
                                value="Add"
                                form="purchaseForm"
                                style="margin-bottom: 30px;margin-left: 70px;width: 60%;font-family: inter;font-size: 13px;"
                              />
                            
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
       
              <div class="form-control" style="margin-top: 30px;margin-left: 10px;border:0;border-radius: 10px;

background: #FFF;
box-shadow: 0px 8px 27px 0px rgba(136, 133, 133, 0.25);">
              
              <div class="row mx-5">
        
                </div>

           
              </div>
            </div>
            </div>
          </div>
        </div>
  
</template>
<script>
import swal from "sweetalert2";
import 'jquery';
import AppMixins from "../components/Mixins/shared"
export default {
  name: "categoryPage",
  mixins: [AppMixins],
  data() {
    return {
      search:'',
      showModal: false,
      allbrands:[],
      userbody: {},
      formdata: {
        partDescription:"",
        partName:"",
        

    
      },
    };
  },
 
  methods: {
  

    async CreateBrand() {
  
        var body={
            categoryName:this.formdata.partName,
            categoryDescription:this.formdata.partDescription,
        }
    
        
    
       console.log("Brand new: ", body);
      var response = await this.addingcategory(body);
      if (response.isTrue==true) {
        swal.fire({
          heightAuto: false,
          html: `<h5 class="text-success" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
        this.$refs.myForm.reset();
      } else {
        swal.fire({
          html: `<h5 class="text-danger" style="font-family:inter;margin-top:22px">${response.message}</h5>`,
        });
        this.$refs.myForm.reset();
      }

    },
  },
 
};
</script>
<style>
.modal-mask {
    background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity 0.3s ease;
  width: 100%;
  height: 100%;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>