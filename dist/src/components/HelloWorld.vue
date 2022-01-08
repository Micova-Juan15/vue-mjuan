<template>
  <div class="hello">
    <!-- Navbar Start -->
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm fixed-top"
    >
      <div class="container">
        <a class="navbar-brand" href="#">  </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#Home"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#About">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Skill">My SKill</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Galery">My Galery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Navbar End -->

    <!--jumbotron Start -->

    <section
      class="jumbotron text-center pt-n1"
      style="background-color: #e2edff"
      id="Home"
    >
      <img
        src="../assets/a1.jpg"
        alt="Profil"
        width="200"
        class="rounded-circle img-thumbnail"
      />
      <h1 class="display-4">Micova juan </h1>
      <p class="lead">Mahasiswa</p>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,160L48,154.7C96,149,192,139,288,149.3C384,160,480,192,576,192C672,192,768,160,864,128C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>

    <!-- jumbotron End -->

    <!-- About Start -->

    <section id="About">
      <div class="container">
        <!-- Carousel Start-->
        <div class="row">
          <div class="col">
            <div
              id="carouselExampleDark"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                  <img
                    src="../assets/a22.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Carousel END -->
        </div>
      </div>

      <!-- Gelombang Start -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e2edff"
          fill-opacity="1"
          d="M0,192L60,165.3C120,139,240,85,360,69.3C480,53,600,75,720,101.3C840,128,960,160,1080,160C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <!-- Gelombang End -->
    </section>
    <!-- About End -->

    <!-- SKill Start -->
    <section id="Skill">
      <div class="jumbotron jumbotron-fluid bg-dark">
        <div class="container">
          <div>
            <img src="../assets/a3.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </section>
    <!--Skill End -->

    <!-- My Galery Start -->
    <section class="Galery pt-5" style="background-color: #e2edff" id="Galery">
      <div class="container">
        <div class="row text-center">
          <div class="col" style="margin-top: 200">
            <h2 class="fs-1">My Galery</h2>
          </div>
        </div>
      </div>
      <div class="row pt-2">
        <div class="col-md-4">
          <div class="card" style="width: 18rem">
            <img src="../assets/a4.jpg" class="card-img-top" alt="Studio" />
            <div class="card-body">
              <p class="card-text">Studio</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card" style="width: 18rem">
            <img
              src="../assets/a5.jpg"
              class="card-img-top"
              alt="Studio"
            />
            <div class="card-body">
              <p class="card-text">Studio</p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card" style="width: 18rem">
            <img
              src="../assets/logo.png"
              class="card-img-top"
              alt="Studio"
            />
            <div class="card-body">
              <p class="card-text">Studio</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Gelombang Start -->

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,96L48,80C96,64,192,32,288,32C384,32,480,64,576,85.3C672,107,768,117,864,106.7C960,96,1056,64,1152,53.3C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <!-- Gelombang End -->
    </section>
    <!-- My Galery END -->

    <!-- Contact Start -->
    <section id="Contact">
      <div class="container">
        <div class="row text-center">
          <div class="col">
            <h2>Contact Me</h2>
          </div>
        </div>

        <div class="row justify-content-center mb-3">
          <div class="col-md-6">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">Nama Lengkap</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  aria-describedby="name"
                />
              </div>

              <div class="mb-3">
                <label for="Email" class="form-label">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  aria-describedby="Email"
                />
              </div>

              <div class="mb-3">
                <label for="pesan" class="form-label">Pesan</label>
                <textarea class="form-control" id="pesan" rows="3"></textarea>
              </div>

              <button type="submit" class="btn btn-primary">Kirim</button>
            </form>
          </div>
        </div>
      </div>
      <!--Gelombang Start-->

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0d6efd"
          fill-opacity="1"
          d="M0,224L30,192C60,160,120,96,180,101.3C240,107,300,181,360,213.3C420,245,480,235,540,224C600,213,660,203,720,197.3C780,192,840,192,900,192C960,192,1020,192,1080,192C1140,192,1200,192,1260,176C1320,160,1380,128,1410,112L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>

      <!-- Gelombang End -->
    </section>
    <!-- Contact End -->

    <!-- footer Start -->
    <footer class="bg-primary text-white text-center pb-5">
      <p>
        Create by
        <a
          href="https://www.instagram.com/micova_j/"
          class="text-white fw-bold"
        >
          </a
        >
      </p>
    </footer>
    <!-- footer End -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style>
#Skill {
  background-color: #e2edff;
}

.pt-n1 {
  padding-top: 6rem !important;
}
</style>
