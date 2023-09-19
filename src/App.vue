<template>
  <v-app id="inspire">
    <div class="nav d-flex align-center mb-2" style="height: 80px;">
      <v-container class="align-center d-flex justify-space-between">
        <div class="d-flex align-center" style="cursor: pointer;" @click="router.push({ name: 'home' })">
          <v-img
            src="@/assets/images/logo.svg"
            max-width="40"
            min-width="40"
            style="cursor: pointer;"
          />
          <h3 class="ms-3 font-weight-black">Fudo</h3>
        </div>
        
        <v-spacer />
        
        <template v-for="route in routes" :key="route.to">
          <router-link :to="route.to" class="mx-7">
            <p class="font-weight-medium text-h7">
              {{ route.title }}
            </p>
          </router-link>
        </template>

        <v-spacer />
        
        <v-icon
          icon="search"
          size="x-large"
          class="hover me-8 material-icons-outlined"
          style="cursor: pointer;"
        />
        <v-icon
          icon="shopping_bag"
          size="x-large"
          class="hover me-10 material-icons-outlined"
          style="cursor: pointer;"
        />
        <v-btn color="primary" prepend-icon="login" size="large">Login</v-btn>
      </v-container>
    </div>

    <v-main>
      <router-view />
    </v-main>

    <v-container>
      <div class="footer d-flex justify-space-between my-12">
        <div class="footer__col">
          <div class="d-flex align-center" @click="router.push({ name: 'home' })">
            <v-img
              src="@/assets/images/logo.svg"
              max-width="40"
              min-width="40"
              style="cursor: pointer;"
            />
            <h3 class="ms-3 font-weight-black">Fudo</h3>
          </div>

          <p class="text-caption-2">Our job is to filling your tummy with <br> delicious food and with fast <br> and free delivery.</p>

          <ul class="d-flex align-center" style="gap: 16px;">
            <li><a href="https://t.me/call_me_cringe"><img src="@/assets/images/links/tg_logo.svg" alt="vk" style="height: 24px;"></a></li>
            <li><a href="https://vk.com/disc1ple"><img src="@/assets/images/links/vk_logo.svg" alt="vk" style="height: 30px;"></a></li>
          </ul>
        </div>

        <div v-for="col in footerCols" :key="col.title">
          <h3 class="mb-8">{{ col.title }}</h3>

          <div class="footer__col">
            <template v-for="link in col.links" :key="link">
              <a href="https://t.me/call_me_cringe">{{ link }}</a>
            </template>
          </div>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = [
	{ title: 'Home', to: { name: 'home' } },
	{ title: 'Services', to: { name: 'services' } },
	{ title: 'Menu', to: { name: 'menu' } },
	{ title: 'Contact', to: { name: 'contact' } },
]

const footerCols = [
	{ title: 'About', links: ['About Us', 'Features', 'News', 'Menu'] },
	{ title: 'Company', links: ['Why Fudo?', 'Partner With Us', 'FAQ', 'Blog'] },
	{ title: 'Support', links: ['Account', 'Support Center', 'Feedback', 'Contact Us', 'Accessibilty'] },
	{ title: 'Get in Touch', links: ['Question or feedback?', 'We’d love to hear from you'] },
]
</script>

<style lang="scss">
$color-primary: #EB5757;
$box-shadow: 0px 0px 45px 10px rgba(255, 219, 165, 0.30);


body {
  font-family: 'Montserrat', sans-serif;
  background-color: #1e2027;

  a {
    text-decoration: none;
    color: #1e2027;
  }

  ul {
    list-style-type: none;
  }
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.v-container {
  width: 1320px !important;
  max-width: 1320px !important;
  padding: 0 !important;
}

.billet {
  background-color: #FEE9DE;
  color: #EB5757;
  border-radius: 200px;
  padding: 16px 24px;
}

.text-h1 {
  font-size: 12px !important;
}

.router-link-active,
.router-link-exact-active,
a:hover, .hover:hover {
  color: $color-primary;
  cursor: pointer;
  transition: 0.3s;
}

.router-link-active,
.router-link-exact-active {
  border-bottom: 1px solid $color-primary;
}

.text--primary {
  color: $color-primary
}

.absolute-centered {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}

.text-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.text-clamp-2 {
  @extend .text-clamp-1;
  -webkit-line-clamp: 2;
}
.text-clamp-3 {
  @extend .text-clamp-1;
  -webkit-line-clamp: 3;
}

.overlay {
  position: fixed;
  z-index: 2000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overscroll-behavior: contain;
}

</style>