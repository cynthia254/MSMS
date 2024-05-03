<template>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.min.css">
  <div class="container" style="display: flex">
    <nav class="sidebar">            
            <div>
                <div class="sidebar__logo">
                    <h2 class="sidebar__logo-header">MSMS</h2>    
                </div>
                <ul class="side-nav">
                    <span class="side-nav__header">General</span>
                    <li class="side-nav__item side-nav__item-active">
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.23201 3.4202L9.23239 3.41989C10.2108 2.63408 11.7843 2.63834 12.7781 3.42994C12.7783 3.43005 12.7784 3.43015 12.7785 3.43025L18.7784 8.2301C18.7789 8.23054 18.7795 8.23099 18.78 8.23143C19.1189 8.50835 19.4146 8.94381 19.6058 9.44415C19.7968 9.94409 19.8672 10.4662 19.8014 10.8985L18.6475 17.8037C18.6474 17.8042 18.6473 17.8047 18.6472 17.8052C18.4217 19.0989 17.1608 20.1667 15.8585 20.1667H6.1418C4.81982 20.1667 3.58766 19.1252 3.36227 17.8148C3.36221 17.8145 3.36215 17.8142 3.36209 17.8138L2.20746 10.9043L2.20726 10.9032C2.13345 10.4677 2.19947 9.94466 2.39002 9.44498C2.58055 8.94535 2.87982 8.51038 3.22697 8.2334L3.22784 8.2327L9.23201 3.4202ZM11.0001 18.1876C11.6521 18.1876 12.1876 17.652 12.1876 17.0001V14.2501C12.1876 13.5981 11.6521 13.0626 11.0001 13.0626C10.3482 13.0626 9.81263 13.5981 9.81263 14.2501V17.0001C9.81263 17.652 10.3482 18.1876 11.0001 18.1876Z" fill="currentColor" stroke="currentColor"/>
                        </svg>                       
                        <span>Dashboard</span>
                    </li>
                    <li class="side-nav__item">
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.30664 17.1375V15.24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            <path d="M11 17.1375V13.3425" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            <path d="M15.6934 17.1375V11.4358" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            <path d="M15.6933 5.86255L15.2716 6.35755C12.9341 9.08922 9.79914 11.0234 6.30664 11.8942" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M13.0073 5.86255H15.6932V8.53922" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.25016 20.6667H13.7502C18.3335 20.6667 20.1668 18.8334 20.1668 14.25V8.75004C20.1668 4.16671 18.3335 2.33337 13.7502 2.33337H8.25016C3.66683 2.33337 1.8335 4.16671 1.8335 8.75004V14.25C1.8335 18.8334 3.66683 20.6667 8.25016 20.6667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                       
                        <span>Analytics</span>
                    </li>
                   <router-link to="/invoices"> <li class="side-nav__item">
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1668 9.66671V14.25C20.1668 18.8334 18.3335 20.6667 13.7502 20.6667H8.25016C3.66683 20.6667 1.8335 18.8334 1.8335 14.25V8.75004C1.8335 4.16671 3.66683 2.33337 8.25016 2.33337H12.8335" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.1668 9.66671H16.5002C13.7502 9.66671 12.8335 8.75004 12.8335 6.00004V2.33337L20.1668 9.66671Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.4165 12.4166H11.9165" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.4165 16.0834H10.0832" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                        
                        <span>Invoices</span>
                    </li></router-link>
                    <li class="side-nav__item">
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.90576 7.32001L10.9999 12.0042L19.0391 7.34748" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 20.3092V11.995" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.10256 2.77331L4.20757 5.49584C3.0984 6.11001 2.19092 7.64999 2.19092 8.91499V14.0942C2.19092 15.3592 3.0984 16.8992 4.20757 17.5133L9.10256 20.2359C10.1476 20.8134 11.8617 20.8134 12.9067 20.2359L17.8017 17.5133C18.9109 16.8992 19.8184 15.3592 19.8184 14.0942V8.91499C19.8184 7.64999 18.9109 6.11001 17.8017 5.49584L12.9067 2.77331C11.8526 2.18665 10.1476 2.18665 9.10256 2.77331Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.5834 12.6366V9.28167L6.88428 4.2583" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                        
                        <span>Products</span>
                    </li>
                    <li class="side-nav__item">
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.90576 7.32001L10.9999 12.0042L19.0391 7.34748" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 20.3092V11.995" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.10256 2.77331L4.20757 5.49584C3.0984 6.11001 2.19092 7.64999 2.19092 8.91499V14.0942C2.19092 15.3592 3.0984 16.8992 4.20757 17.5133L9.10256 20.2359C10.1476 20.8134 11.8617 20.8134 12.9067 20.2359L17.8017 17.5133C18.9109 16.8992 19.8184 15.3592 19.8184 14.0942V8.91499C19.8184 7.64999 18.9109 6.11001 17.8017 5.49584L12.9067 2.77331C11.8526 2.18665 10.1476 2.18665 9.10256 2.77331Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.5834 12.6366V9.28167L6.88428 4.2583" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                        
                        <span>Orders</span>
                    </li>
                    <li class="side-nav__item">
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.2915 12.6367V11.0509C2.2915 9.15336 3.84067 7.60419 5.73817 7.60419H16.2615C18.159 7.60419 19.7082 9.15336 19.7082 11.0509V12.3709H17.8565C17.3432 12.3709 16.8757 12.5725 16.5365 12.9208C16.1515 13.2967 15.9315 13.8375 15.9865 14.415C16.069 15.405 16.9765 16.1292 17.9665 16.1292H19.7082V17.22C19.7082 19.1175 18.159 20.6667 16.2615 20.6667H11.2382" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.2915 11.8758V7.6867C2.2915 6.59587 2.96067 5.62416 3.97817 5.23916L11.2565 2.48916C12.3932 2.05833 13.6123 2.90169 13.6123 4.12085V7.60418" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.6787 13.306V15.1944C20.6787 15.6985 20.2754 16.111 19.7621 16.1293H17.9654C16.9754 16.1293 16.0679 15.4052 15.9854 14.4152C15.9304 13.8377 16.1504 13.2968 16.5354 12.921C16.8746 12.5727 17.3421 12.371 17.8554 12.371H19.7621C20.2754 12.3894 20.6787 12.8018 20.6787 13.306Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.4165 11.5H12.8332" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.75 15.625H7.645C8.23166 15.625 8.70833 16.1016 8.70833 16.6883V17.8617" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.86833 14.5067L2.75 15.625L3.86833 16.7433" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.70833 20.4651H3.81334C3.22667 20.4651 2.75 19.9884 2.75 19.4017V18.2284" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.59131 21.5837L8.70964 20.4653L7.59131 19.347" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                        
                        <span>Reimburce</span>
                    </li>
                    <li class="side-nav__item">
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.79183 17.9166H7.3335C3.66683 17.9166 1.8335 17 1.8335 12.4166V7.83331C1.8335 4.16665 3.66683 2.33331 7.3335 2.33331H14.6668C18.3335 2.33331 20.1668 4.16665 20.1668 7.83331V12.4166C20.1668 16.0833 18.3335 17.9166 14.6668 17.9166H14.2085C13.9243 17.9166 13.6493 18.0541 13.4752 18.2833L12.1002 20.1166C11.4952 20.9233 10.5052 20.9233 9.90016 20.1166L8.52516 18.2833C8.3785 18.0816 8.03933 17.9166 7.79183 17.9166Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.6633 10.5833H14.6715" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.9958 10.5833H11.004" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.3283 10.5833H7.33653" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                        
                        <span>Inbox</span>
                    </li>
                    <li class="side-nav__item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
  <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
</svg> 
                        <span>People &amp; Teams</span>
                    </li>
                    <li class="side-nav__item ">
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.23201 3.4202L9.23239 3.41989C10.2108 2.63408 11.7843 2.63834 12.7781 3.42994C12.7783 3.43005 12.7784 3.43015 12.7785 3.43025L18.7784 8.2301C18.7789 8.23054 18.7795 8.23099 18.78 8.23143C19.1189 8.50835 19.4146 8.94381 19.6058 9.44415C19.7968 9.94409 19.8672 10.4662 19.8014 10.8985L18.6475 17.8037C18.6474 17.8042 18.6473 17.8047 18.6472 17.8052C18.4217 19.0989 17.1608 20.1667 15.8585 20.1667H6.1418C4.81982 20.1667 3.58766 19.1252 3.36227 17.8148C3.36221 17.8145 3.36215 17.8142 3.36209 17.8138L2.20746 10.9043L2.20726 10.9032C2.13345 10.4677 2.19947 9.94466 2.39002 9.44498C2.58055 8.94535 2.87982 8.51038 3.22697 8.2334L3.22784 8.2327L9.23201 3.4202ZM11.0001 18.1876C11.6521 18.1876 12.1876 17.652 12.1876 17.0001V14.2501C12.1876 13.5981 11.6521 13.0626 11.0001 13.0626C10.3482 13.0626 9.81263 13.5981 9.81263 14.2501V17.0001C9.81263 17.652 10.3482 18.1876 11.0001 18.1876Z" fill="currentColor" stroke="currentColor"/>
                        </svg>                       
                        <span>Store</span>
                    </li>
                </ul>
    
                <ul class="side-nav">
                    <span class="side-nav__header">Preferences</span>
                    <li class="side-nav__item">
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.75 8.85081V14.14C2.75 16.0833 2.75 16.0833 4.58333 17.3208L9.625 20.2358C10.3858 20.6758 11.6233 20.6758 12.375 20.2358L17.4167 17.3208C19.25 16.0833 19.25 16.0833 19.25 14.1491V8.85081C19.25 6.91664 19.25 6.91664 17.4167 5.67914L12.375 2.76414C11.6233 2.32414 10.3858 2.32414 9.625 2.76414L4.58333 5.67914C2.75 6.91664 2.75 6.91664 2.75 8.85081Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 14.25C12.5188 14.25 13.75 13.0188 13.75 11.5C13.75 9.98122 12.5188 8.75 11 8.75C9.48122 8.75 8.25 9.98122 8.25 11.5C8.25 13.0188 9.48122 14.25 11 14.25Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                        
                        <span>Settings</span>
                    </li>
                    <li class="side-nav__item">
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0002 20.6666C16.0418 20.6666 20.1668 16.5416 20.1668 11.5C20.1668 6.45831 16.0418 2.33331 11.0002 2.33331C5.9585 2.33331 1.8335 6.45831 1.8335 11.5C1.8335 16.5416 5.9585 20.6666 11.0002 20.6666Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 7.83331V12.4166" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.9951 15.1667H11.0034" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                        
                        <span>Help &amp; Center</span>
                    </li>
                    <li class="side-nav__item">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.33309 20.1667H14.6664C18.3514 20.1667 19.0114 18.6908 19.2039 16.8942L19.8914 9.56083C20.1389 7.32417 19.4973 5.5 15.5831 5.5H6.41643C2.50226 5.5 1.86059 7.32417 2.10809 9.56083L2.79559 16.8942C2.98809 18.6908 3.64809 20.1667 7.33309 20.1667Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.3335 5.49998V4.76665C7.3335 3.14415 7.3335 1.83331 10.2668 1.83331H11.7335C14.6668 1.83331 14.6668 3.14415 14.6668 4.76665V5.49998" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.8332 11.9167V12.8333C12.8332 12.8425 12.8332 12.8425 12.8332 12.8517C12.8332 13.8508 12.824 14.6667 10.9998 14.6667C9.18484 14.6667 9.1665 13.86 9.1665 12.8608V11.9167C9.1665 11 9.1665 11 10.0832 11H11.9165C12.8332 11 12.8332 11 12.8332 11.9167Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.846 10.0833C17.7285 11.6233 15.3085 12.54 12.8335 12.8516" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.40186 10.3308C4.46436 11.7425 6.79269 12.595 9.16686 12.8608" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                        
                        <span>Dark Mode</span>
                    </li>
                </ul>
            </div>          
            
            <ul class="side-nav">
                <li class="side-nav__item last-item">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.8999 8.05999C9.2099 4.45999 11.0599 2.98999 15.1099 2.98999H15.2399C19.7099 2.98999 21.4999 4.77999 21.4999 9.24999V15.77C21.4999 20.24 19.7099 22.03 15.2399 22.03H15.1099C11.0899 22.03 9.2399 20.58 8.9099 17.04" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.0001 12.5H3.62012" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.85 9.14999L2.5 12.5L5.85 15.85" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                                       
                    <span>Log Out</span>
                </li>
            </ul>            
        </nav>
        </div>

        <div
    class=""
    style="
      display: flex;
      justify-content: space-between;
      width: 90%;
      align-items: flex-start;
    "
  >
    <div class="users-list">
  
    </div>
    <div class="" style="margin-bottom: 20px; display: flex; justify-content: flex-start;">
  <button class="button">
    <i class="fa-solid fa-plus"></i>
    <span @click="showModal = true">Add new sub-category</span>
  </button>
</div>

  </div>

  <div
    class="table-responsive"
    style="margin-left: 260px;width: auto;"
  >
    <table
      id="example"
      class="table  table-bordered"
      style="margin-top: 10px"
    >
      <thead>
        <tr>
          <th>Index</th>
          <th>Category Name</th>
          <th>Category Description</th>
        
          <th>Actions</th>
        </tr>
      </thead>
      <tbody v-for="(product, index) in data_formBody" v-bind:key="product.subcategortId">
    <tr>
          <td>{{index + 1}}</td>
    
 
          <td>{{ product.categoryName  }}</td>
          <td>{{product.categoryDescription}}</td>
         
     



          <td style="display: flex; justify-content: space-between">
     <div class="dropdown" style="width: 200%">
              <button class="dropbtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                  />
                </svg>
              </button>
              <div class="dropdown-content" style="color: blue; width: 50%">
                <a href="#" @click="viewUseremail(user.email)">User Profile</a>
                <a href="#" @click="viewUseremails(user.userId)">Edit User</a>
                <a href="#" @click.prevent="DeleteUser(user.email)"
                  >Delete User</a
                >
                <a href="#" @click.prevent="AssigningRole(user.userId)"
                  >Assign Role</a
                >
                <a href="#" @click="ChangeUserStatus(user.userId)"
                  >Change User Status</a
                >
                <a href="#" @click.prevent="ActivatingUsers(user.email)"
                  >Activate User</a
                >
                <a href="#" @click.prevent="Confirming_emailfn(user.email)"
                  >Approve New User</a
                >
                <a href="#" @click.prevent="MakeUserApprover(user.email)"
                  >Make  Approver</a
                >
              </div>
            </div>
            <!-- Add more buttons for other actions -->
          </td>
          <!-- Add more data here -->
        </tr>
       
      </tbody>
      <tfoot>
        <tr>
          <th>Index</th>
          <th>Category Name</th>
          <th>Category Description</th>
        
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
             <h4 class="popup-title">Add Sub-Category</h4>
            <button @click="showModal = false" type="btn" class="popup-title">&times;</button>
          </div>
<div class="popup-body">
  <form>
    <div class="form-group d-flex">
  <label for="categoryName" class="mr-2" style="width: 120px;">Category Name:</label>
  <input
    type="text"
    class="form-control"
    id="storeName"
    placeholder="Enter Category Name"
    v-model="formdata.categoryName"
    required
    style="flex: 1; max-width: 200px;"
  />
</div>
<div class="form-group d-flex">
  <label for="categoryDescription" class="mr-2" style="width: 120px;">Category Description:</label>
  <input
    type="text"
    class="form-control"
    id="categoryDescription"
    placeholder="Enter Category Description"
    v-model="formdata.categoryDescription"
    required
    style="flex: 1; max-width: 200px;"
  />
</div>



<div class="d-flex justify-content-between">

  <button
    type="button"
    class="btn btn-secondary"
    style=""
    @click.prevent="cancelAdding()"
  >
    Cancel
  </button>
  <button
    type="submit"
    class="btn btn-primary"
    style=""
    @click.prevent="AddingStores()"
  >
    Add Sub-Category
  </button>
</div>

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
  name: "SubCategoryPage",
  mixins: [AppMixins],

  data() {
    return {
      showModal: false,
      showSubMenu: false,
      formdata: {
       
        categoryName:"",
        categoryDescription:"",
        
      },
      allplatformusers:{},
      LoggedInUser:{},
      data_formBody:{},
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
    
  
   





    async AddingStores() {

  
  var body={
    categoryName:this.formdata.categoryName,
    categoryDescription:this.formdata.categoryDescription,

  

  }

  

 console.log("Brand new: ", body);
 var response = await this.addingSubCategory(body);

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


async gettingLoggedInUser(){
  
  const response= await this.GettingLoggedInUser();
  this.LoggedInUser=response.body;
  
  
  
  
  
  console.log("Logged in user: ", this.LoggedInUser);
  return response;
  
  },
  async gettingProductByMerchantId() {
    try {
        // Fetch the logged-in user data
        const loggedInUserResponse = await this.gettingLoggedInUser();
        const loggedInUser = loggedInUserResponse.body;
        
        // Check if loggedInUser has the necessary data
        if (!loggedInUser || !loggedInUser.userId) {
            console.error("User data is invalid or missing");
            return; // Exit function early if user data is missing
        }

        // Fetch products by merchantId
        const response = await this.gettingSubCategoryByMerchantID(loggedInUser.userId);
        this.data_formBody = response.body;
  
        console.log("Form body: ", this.data_formBody);
        return response;
    } catch (error) {
        console.error("Error fetching products by merchantId:", error);
        return null;
    }
},
  },
  created(){
    console.log('Initial imageData:', this.formdata.imageUpload);
    this.gettingAllUsers();
    this.gettingLoggedInUser();
    this.gettingProductByMerchantId();
// Add a semicolon here


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
  width: 500px;
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

.dropdown-submenu {
  position: relative;
}

.dropdown-submenu a::after {
  transform: rotate(-90deg);
  position: absolute;
  right: 6px;
  top: .8em;
}

.dropdown-submenu .dropdown-menu {
  top: 0;
  left: 100%;
  margin-left: .1rem;
  margin-right: .1rem;
}


</style>
