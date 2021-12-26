<template>
    <ul class="nav bg-dark py-4">
        <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
           <router-link class="nav-link active" to="/product">Product</router-link>

        </li>
        <li class="nav-item">
            <router-link class="nav-link text-white" to="/cart"><i class="fas fa-cart-plus"></i>
             <small class="badge badge-danger" style="font-size:9px">{{cart.length}}</small>
            </router-link>
        </li>
    </ul>
</template>
<script>

export default {
    name : 'Nav',
    data(){
        return {
            cart : []
        }
    },
    created(){
        this.cart = this.$root.cart;
    }

}
</script>