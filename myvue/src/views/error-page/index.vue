<template>
    <div>
        <transition name="fade-transform" mode="out-in">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>

</style>