<template>
    <div :id="id"
    class="card"
         :class="{'pointer': draggable}"
         :draggable="draggable"
         @dragstart="dragStart"
         @dragend="dragEnd"
         @dragover.stop
    >
    <slot />
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: ['id','draggable'],
        methods: {
            dragStart: e=> {
                e.dataTransfer.setData("card_id", e.target.id)
                setTimeout(()=>{
                    e.target.style.display='none'
                },0)
            },
            dragEnd: e => {
                setTimeout(()=>{
                    e.target.style.display='block'
                },0)
            }
        }
    }
</script>

<style scoped>
.card {
    background-color: #1e1e1e;
    color: white;
    margin: 10px
}
    .pointer {
        cursor: pointer;
    }
</style>
