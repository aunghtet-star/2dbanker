<template>
    <div>
    <!-- Navs -->
        <Nav/>
        <!-- content -->
        <slot/>
    </div>
</template>
<script>
import Nav from './Nav.vue'
export default {
    components : {Nav},
    name : 'Master'
}
</script>