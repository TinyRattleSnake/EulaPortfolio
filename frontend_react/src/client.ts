import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

let projectId = "";
let token = "";
if (import.meta.env.MODE === "development") {
    projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
    token = import.meta.env.VITE_SANITY_TOKEN;
}
else {
    projectId = "odlw8dbt";
    token = "skZ9pybfrBLWTdyFtPz1HUDIfrXF1wAwRDlSFv9dYigyNjdLiQ3htzIKalWDmJIqXcQqUuCNeSE7Zvmm3F4WFGLhpWjqk7Jh7aeVO7dfiupaZnIBAs1OulZ6RXIEK5geR6PFzeKLpqOWEowgiz5NTEbdfjOZBv9sO3J8jH3ouOQCh84C1zfv";
}
export const client = createClient({
    projectId: projectId,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
