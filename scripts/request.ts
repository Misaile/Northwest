import { useAppStores } from "@/stores/app";

export const query = async (query) => {
    const app = useAppStores()
    app.loadingbar.active = true;
    app.loadingbar.indeterminate = true;
    const cfg = useRuntimeConfig();
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: query,
        }),
    };
    const request = await fetch(cfg.public.wp_graphql, options);
    const res = await request.json();
    app.loadingbar.active = false;
    app.loadingbar.indeterminate = false;
    return res.data;
}