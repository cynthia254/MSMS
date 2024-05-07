import axios from "axios";

export default {
  name: "AppMixins",
  methods: {
    setAuthHeader() {
      axios.defaults.baseURL = "http://localhost:5170/api"; 
      axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
      axios.defaults.headers.common["Authorization"] =
        localStorage.getItem("token");
    },
    async addingcategory(body) {
      try {
        this.setAuthHeader();
        const response = await axios.post("Product/AddCategory", body);
        console.log("response is >>>>>>>>>>>>>>",response);
        return response.data;
      } catch (error) {
        // Handle error
        console.error("Error adding category:", error);
        throw error; // Re-throw the error to be handled by the caller
      }
    },
    async GettingAllCategories() {
      this.setAuthHeader();
      var response = await axios.get("Product/GetAllCategories");

      return response.data;
    },
    async addingPlatformUsers(body) {
      try {
        this.setAuthHeader();
        const response = await axios.post("Product/AddPlatformUsers", body);
        console.log("response is >>>>>>>>>>>>>>",response);
        return response.data;
      } catch (error) {
        // Handle error
        console.error("Error adding users:", error);
        throw error; // Re-throw the error to be handled by the caller
      }
    },
    async GettingAllPlatformUsers() {
      this.setAuthHeader();
      var response = await axios.get("Product/GetAllPlatformUsers");

      return response.data;
    },
    async addingMerchants(body) {
      try {
        this.setAuthHeader();
        const response = await axios.post("Product/AddMerchants", body);
        console.log("response is >>>>>>>>>>>>>>",response);
        return response.data;
      } catch (error) {
        // Handle error
        console.error("Error adding users:", error);
        throw error; // Re-throw the error to be handled by the caller
      }
    },
    async authenticatinguser(body) {
      try {
        this.setAuthHeader();
        const response = await axios.post("Product/Authenticate", body);
   
        console.log("response is >>>>>>>>>>>>>>",response);
        return response.data;
      } catch (error) {
        
        console.error("Error authenticating users:", error);
        throw error; // Re-throw the error to be handled by the caller
      }
    },
    async GettingLoggedInUser() {
      this.setAuthHeader();
      var response = await axios.get("Product/GettingLoggedInUser");
      
      console.log( "getting user data" ,response );

      return response.data;
    },
    async addingProducts(body) {
      try {
        this.setAuthHeader();
        const response = await axios.post("Product/AdditionofProduct", body);
        console.log("response is >>>>>>>>>>>>>>",response);
        return response.data;
      } catch (error) {
        // Handle error
        console.error("Error adding products:", error);
        throw error; // Re-throw the error to be handled by the caller
      }
    },
    async gettingproductByMerchantId(merchantId){
      this.setAuthHeader();

      var response= await axios.post(`Product/GettingProductByMerchantID?merchantId=${merchantId}`)
      return response.data;
    },
    async addingStores(body) {
      try {
        this.setAuthHeader();
        const response = await axios.post("Product/AdditionofStores", body);
        console.log("response is >>>>>>>>>>>>>>",response);
        return response.data;
      } catch (error) {
        // Handle error
        console.error("Error adding stores:", error);
        throw error; // Re-throw the error to be handled by the caller
      }
    },
    async gettingStoreByLoggedInUser(merchantId){
      this.setAuthHeader();

      var response= await axios.post(`Product/GetStoreByLoggedInMerchant?merchantId=${merchantId}`)
      return response.data;
    },
    async attachingstoreToProduct(storeId,productId,quantity){
      this.setAuthHeader();

      var response= await axios.post(`Product/AttachProductToStore?storeId=${storeId}&productId=${productId}&quantity=${quantity}`)
      console.log("response is in mixins",response);
      return response.data;
    },
    async addingSubCategory(body) {
      try {
        this.setAuthHeader();
        const response = await axios.post("Product/AdditionofsubCategories", body);
        console.log("response is >>>>>>>>>>>>>>",response);
        return response.data;
      } catch (error) {
        // Handle error
        console.error("Error adding stores:", error);
        throw error; // Re-throw the error to be handled by the caller
      }
    },
    async gettingSubCategoryByMerchantID(merchantId){
      this.setAuthHeader();

      var response= await axios.post(`Product/GettingSubCategoryByMerchantID?merchantId=${merchantId}`)
      return response.data;
    },
    async gettingStoredetails(storeId){
      this.setAuthHeader();

      var response= await axios.post(`Product/GettingProductForStore?storeId=${storeId}`)
      return response.data;
    },
  },
};
