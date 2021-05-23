<template>
    <div
    :id="id"
    class="board"
    @dragover.prevent
    @drop.prevent="drop"
    >
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "Board",
        props: ["id"],
        methods: {
            drop: e => {
                const card_id = e.dataTransfer.getData('card_id')
                const card = document.getElementById(card_id)
                e.target.appendChild(card)
            }
        }
    }
</script>

<style scoped>
.board {
    background: #00acc1;
    min-height: 100px;
    min-width: 100px;
}
</style>
