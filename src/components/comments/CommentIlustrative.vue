<template>
    <div class="">
        <div class="flex min-h-28 w-[450px] space-x-2 border border-b-[1px] border-t-[1px] p-1">
            <div>
                <!-- <img :src="img"
                    class="rounded-full w-44" alt="userImage" /> -->
            </div>
            <div>
                <p>{{ name }}</p>
                <h2>{{ description }}</h2>
                <h3>{{ date }}</h3>
                <p>{{ rating }}</p>
                <p>{{ comment }}</p>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>

const props = defineProps({
    img: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_WE4hUxUFNJ_WC_5NwTBjUxSr1xMF7batA&s'
    },
    name:{
        type: String,
        default: 'Jonty Andrews'
    },
    description:{
        type: String,
        default: '"Me ha ayudado bastante"'
    },
    date: {
        type: String,
        default: 'March 13, 2020'
    },
    rating: {
        type: String,
        default: '⭐⭐⭐⭐⭐'
    },
    comment: {
        type: String,
        default: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, perspiciatis impedit officia quaerat'
    }
})
</script>

<style scoped></style>