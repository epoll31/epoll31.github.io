# Why use this `helpers` folder?

The `generateHeaders` function in the `headerHelpers.ts` requires the compiled MDX componenets to have a type.
Only the server components have a string type that match the true value, the client componenets all have a object
type that carries more info for the client component.

## Why do only client components have the type?

Server components are rendered on the server and sent over as markdown, meaning that React already knows the type whereas the client components carry more information to handle client-side rendering.

["Typically, when React hydrates on the client, it speed-renders all of the components, building up a virtual representation of the application. It can't do that for Server Components, because the code isn't included in the JS bundle."](https://www.joshwcomeau.com/react/server-components/#:~:text=Typically%2C%20when%20React%20hydrates%20on%20the%20client%2C%20it%20speed%2Drenders%20all%20of%20the%20components%2C%20building%20up%20a%20virtual%20representation%20of%20the%20application.%20It%20can%27t%20do%20that%20for%20Server%20Components%2C%20because%20the%20code%20isn%27t%20included%20in%20the%20JS%20bundle)

## Notes

Note: the `generateHeaders` only requires `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` to have the correct type.
