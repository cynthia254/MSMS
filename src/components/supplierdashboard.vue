<template>
        <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">


    <div class="container" style="display: flex;">
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
                    <li class="side-nav__item">
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1668 9.66671V14.25C20.1668 18.8334 18.3335 20.6667 13.7502 20.6667H8.25016C3.66683 20.6667 1.8335 18.8334 1.8335 14.25V8.75004C1.8335 4.16671 3.66683 2.33337 8.25016 2.33337H12.8335" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.1668 9.66671H16.5002C13.7502 9.66671 12.8335 8.75004 12.8335 6.00004V2.33337L20.1668 9.66671Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.4165 12.4166H11.9165" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.4165 16.0834H10.0832" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                        
                        <span>Invoices</span>
                    </li>
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

        <main class="main-content">
            <div class="top-container">
                <div action="#" class="search" style="
    display: flex;
    align-items: center;
    padding: 11px 0 11px 24px;
    max-width: 492px;
    width: 100%;
    border: 1px solid #C3D4E9;
    border-radius: 70px;
    gap: 26px;
    background: #FFFFFF;
    opacity: 0.8;"


>
                    <svg class="search__icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5418 19.25C15.3513 19.25 19.2502 15.3512 19.2502 10.5417C19.2502 5.73223 15.3513 1.83337 10.5418 1.83337C5.73235 1.83337 1.8335 5.73223 1.8335 10.5417C1.8335 15.3512 5.73235 19.25 10.5418 19.25Z" stroke="#596780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.1668 20.1667L18.3335 18.3334" stroke="#596780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>         
                    <input type="text" class="search__input" placeholder="Search something here" style="
    border: none;
    outline: none;
    width: calc(100% - 78px);
">           
                </div>
                <div class="user-nav">
                    <button class="notification">
                        <svg class="notification__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0201 2.91003C8.71009 2.91003 6.02009 5.60003 6.02009 8.91003V11.8C6.02009 12.41 5.76009 13.34 5.45009 13.86L4.30009 15.77C3.59009 16.95 4.08009 18.26 5.38009 18.7C9.69009 20.14 14.3401 20.14 18.6501 18.7C19.8601 18.3 20.3901 16.87 19.7301 15.77L18.5801 13.86C18.2801 13.34 18.0201 12.41 18.0201 11.8V8.91003C18.0201 5.61003 15.3201 2.91003 12.0201 2.91003Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                            <path d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"/>
                        </svg>                            
                    </button>
                    <div class="user-info">
                        <svg class="user-image" width="23" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" fill="white" fill-opacity="0.01"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12.0321 19C8.67459 19 6.80643 17.2316 6.80643 14V13H17.1158L17.1434 13.9715C17.2358 17.2145 15.4003 19 12.0321 19ZM15.0875 15C14.8526 16.3955 13.9089 17 12.0321 17C10.1563 17 9.18179 16.3902 8.89677 15H15.0875ZM14 8H17V10H14V8ZM10 8H7V10H10V8Z" fill="black"/>
                        </svg>
                        <span class="user-name">Cynthia M.</span>                        
                    </div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5999 7.45837L11.1666 12.8917C10.5249 13.5334 9.4749 13.5334 8.83324 12.8917L3.3999 7.45837" stroke="#596780" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>    
                </div>
            </div>
            <div class="bottom-container">
                <div class="bottom-container__left">
                    <div class="box spending-box">
                        <div class="header-container">
                            <h3 class="section-header">Total Order Statistics</h3>
                            <div class="year-selector">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.8" width="24" height="24" rx="6" fill="#F6F7F9"/>
                                    <path d="M13.4999 15.96L10.2399 12.7C9.85492 12.315 9.85492 11.685 10.2399 11.3L13.4999 8.04004" stroke="#1A202C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span>2023</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.8" width="24" height="24" rx="6" fill="#F6F7F9"/>
                                    <path d="M10.4551 15.96L13.7151 12.7C14.1001 12.315 14.1001 11.685 13.7151 11.3L10.4551 8.04004" stroke="#1A202C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                    
                            </div>
                        </div>
                        <div >
                            <BarChart />
                        </div>
                       
      
                    </div>
                    <div class="box total-box">
                        <div class="total-box__left">
                            <div class="header-container">
                                <h3 class="section-header">Total Profit</h3>
                                <svg class="up-arrow" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="42" height="42" rx="8" fill="#F6F7F9"/>
                                    <path d="M27.0702 18.57L21.0002 12.5L14.9302 18.57" stroke="#7FB519" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21 29.5V12.67" stroke="#7FB519" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                
                            </div>
                            <h1 class="price">$50,530.00<span class="price-currency">(USD)</span></h1>
                            <p><span class="percentage-increase">20%</span> increase compared to last week</p>                         
                        </div>
                        <div class="total-box__right">
                            <div class="header-container">
                                <h3 class="section-header">Total Loss</h3>
                                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="42" height="42" rx="8" fill="#F6F7F9"/>
                                    <path d="M27.0702 23.43L21.0002 29.5L14.9302 23.43" stroke="#FF4423" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21 12.5V29.33" stroke="#FF4423" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                                                    
                            </div>
                            <h1 class="price">$50,530.00<span class="price-currency">(USD)</span></h1>                            
                            <p><span class="percentage-decrease">10%</span> decrease compared to last week</p>
                        </div>
                    </div>
                    <div class="box transaction-box">
                        <div class="header-container">
                            <h3 class="section-header">New Orders </h3>
                            <div class="date-selector">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 1.5V3.75" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 1.5V3.75" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2.625 6.8175H15.375" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.7713 10.275H11.778" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.7713 12.525H11.778" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.99686 10.275H9.00359" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.99686 12.525H9.00359" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.22049 10.275H6.22723" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.22049 12.525H6.22723" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span>1 Jan - 1 Feb 2022</span>       
                            </div>                                
                        </div>
                        <table class="transaction-history">
                            <tr>
                                <th>Order ID</th>
                                <th>Orders</th>
                                <th>Date
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.96004 4.47498L6.70004 7.73498C6.31504 8.11998 5.68504 8.11998 5.30004 7.73498L2.04004 4.47498" stroke="#90A3BF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                                        
                                </th>
                                <th>Quantity</th>
                                <th>Amount
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.96004 4.47498L6.70004 7.73498C6.31504 8.11998 5.68504 8.11998 5.30004 7.73498L2.04004 4.47498" stroke="#90A3BF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                                        
                                </th>
                                <th>Status
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.96004 4.47498L6.70004 7.73498C6.31504 8.11998 5.68504 8.11998 5.30004 7.73498L2.04004 4.47498" stroke="#90A3BF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>                                       
                                </th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                                                        
                                    Tote Bags
                                </td>
                                <td>Jan 01,2022</td>
                                <td>4</td>
                                <td>$2,000.00</td>
                              
                                <td>
                                    <svg class="status" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="16" height="16" rx="8" fill="#BCE455" fill-opacity="0.3"/>
                                        <circle cx="8" cy="8" r="4" fill="#7FB519"/>
                                    </svg>                                        
                                    New
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                                                        
                                    Leather Bags
                                </td>
                                <td>Jan 01,2022</td>
                                <td>10</td>
                                <td>$2,000.00</td>
                               
                                <td>
                                    <svg class="status" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="16" height="16" rx="8" fill="#BCE455" fill-opacity="0.3"/>
                                        <circle cx="8" cy="8" r="4" fill="#7FB519"/>
                                    </svg>                                        
                                    New
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                                                        
                                    Tote Bags
                                </td>
                                <td>Jan 01,2022</td>
                                <td>4</td>
                                <td>$2,000.00</td>
                                <td>
                                    <svg class="status" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="16" height="16" rx="8" fill="#BCE455" fill-opacity="0.3"/>
                                        <circle cx="8" cy="8" r="4" fill="#7FB519"/>
                                    </svg>                                        
                                    New
                                </td>
                            </tr>
                        </table>
                    </div>                   
                </div>
                <div class="bottom-container__right">
    <div class="box">
        <div class="header-container">
            <h3 class="section-header">Top Selling Product</h3>                                                                                 
        </div>
        <table class="table table-bordered">
                    <thead >
                      <tr class="first" style="background:orange !important;color: white;">
                        <th>Image</th>
                        <th>Product </th>
                        <th class="a-center">Stock</th>
                        <th class="a-center">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href=#><img src="../assets/bags.jpg" style="width: 50px;height: 50px;"></a> 
                        </td>
                        <td>Tote Bags</td>
                        <td class="a-center">3</td>
                        <td class="a-center">$1999</td>
                      </tr>
                      <tr>
                        <td>
                          <a href=#><img src="../assets/iphone.jpg" style="width: 50px;height: 50px;"></a> 
                        </td>
                        <td>Iphone</td>
                        <td class="a-center">10</td>
                        <td class="a-center">$1999</td>
                      </tr>
                      <tr>
                        <td>
                          <a href=#><img src="../assets/watch.jpg" style="width: 50px;height: 50px;"></a> 
                        </td>
                        <td>Watch</td>
                        <td class="a-center">5</td>
                        <td class="a-center">$1999</td>
                      </tr>
                      <tr>
                        <td>
                          <a href=#><img src="../assets/leatherbags.jpg" style="width: 50px;height: 50px;"></a> 
                        </td>
                        <td>Bags </td>
                        <td class="a-center">5</td>
                        <td class="a-center">$1999</td>
                      </tr>
                      </tbody>
                      </table>

    
</div>

                    <div class="box spending-box">
                        <div class="header-container">
                            <h3 class="section-header">Best Store Sales</h3>
                                                                                   
                        </div>
                        <div >
                            <PieChart />
                        </div>
                       
               </div>
               </div>
            </div>
        </main>
    </div>
  

</template>
<script>
import BarChart from '@/components/barchart.vue';
import  PieChart from '@/components/piechart.vue';
                     

export default {
  components: {
    BarChart,
    PieChart,
  },
  name:'supplierDashboard',
  data() {
    return {
    }
    },
}

</script>
<style>

.product-info {
    display: flex;
    align-items: center; /* Align items vertically in the center */
}
/* Add border styles */
.table-bordered {
  border-collapse: collapse;
  border: 1px solid #ddd; /* Add a border around the table */
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #ddd; /* Add a border to table cells */
  text-align: left; /* Align text to the left */
}

/* Style the first row differently if needed */
.table-bordered thead tr.first th {
  /* Add specific styles for the first row headers */
}

.table {
   width: 100%;
   max-width: 100%;
   background-color: transparent;
   border-collapse: collapse;
   text-align: left;
   left:0;
   
   
   thead {
      th {
         border-bottom: 2px solid #E8E8E8;
         text-transform: uppercase;
         color: #181818;
         font-weight: bolder;
      }
   }
   
   tbody {
      tr {
         td {
            border-bottom: 1px solid #E8E8E8;
            padding: 5px;
         }
      }
   }
}


.product-details,
.product-image {
    display: inline-block; /* Display as inline-block */
}

.product-details h4 {
    margin-bottom: 5px; /* Add some bottom margin to separate elements */
}

.product-details p {
    margin: 0; /* Remove default margins */
}

.product-image {
    margin-left: 20px; /* Add some space between details and image */
}

.small-product-image {
    width: 100px; /* Adjust the width as needed */
    height: auto; /* Maintain aspect ratio */
}


/* -------------- SIDEBAR -------------- */
.sidebar {
    width: 240px;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    justify-content: space-between;
    border-right: 1px solid rgb(214, 186, 134);
    padding: 0 16px;
    overflow-x: auto;
    background-color: #fafafa;
    z-index: 1000; 
}



.sidebar__logo {
    display: flex;
    justify-content: center;
    align-items: center;
}

.sidebar__logo-header {
    margin-left: 14px;
}

.side-nav {
    display: flex;
    flex-direction: column;
}

.side-nav__header {
    font-size: 14px;
    line-height: 21px;
    color: #90A3BF;
    padding-bottom: 10px;
    display: inline-block;
}

.side-nav__header, .side-nav__item > span {
    letter-spacing: -2%;
    font-weight: 500;
}

.side-nav__item {
    list-style: none;
    color: #596780;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 0 14px 16px;    
    border-radius: 10px;
    transition: all .4s;
    cursor: pointer;
    white-space: nowrap;
}

.side-nav__item > svg {
  flex-shrink: 0;
}

.side-nav__item.last-item {
    margin-bottom: 32px;
}

.side-nav__item:not(:last-child) {
    margin-bottom: 4px;
}

.side-nav__item:hover,  .side-nav__item-active {
    background-color:rgb(240, 182, 75);
    color: white;
}

/* -------------- MAIN CONTENT -------------- */
.main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: auto;
}

/* -------------- TOP CONTAINER -------------- */
.top-container {
    border-bottom: 1px solid #F3F5F7;
    padding: 18px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}



/* -------------- USER NAV -------------- */
.user-nav, .user-info {
    display: flex;
    align-items: center;
}

.user-name {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -2%;
    margin: 0 37px 0 12px;
}

.user-image {
    height: 44px;
    width: 44px;
}

/* -------------- NOTIFICATION -------------- */
.notification {
    border: 1px solid #C3D4E9;
    background-color: transparent;
    position: relative;
    margin-right: 32px;
    height: 44px;
    width: 44px;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
}

.notification::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    top: -2px;
    right: 3px;
}

/* -------------- BOTTOM CONTAINER -------------- */
.bottom-container {
    display: flex;
    gap: 24px;
    padding: 32px;
    background-color: #F3F5F7;
}

.box {
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 24px;
    margin-bottom: 24px; /*fix later*/
}

.bottom-container__left {
    width: 70%;
}

.bottom-container__right {
    width: 30%;
}

.spending-statistics {
    max-height: 338px;
}

/* -------------- BAR CHART -------------- */
.bar-chart {
    max-height: 223px;
    width: 100%;
    display: flex;
    justify-content: center;
}

/* -------------- HEADER -------------- */
.header-container {
    color: #1A202C;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    
    font-weight: 600;
    letter-spacing: -2%;
}

.section-header {
    line-height: 24px;
    font-size: 16px;
}

.header-container span {
    line-height: 21px;
    font-size: 14px;
}

.year-selector {
    display: flex;
    align-items: center;
    gap: 24px;
}

.total-box {
    display: flex;
}

.total-box__left {
    border-right: 1px solid #F0F0F0;
    flex: 1;
}

.total-box__right {
    flex: 1;
}

.up-arrow, .total-box__left {
    margin-right: 24px;
}

.price {
    line-height: 150%;
    margin-bottom: 14px;
}

.price-currency {
    line-height: 21px;
    font-size: 14px;
    font-weight: 600;
    color: #90A3BF;
    margin-left: 8px;
}

.total-box p, .box p {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: #90A3BF;
}

.percentage-increase {
    color: #7FB519;
}

.percentage-decrease {
    color: #FF4423;
}

.date-selector {
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #C3D4E9;
    border-radius: 6px;
}

.date-selector span {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    margin-left: 8px;
}

.transaction-box {
   margin-bottom: 0; 
}

.transaction-history {
    width: 100%;
    text-align: left;
    vertical-align: middle;
    margin-top: 24px;
}

/* -------------- TABLE -------------- */
tr > th {
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #90A3BF;
    padding-bottom: 24px;
}

tr > td {
    font-weight: 600;
    font-size: 14px;
    letter-spacing: -2%;
    padding: 8px 0;
}

tr > td:first-child {
    display: flex;
    align-items: center;
    gap: 9px;
}

.status {
    margin-right: 8px;
}

/* -------------- BUTTON -------------- */
.button-box {
    display: flex;
    justify-content: space-between;
    margin-top: 56px;
}

.btn {
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

.btn-purple {
    background-color: #7C5CFC;
    color: white;
}

.btn-white {
    background-color: white;
    color: black;
    border: 2px solid #7C5CFC;
}

/* -------------- PIE CHART -------------- */
.pie-chart {
    height: 220px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.spending-box {
    position: relative;
}

.overall-spending {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 32%;
    left: 50%;
    text-align: center;
}

.overall-spending > h4 {
    color: #596780;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
}

.overall-spending > span {
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
}

.pie-chart__labels {
    display: flex;
    flex-direction: column;
    gap: 17px;
    margin-top: 40px;
}

.pie-chart__labels-item {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
}

.pie-chart__labels-item, .label {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.label {
    gap: 12px;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #596780;
} 

.label__color {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.first {
    background: #EB7CA6;
}

.second {
    background: #FFACC8;
}

.third {
    background: #CC6FF8;
}

.fourth {
    background: #7C5CFC;
}

.fifth {
    background: #5CAFFC;
}

.sixth {
    background: #A1A9FE;
}

@media (max-width: 1300px) {
    .bottom-container {
        flex-direction: column;
        height: auto;
    }

    .bottom-container__left, .bottom-container__right {
        width: 100%;
    }
    
  .btn {
    width: 45%;
  }
}

@media(max-width: 900px) {
  .top-container {
        gap: 24px;
    }
    .total-box {
        flex-direction: column;
    }

    .total-box__left {
        margin-right: 0;
        border-right: none;
        border-bottom: 1px solid #F3F5F7;
        padding-bottom: 24px;
        margin-bottom: 24px;
    }

    .up-arrow {
        margin-right: 0;
    }
}

@media(max-width: 780px) {
    .top-container {
        flex-direction: column;
        gap: 18px;
    }

    .user-nav {
        justify-content: space-between;
    }

    .section-header {
        font-size: 18px;
    }

    table, tbody, th, td, tr { 
		display: block; 
	}

    tr > th {
        position: absolute;
		top: -9999px;
		left: -9999px;
    }

    td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #F3F5F7; 
		position: relative;
		padding-left: 50%; 
	}

    td::before {
        position: absolute;
        left: 0;
    }

    tr > td {
        text-align: end;
    }

    tr > td:first-child {
        justify-content: end;
    }

    td:nth-of-type(1):before { content: "Transactions"; }
    td:nth-of-type(2):before { content: "Date"; }
    td:nth-of-type(3):before { content: "Amount"; }
    td:nth-of-type(4):before { content: "Status"; }

    .total-box p, .box p {
        font-size: 14px;
    }

    .pie-chart__labels-item {
        font-size: 16px;
    }
}

@media(max-width: 600px) {
    .sidebar {
        display: none;
    }
    
    .year-selector {
      gap: 12px;
    }
    
    .button-box {
      flex-direction: column;
      gap: 20px;
      margin-top: 28px;
    }
    
    .btn {
        width: 100%;
        font-size: 15px;
    }
}

</style>