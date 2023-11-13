<template>
  <v-app id="inspire">
    <div class="nav mb-2">
      <v-container class="align-center d-flex justify-space-between" style="height: 80px; position: relative;">
        <div class="d-flex align-center pointer" @click="router.push({ name: 'home' })">
          <v-img src="@/assets/images/logo.svg" max-width="40" min-width="40" class="pointer" />
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
        
        <v-icon icon="search" size="x-large" class="hover me-8 material-icons-outlined" style="cursor: pointer;" />
        
        <v-hover close-delay="300">
          <template #default="{ isHovering, props }">
            <div v-bind="props">
              <v-badge :content="totalItems()" class="me-10 hover" style="cursor: pointer;" color="primary">
                <v-icon icon="shopping_bag" size="x-large" class="material-icons-outlined" :color="isHovering ? 'primary' : 'black'" />
              </v-badge>
            
              <the-cart-component v-if="isHovering" class="cart" />
            </div>
          </template>
        </v-hover>
        
        <v-btn v-if="!loggedIn" color="primary" prepend-icon="login" size="large" text="Login" @click="router.push( { name: 'login' })" />
        <div v-else class="d-flex align-center">
          <list-item :title="user.name" :caption="user.phone" class="mr-8" />
          <v-btn color="grey" text="Log out" prepend-icon="logout" @click="logout" />
        </div>
      </v-container>
    </div>

    <v-main style="margin-top: 110px;">
      <router-view />
    </v-main>

    <v-container>
      <div class="footer d-flex justify-space-between mb-12" style="margin-top: 120px;">
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

          <p>Our job is to filling your tummy with <br> delicious food and with fast <br> and free delivery.</p>

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
import { useCartStore } from '@/store/cart'
import TheCartComponent from '@/components/TheCartComponent.vue'
import { useAuthStore } from './store/auth'
import ListItem from './components/UI/ListItem.vue'
import { computed } from 'vue'

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

const { totalItems } = useCartStore()
const { user, logout } = useAuthStore()
const loggedIn = computed(() => {
	return user.phone != ''
})
</script>

<style lang="scss">
$color-primary: #EB5757;
$color-secondary: #FFDDCC;
$box-shadow: 0px 0px 45px 10px rgba(182, 182, 182, 0.3);


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
  width: 1280px !important;
  max-width: 1280px !important;
  padding: 0 !important;
}

.billet {
  background-color: #FEE9DE;
  color: $color-primary;
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

.pointer {
  cursor: pointer;
}

.grey {
  color:#828282
}

.text-caption-color {
  color: $color-primary;
  font-weight: 600;
  letter-spacing: 2.88px;
  text-transform: uppercase;
}

h1 {
  font-size: 4rem;
  line-height: 4.5rem;
}

h2 {
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 900;
}

.bgr-secondary {
  background-color: $color-secondary;
}

.nav {
  position: fixed;
  width: 100vw;
  z-index: 10;
  top: 0;
  background-color: #fff;
  box-shadow: $box-shadow;
}

.cart {
  position: absolute;
  top: 80px; 
  right: 0;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}


</style>