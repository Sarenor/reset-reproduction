<script lang="ts">
    import { FileDropzone } from '@skeletonlabs/skeleton';
    
    let files = undefined;
    let fileInput;

    $: console.log(fileInput);
</script>

<form method="POST" action="/"> 
    <FileDropzone bind:fileInput={fileInput} multiple accept="image/*" name="signage" bind:files/>

    <button class="btn variant-ghost-warning" on:click={() => (files = undefined)} type="button">Won't reset files</button>
    <button class="btn variant-filled-error" on:click={() => fileInput.value = ''} type="button">
        Will reset files
    </button>
    <button class="btn variant-ringed-primary" type="submit">Submit</button>
</form>