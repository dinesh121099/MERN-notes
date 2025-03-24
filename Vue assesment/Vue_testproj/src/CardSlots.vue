<script>
    export default {
        name:'Card'
    }
</script>

<template>
    <h1>Slots</h1>
    <div class="card">
        <slot></slot>
        <div class="actions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<style scoped>
    .card {
        border: 1px solid #ddd;
        padding: 16px;
        border-radius: 8px;
        background-color: #f9f9f9; 
    }

    .actions {
        margin-top: 10px;
        text-align: right;
    }
</style>