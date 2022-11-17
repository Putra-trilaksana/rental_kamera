<template>
    <div>
    <!--Main Navigation-->
    <header>
        <!-- Sidebar -->
        <nav
            id="sidebarMenu"
            class="collapse d-lg-block sidebar collapse bg-white"
            >
        <div class="position-sticky">
            <div class="list-group list-group-flush mx-3 mt-4">
                
            <RouterLink
                class="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
                to="/"
                >
                <i class="me-3">
                    <font-awesome-icon icon="fa-solid fa-gauge-high" />
                </i>
                <span>Main dashboard</span>
            </RouterLink>

            <RouterLink
                href="/traffic"
                to="/traffic"
                class="list-group-item list-group-item-action py-2 ripple"
                >
                <i class="me-3">
                    <font-awesome-icon icon="fa-solid fa-chart-area" />
                </i>
                <span>Website traffic</span>
            </RouterLink>
            <!-- Product List -->
            <RouterLink
                to="/productList"
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
                >
                <i class="me-3">
                    <font-awesome-icon icon="fa-solid fa-list" />
                </i>
                <span>Product List</span>
            </RouterLink>

            <!-- Add Item  -->
            <RouterLink
                to="/addItem"
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
                >
                <i class="me-3">
                    <font-awesome-icon icon="fa-solid fa-layer-group" />
                </i>
                <span>Add Item</span>
            </RouterLink>

            <!-- User List -->
            <RouterLink
                to="/userList"
                class="list-group-item list-group-item-action py-2 ripple"
                >
                <i class="me-3">
                    <font-awesome-icon icon="fa-solid fa-users" />
                </i>
                <span>User List</span>
            </RouterLink>
            
            <!-- Order List -->
            <a
                href="#"
                class="list-group-item list-group-item-action py-2 ripple"
                >
                <i class="me-3">
                    <font-awesome-icon icon="fa-solid fa-chart-bar" />
                </i>
                <span>Orders</span>
            </a>

            </div>
        </div>
        </nav>
        <!-- Sidebar -->
    
        <!-- Navbar -->
        <nav
            id="main-navbar"
            class="navbar navbar-expand-lg navbar-light bg-white fixed-top"
            >
        <!-- Container wrapper -->
        <div class="container-fluid">
            <!-- Toggle button -->
            <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
            <i class="">
                <font-awesome-icon icon="fa-solid fa-bars" />
            </i>
            </button>
    
            <!-- Brand -->
            <a class="navbar-brand" href="#">
            <img
                src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                height="25"
                alt=""
                loading="lazy"
                />
            </a>
            <!-- Search form -->
            <form class="d-none d-md-flex input-group w-auto my-auto">
            <input
                    autocomplete="off"
                    type="search"
                    class="form-control rounded"
                    placeholder='Search (ctrl + "/" to focus)'
                    style="min-width: 225px"
                    />
            <span class="input-group-text border-0">
                <i class="">
                    <font-awesome-icon icon="fa-solid fa-search" />
                </i>
            </span>
            </form>
    
            <!-- Right links -->
            <ul class="navbar-nav ms-auto d-flex flex-row">
            <!-- Notification dropdown -->
            <li class="nav-item dropdown">
                <a
                class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                >
                <i class="">
                    <font-awesome-icon icon="fa-solid fa-bell" />
                </i>
                <span class="badge rounded-pill badge-notification bg-danger"
                        >1</span
                    >
                </a>
                <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                    >
                <li><a class="dropdown-item" href="#">Some news</a></li>
                <li><a class="dropdown-item" href="#">Another news</a></li>
                <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                </li>
                </ul>
            </li>
    
    
            <!-- Avatar -->
            <li class="nav-item dropdown">
                <a
                class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                >
                <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    class="rounded-circle"
                    height="22"
                    alt=""
                    loading="lazy"
                    />
                </a>
                <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                    >
                <li><a class="dropdown-item" href="#">My profile</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#" @click="logout">Logout</a></li>
                </ul>
            </li>
            </ul>
        </div>
        <!-- Container wrapper -->
        </nav>
        <!-- Navbar -->
    </header>
    <!--Main Navigation-->
    


    <!--Main layout-->
    <main style="margin-top: 58px">
        <div class="container pt-4">
            <router-view></router-view>
        </div>
    </main>
  <!--Main layout-->
    </div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router';

export default {
    components: {},
    methods: {
        async logout() {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/users/logout`, {
            method: "POST",
            credentials: "include",
          });

          if(!response){
            console.log(response);
          }
          else {
            this.$router.push({name: "Login"})
            console.log("Berhasil Logout");
          }
        } catch (error) {
          console.log(error);
        }
      },
    }
}

</script>


<style scoped>

    body {
    background-color: #fbfbfb;
    }
    @media (min-width: 991.98px) {
    main {
        padding-left: 240px;
    }
    }

    /* Sidebar */
    .sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 58px 0 0; /* Height of navbar */
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);
    width: 240px;
    z-index: 600;
    }

    @media (max-width: 991.98px) {
    .sidebar {
        width: 100%;
    }
    }
    .sidebar .active {
    border-radius: 5px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    }

    .sidebar-sticky {
    position: relative;
    top: 0;
    height: calc(100vh - 48px);
    padding-top: 0.5rem;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    }
</style>