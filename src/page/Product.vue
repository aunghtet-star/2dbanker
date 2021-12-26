<template>
    <Master>
    <Loader v-show="isLoad"/>
    <div>
        <div v-show="!isLoad" class="container">
            <div class="row">
                <div v-for="(p,i) in products" :key="i" class="col-md-4 mt-3">
                    <div class="card m-1" style="min-height:100%">
                        <div class="card-header">
                            {{p.title}}
                        </div>
                        <div class="card-body">
                            <img :src="p.image" width="100%" alt="">
                        </div>
                        <div class="card-footer">
                            <span>Price <small>${{p.price}}</small></span>
                            <a @click="addtoCart(p)" class="btn btn-sm btn-dark float-right">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Master>
</template>
<script>
import Master from '../layouts/Master.vue'
import Loader from '../component/Loader.vue'
import axios from 'axios'
export default {
  components: { Master , Loader},
    name : 'Product',
    data(){
        return {
            isLoad : true,
            products : []
        }
    },
    created(){
        axios.get('https://fakestoreapi.com/products')
        .then((res) => {
            this.products = res.data;
            this.isLoad = false;
        });
    },
    methods : {
        addtoCart(p){
            var cart = this.$root.cart;
            var isinCart = cart.find(v=>{
                return v.id == p.id;
            })
            if(isinCart){
                isinCart.qty++;
            }else{
                cart.push({...p,qty:1});
            }
        }
    }
}
</script>