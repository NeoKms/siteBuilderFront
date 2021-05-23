<template>
    <div class="flexbox">
        <Board id="board1">
            <Card id="card1" draggable="true">
                <p>Card one</p>
            </Card>
        </Board>
        <Board id="board2">
            <Card id="card2" draggable="true">
                <p>Card Two</p>
            </Card>
        </Board>
    </div>
</template>
<script>
    import Board from "./dragndrop/Board"
    import Card from "./dragndrop/Card"

    export default {
        name: "Main",
        data() {
            return {}
        },
        components: {
            Board, Card
        },
        methods: {}
    }
</script>
<style scoped>
	.flexbox {
		display: flex;
		justify-content: space-between;
		width: 100%;
		max-width: 400px;
		overflow: hidden;
	}
</style>
