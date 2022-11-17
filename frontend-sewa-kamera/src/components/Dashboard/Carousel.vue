<template>
    <!--Main Navigation-->
    <header>
      <!-- Carousel wrapper -->
      <div id="introCarousel" class="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-mdb-target="#introCarousel" data-mdb-slide-to="0" class="active"></li>
          <li data-mdb-target="#introCarousel" data-mdb-slide-to="1"></li>
          <li data-mdb-target="#introCarousel" data-mdb-slide-to="2"></li>
        </ol>

        <!-- Inner -->
        <div class="carousel-inner">
          <!-- Single item -->
          <div class="carousel-item active">
            <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
              <div class="d-flex justify-content-center align-items-center h-100">
                <div class="text-white text-center">
                  <h1 class="mb-3">Learn Bootstrap 5 with MDB</h1>
                  <h5 class="mb-4">Best & free guide of responsive web design</h5>
                  <a class="btn btn-outline-light btn-lg m-2" href="https://www.youtube.com/watch?v=c9B4TPnak1A" role="button" rel="nofollow" target="_blank">Start tutorial</a>
                  <a class="btn btn-outline-light btn-lg m-2" href="https://mdbootstrap.com/docs/standard/" target="_blank" role="button">Download MDB UI KIT</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Single item -->
          <div class="carousel-item">
            <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
              <div class="d-flex justify-content-center align-items-center h-100">
                <div class="text-white text-center">
                  <h2>You can place here any content</h2>
                </div>
              </div>
            </div>
          </div>

          <!-- Single item -->
          <div class="carousel-item">
            <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
              <div class="d-flex justify-content-center align-items-center h-100">
                <div class="text-white text-center">
                  <h2>And cover it with any mask</h2>
                  <a class="btn btn-outline-light btn-lg m-2" href="https://mdbootstrap.com/docs/standard/content-styles/masks/" target="_blank" role="button">Learn about masks</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Inner -->

        <!-- Controls -->
        <a class="carousel-control-prev" href="#introCarousel" role="button" data-mdb-slide="prev">
          <font-awesome-icon icon="fa-solid fa-chevron-left" />
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#introCarousel" role="button" data-mdb-slide="next">
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
          <span class="sr-only">Next</span>
        </a>
      </div>
      <!-- Carousel wrapper -->
    </header>
    <!--Main Navigation-->
</template>
<script>

export default {
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
      }
    }
}
</script>
<style scoped>
        /* Carousel styling */
        #introCarousel,
        .carousel-inner,
        .carousel-item,
        .carousel-item.active {
          height: 95vh;
        }

        #introCarousel {
          margin-top: -58.59px;
        }

        .carousel-item:nth-child(1) {
          background-image: url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
        }

        .carousel-item:nth-child(2) {
          background-image: url('https://mdbootstrap.com/img/Photos/Others/images/77.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
        }

        .carousel-item:nth-child(3) {
          background-image: url('https://mdbootstrap.com/img/Photos/Others/images/78.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
        }
        .navbar .nav-link {
          color: #fff !important;
        }
</style>