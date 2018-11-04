<template>
    <div class = "cloud">
        <slot name = "char_name"></slot>
        <slot></slot>
        <slot name = 'skipButton'></slot>
    </div>
</template>

<script>

export default {
    name: 'dialogCloud',
}

</script>

<style>
.cloud{
    flex: 1;
    padding: 15px 20px;
    font-size: 1.5em;
    border-radius: 40px;
    font-family: Helvetica, sans-serif;
    border: 4px solid #000;
    display: flex;
    align-self: flex-end;
    height: 250px;
    width: 850px;
    background: #eeca92;
}
</style>
