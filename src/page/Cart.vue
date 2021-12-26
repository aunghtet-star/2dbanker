<template>
    <div>
        <div class="container">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Product</th>
                        <th>+ -</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(p,i) in cart" :key="i">
                        <td>{{p.title}}</td>
                        <td>
                            <img :src="p.image" width="100px" alt="">
                        </td>
                        <td>
                            <button @click="addBtn(p)" class="btn btn-sm btn-success">+</button>
                            <button @click="removeBtn(p)" class="btn btn-sm btn-danger">-</button>
                        </td>
                        <td>
                            {{p.qty}}
                        </td>
                        <td>
                            {{p.qty * p.price}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name : 'Cart',
    data(){
        return {
            cart : []
        }
    },
    created(){
        this.cart = this.$root.cart;
    },
    methods : {
        addBtn(p){
            p.qty++;
        },
        removeBtn(p){
            p.qty--;
        }
    }
}
</script>