<script lang="ts">
  import { WebsiteName } from "./../../config"
  import "../../app.css"
  import ThemeToggle from "../../components/ThemeToggle.svelte";

  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()
</script>




<div class="">
  {@render children?.()}
</div>

<ThemeToggle />


