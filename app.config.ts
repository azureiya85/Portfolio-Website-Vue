export default defineAppConfig({
 ui: {
    colors: {
      // Map Nuxt UI's 'primary' alias to custom accent palette
      // The name here ('customAccent') must match the prefix used in  @theme variables
      primary: 'customAccent', 

      // Map Secondary color alias
      secondary: 'customBox', 

      // Nuxt UI needs a 'neutral' color. Map it to a standard Tailwind palette or custom one.
      neutral: 'slate', // Or 'zinc', 'gray', or 'customNeutral' for custom ones
    }
  }
})