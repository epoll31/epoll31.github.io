# Why use this `helpers` folder?

The `generateHeaders` function in the `headerHelpers.ts` requires the compiled MDX componenets to have a type.
Only the server components have a string type that match the true value, the client componenets all have a object
type that carries more info for the client component.

Note: the `generateHeaders` only requires `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` to have the correct type.
