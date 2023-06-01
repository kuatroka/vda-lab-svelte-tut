<script>
    let slider_value = 70;
    $: multiplied_value = slider_value * 2
    
    let text_value = 'twice '
    $: doubled_text = text_value.repeat(2)
</script>


<input type="range" min="0" max="200" bind:value={slider_value} />
<p>The value {slider_value} multiplied by 2 is {multiplied_value}.</p>


<input type="text" bind:value={text_value} />
<p>The value {text_value}  is {doubled_text}.</p>

