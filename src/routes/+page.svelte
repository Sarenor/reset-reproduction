<script lang="ts">
    import { FileDropzone } from '@skeletonlabs/skeleton';
    
    let files = undefined;
    let fileInput;
    let vanillaInput;

    $: resetFileDropzone = () =>  {
        if(fileInput) {
            fileInput.value = null;
        }
        files = undefined;
    }

    $: console.log("Skeleton:", fileInput);
    $: console.log("Vanilla: ", vanillaInput);
</script>

<form method="POST" action="/" enctype="multipart/form-data"> 
    <FileDropzone bind:fileInput={fileInput} multiple accept="image/*" name="signage" bind:files/>

    <button class="btn variant-ghost-warning" on:click={() => (files = undefined)} type="button">Won't reset files</button>
    <button class="btn variant-filled-error" on:click={resetFileDropzone} type="button">
        should reset files but doesn't
    </button>
    <input type="file" bind:this={vanillaInput} name="vanillainput" multiple/>
    <button class="btn variant-filled-error" on:click={() => vanillaInput.value = null} type="button">
        reset vanilla input
    </button>
    <button class="btn variant-ringed-primary" type="submit">Submit</button>
</form>