<template>
    <v-container>
        <v-row>
            <v-text-field
                    v-model="data.title"
                    label="Заголовок"
            ></v-text-field>
        </v-row>
        <v-row>
            <v-textarea
                    counter
                    :rows="data.rows || 5"
                    v-model="data.value"
                    label="Описание"
                    :placeholder="data.placeholder ? data.placeholder : ''"
                    style="width: 100%"
                    :counter-value="(val)=>`${val.length}/${data.maxLength}`"
                    :error="data.value.length>data.maxLength"
            ></v-textarea>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "text-area-title",
        props: {
            data: {
                type: Object,
            },
        },
    };

</script>

<style scoped>
</style>
