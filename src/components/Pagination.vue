<template>
    <b-pagination
        class="pagination"
        :total="total"
        :current.sync="current"
        :order="order"
        :size="size"
        :simple="isSimple"
        :rounded="isRounded"
        :per-page="perPage"
        @change="$emit('change', $event)"
        aria-next-label="Next page"
        aria-previous-label="Previous page"
        aria-page-label="Page"
        aria-current-label="Current page">
    </b-pagination>
</template>

<script>
    export default {
        data() {
            return {
                total: 50,
                perPage: 10,
                order: '',
                size: '',
                isSimple: false,
                isRounded: true
            }
        },
        computed: {
            current: {
                get(){
                    return this.currentPage
                },
                set(){}
            }
        },
        props: {
            currentPage:{
                required: true,
                type: Number
            }
        }
    }
</script>

<style lang="scss" scoped>
.pagination{
    justify-content: center;
    margin: 0 auto;
}
</style>