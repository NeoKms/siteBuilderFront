<template>
    <v-row no-gutters class="justify-center">
        <v-switch v-model="data.value"></v-switch>
    </v-row>
</template>

<script>
    export default {
        name: "SvitchSimple",
        props: {
            data: {
                type: Object,
            },
        },
    };
</script>

<style scoped>

</style>
