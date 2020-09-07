<template>
    <div>
        <div class="textAreaTitle__inputTitle" label="Заголовок">
            <v-text-field v-model="data.title"
                          :placeholder="data.label"
                          style="max-width: 336px; margin-bottom: 16px;"></v-text-field>
        </div>
        <div class="textAreaTitle__inputContent">
            <v-text-field v-model="data.value"
                          :placeholder="data.placeholder"
                          style="width: 100%"></v-text-field>
        </div>
    </div>
</template>

<script>
    export default {
        name: "text-area-title",
        props: {
            data: {
                type: Object,
            },
        },
        data() {
            return {
            };
        },
        methods: {
        },
    };

</script>

<style scoped>
</style>
